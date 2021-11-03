import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardView from './components/CardView/CardView';
import Home from './components/Home/Home';
import { withRouter } from 'react-router';
import { uuid } from 'uuidv4';
import { getWeatherByCity } from './Api';

let citiesFromStorage = JSON.parse(localStorage.getItem('cities'));

const App = () => {
	const [query, setQuery] = useState('');
	const [citiesWeather, setCitiesWeather] = useState([]);
	const [cityWeather, setCityWeather] = useState({});

	useEffect(() => getWeather(), []);

	async function getWeather() {
		if (citiesFromStorage === null) {
			return;
		}
		const promises = await citiesFromStorage.map(async (city) => {
			const weather = await getWeatherByCity(city);

			const cityWeather = {
				id: { uuid },
				title: weather.name,
				temp: weather.main.temp,
				feels_like: weather.main.feels_like,
				temp_min: weather.main.temp_min,
				temp_max: weather.main.temp_max,
				humidity: weather.main.humidity,
				wind: weather.wind,
				pressure: weather.main.pressure,
				clouds: weather.clouds,
				weather: weather.weather[0].icon,
				coord: weather.coord,
			};
			return cityWeather;
		});
		const data = await Promise.all(promises);

		setCitiesWeather(data);
	}

	async function searchWeather(e) {
		if (e.key !== 'Enter') {
			return;
		}
		const weather = await getWeatherByCity(query);

		setQuery('');

		if (weather && weather.main) {
			const cityWeather = {
				id: { uuid },
				title: weather.name,
				temp: weather.main.temp,
				feels_like: weather.main.feels_like,
				temp_min: weather.main.temp_min,
				temp_max: weather.main.temp_max,
				humidity: weather.main.humidity,
				wind: weather.wind,
				pressure: weather.main.pressure,
				clouds: weather.clouds,
				weather: weather.weather[0].icon,
				coord: weather.coord,
			};

			citiesFromStorage
				? citiesFromStorage.push(weather.name)
				: (citiesFromStorage = [weather.name]);

			localStorage.setItem('cities', JSON.stringify(citiesFromStorage));

			setCitiesWeather([...citiesWeather, cityWeather]);
		} else {
			alert('К сожалению, объект не обнаружен...Попробуйте снова ');
		}
	}

	async function updateWeather(e, city) {
		e.preventDefault();

		const weather = await getWeatherByCity(city);

		if (weather && weather.main) {
			const cityWeather = {
				id: { uuid },
				title: weather.name,
				temp: weather.main.temp,
				feels_like: weather.main.feels_like,
				temp_min: weather.main.temp_min,
				temp_max: weather.main.temp_max,
				humidity: weather.main.humidity,
				wind: weather.wind,
				pressure: weather.main.pressure,
				clouds: weather.clouds,
				weather: weather.weather[0].icon,
			};
			setCityWeather(cityWeather);
		}
	}

	const handleInput = (e) => {
		setQuery(e.target.value);
	};
	const onGoToCard = (e, key) => {
		const chosenCity = citiesWeather.filter((city) => city.id === key);
		setCityWeather(chosenCity[0]);
	};
	const onRemove = (e, key) => {
		e.preventDefault();
		const chosenCity = citiesWeather.filter((city) => city.id !== key);
		const cities = chosenCity.map((city) => city.title);
		localStorage.setItem('cities', JSON.stringify(cities));
		setCitiesWeather(chosenCity);
	};

	return (
		<Switch>
			<Route exact={true} path='/'>
				<Home
					searchWeather={searchWeather}
					query={query}
					citiesWeather={citiesWeather}
					handleInput={handleInput}
					onGoToCard={onGoToCard}
					onRemove={onRemove}
					updateWeather={updateWeather}
				/>
			</Route>
			<Route path='/CardView'>
				<CardView updateWeather={updateWeather} cityWeather={cityWeather} />
			</Route>
		</Switch>
	);
};
const AppWithRouter = withRouter(App);
export default AppWithRouter;
