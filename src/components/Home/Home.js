import React, { useState, useEffect } from 'react';
import './Home.css';
import Input from '../Input/Input';
import CityCard from '../CityCard/CityCard';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useDispatch, useStore, useSelector } from 'react-redux';
import {
	addCityWeather,
	addCity,
	deleteCityWeather,
	detailCityWeather,
} from '../../redux/actions';
import {
	searchCityWeather,
	addCityToLocalStorage,
	getWeatherFromStorage,
} from '../../Api';

let citiesFromStorage = JSON.parse(localStorage.getItem('cities'));

const Home = ({ updateWeather, citiesWeather }) => {
	const [city, setCity] = useState('');
	const [cityWeather, setCityWeather] = useState('');
	const cities = useSelector((state) => state.mainReducer.cities);

	const store = useStore();

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	getWeatherFromLocalStorage();
	// }, []);

	// const getWeatherFromLocalStorage = async () => {
	// 	if (!citiesFromStorage) {
	// 		return;
	// 	}
	// 	const weather = await getWeatherFromStorage(citiesFromStorage);
	// 	if (weather) {
	// 		dispatch(addCityWeather(weather));
	// 	}
	// };

	const onSearchCity = (e) => {
		setCity(e.target.value);
		e.target.value = '';
	};

	const onHandelSubmit = async (e) => {
		e.preventDefault();
		setCity('');
		const weatherAtCity = await searchCityWeather(city);
		if (weatherAtCity.title) {
			dispatch(addCityWeather(weatherAtCity));
			dispatch(addCity(weatherAtCity.title));
		}
	};

	const onRemove = (e, key) => {
		e.preventDefault();
		const chosenCitiesWeather = citiesWeather.filter((city) => key !== city.id);
		const chosenCities = chosenCitiesWeather.map((city) => city.title);
		dispatch(deleteCityWeather(chosenCitiesWeather, chosenCities));
		localStorage.setItem(JSON.stringify(chosenCities));
	};
	const onGoToCard = (e, key) => {
		console.log(key);
		// const chosenCityWeather = citiesWeather.filter((city) => city.id === key);
		// dispatch(detailCityWeather(chosenCityWeather[0]));
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
				{citiesWeather
					? citiesWeather.map((city) =>
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
