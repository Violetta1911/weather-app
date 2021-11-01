import React, { useState } from 'react';
import './App.css';
import Input from './Input/Input';
import CityCard from './CityCard/CityCard';

const api = {
	key: '3fd95c5ab33bbc3e4c0fc1415844e29c',
	base: 'https://api.openweathermap.org/data/2.5/',
};

function App(props) {
	const [query, setQuery] = useState('');
	const [city, setCity] = useState([]);
	const [chosedCity, setChoosedCity] = useState();

	async function searchWeather(e) {
		if (e.key === 'Enter') {
			const response = await fetch(
				`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`,
			);
			const weather = await response.json();

			setQuery('');
			typeof weather.main !== 'undefined'
				? setCity([
						...city,
						{
							title: weather.name,
							temp: weather.main.temp,
							humidity: weather.main.humidity,
							wind: weather.wind,
							pressure: weather.main.pressure,
							clouds: weather.clouds,
							weather: weather.weather[0].icon,
						},
				  ])
				: alert('К сожалению, объект не обнаружен...Попробуйте снова ');
		}
	}
	const onHandleInput = (e) => {
		setQuery(e.target.value);
	};
	const onGoToCard = (e) => {
		e.preventDefault();
		console.log(e.target);
		setChoosedCity(e.target.value);

		props.history.push('/CardView');
	};

	return (
		<div className='App'>
			<Input
				className='search-city'
				placeholder='Погода  в ...'
				onHandleInput={onHandleInput}
				query={query}
				searchWeather={searchWeather}
			/>
			<div className='city-cards'>
				{city.map((city, key) => (
					<CityCard key={key} city={city} onGoToCard={onGoToCard} />
				))}
			</div>
		</div>
	);
}

export default App;
