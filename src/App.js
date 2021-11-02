import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardView from './components/CardView/CardView';
import Home from './components/Home/Home';
import { withRouter } from 'react-router';

const api = {
	key: '6dbb48040117b5976da7c1c299b58cf0',
	base: 'https://api.openweathermap.org/data/2.5/',
};
let citiesFromStorage = JSON.parse(localStorage.getItem('cities'));

const App = (props) => {
	const [query, setQuery] = useState('');
	const [citiesWeather, setCitiesWeather] = useState([]);
	const [chosenCity, setChosenCity] = useState([]);

	useEffect(() => getWeather(), []);

	function getWeather() {
		let data = [];
		if (citiesFromStorage === null) {
			return;
		}
		citiesFromStorage.forEach((element) => {
			fetch(`${api.base}weather?q=${element}&units=metric&APPID=${api.key}`)
				.then((response) => response.json())
				.then((weather) => {
					const cityWeather = {
						id: Math.random().toFixed(4),
						title: weather.name,
						temp: weather.main.temp,
						humidity: weather.main.humidity,
						wind: weather.wind,
						pressure: weather.main.pressure,
						clouds: weather.clouds,
						weather: weather.weather[0].icon,
					};

					data.push(cityWeather);
				});
			return data;
		});
		setCitiesWeather(data);
	}

	async function searchWeather(e) {
		if (e.key !== 'Enter') {
			return;
		}
		const response = await fetch(
			`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`,
		);
		const weather = await response.json();

		setQuery('');

		if (weather && weather.main) {
			const cityWeather = {
				id: Math.random().toFixed(4),
				title: weather.name,
				temp: weather.main.temp,
				humidity: weather.main.humidity,
				wind: weather.wind,
				pressure: weather.main.pressure,
				clouds: weather.clouds,
				weather: weather.weather[0].icon,
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

	const onHandleInput = (e) => {
		setQuery(e.target.value);
	};
	const onGoToCard = (e, key) => {
		e.preventDefault();
		props.history.push('/CardView');
		const chosenCity = citiesWeather.filter((city) => city.id === key);
		setChosenCity(chosenCity);
	};
	const onRemove = (e, key) => {
		e.preventDefault();
		const chosenCity = citiesWeather.filter((city) => city.id !== key);
		setCitiesWeather(chosenCity);
	};

	return (
		<Switch>
			<Route exact={true} path='/'>
				<Home
					searchWeather={searchWeather}
					query={query}
					citiesWeather={citiesWeather}
					onHandleInput={onHandleInput}
					onGoToCard={onGoToCard}
					onRemove={onRemove}
				/>
			</Route>
			<Route path='/CardView'>
				<CardView chosenCity={chosenCity} />
			</Route>
		</Switch>
	);
};
const AppWithRouter = withRouter(App);
export default AppWithRouter;
