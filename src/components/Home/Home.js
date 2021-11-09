import React, { useState } from 'react';
import './Home.css';
import Input from '../Input/Input';
import CityCard from '../CityCard/CityCard';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useDispatch, useSelector } from 'react-redux';
import { addCityWeather, deleteCityWeather } from '../../redux/actions';
import {
	searchCityWeather,
	addCityToLocalStorage,
	getWeatherFromStorage,
} from '../../Api';

const Home = ({ onGoToCard, updateWeather }) => {
	const [city, setCity] = useState('');

	const dispatch = useDispatch();

	let weather = useSelector((state) => state.mainReducer.citiesWeather);
	console.log(weather);

	const onSearchCity = (e) => {
		setCity(e.target.value);
		e.target.value = '';
	};

	const onHandelSubmit = async (e) => {
		e.preventDefault();
		setCity('');
		const weatherAtCity = await searchCityWeather(city, uuid());
		if (weatherAtCity.title) {
			addCityToLocalStorage(weatherAtCity.title);
			dispatch(addCityWeather(weatherAtCity));
		}
	};

	const onRemove = (e, key) => {
		e.preventDefault();
		const chosenCity = weather.forEach((city) => console.log(city.id));
		console.log(key);
		// const cities = chosenCity.map((city) => city.title);
		// localStorage.setItem('cities', JSON.stringify(cities));
		// dispatch(deleteCityWeather(chosenCity));
	};

	return (
		<div className='home'>
			<Input
				className='search-city'
				placeholder='Погода  в ...'
				handleInput={onSearchCity}
				onHandelSubmit={onHandelSubmit}
				query={city}
			/>
			<div>Searching for Weather at {city}</div>
			<div className='city-cards'>
				{weather
					? weather.map((city) =>
							Array.isArray(city) ? (
								city.map((item) => (
									<Link
										key={uuid()}
										to='/CardView'
										className='more'
										role='button'
										onClick={(e) => onGoToCard(e, item.id)}>
										<CityCard
											key={item.id}
											city={item}
											onRemove={(e) => onRemove(e, item.id)}
											onUpdate={(e) => updateWeather(e, item.title)}
											linkAddress='/CardView'
											buttonClassNameRemove='remove'
											buttonTitleRemove='x'
											buttonClassNameUpdate='update'
											buttonTitleUpdate='обновить'
											linkClassName='more'
											linkTitle='подробнее'
											linkRole='button'
										/>
									</Link>
								))
							) : (
								<Link
									key={uuid()}
									to='/CardView'
									className='more'
									role='button'
									onClick={(e) => onGoToCard(e, city.id)}>
									<CityCard
										key={city.id}
										city={city}
										onRemove={(e) => onRemove(e, city.id)}
										onUpdate={(e) => updateWeather(e, city.title)}
										linkAddress='/CardView'
										buttonClassNameRemove='remove'
										buttonTitleRemove='x'
										buttonClassNameUpdate='update'
										buttonTitleUpdate='обновить'
										linkClassName='more'
										linkTitle='подробнее'
										linkRole='button'
									/>
								</Link>
							),
					  )
					: null}
			</div>
		</div>
	);
};
export default Home;
