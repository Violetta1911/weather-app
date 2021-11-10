import React from 'react';
import './CardView.css';
import CityCard from '../CityCard/CityCard';
import { Link } from 'react-router-dom';
import WeatherDetails from './WeatherDetails';

const CardView = ({ cityWeather, updateWeather }) => {
	console.log(cityWeather.id);
	return (
		<div className='card-view'>
			<CityCard
				key={cityWeather.id}
				city={cityWeather}
				onGoTo={() => console.log('hello')}
				onUpdate={(e) => updateWeather(e, cityWeather.title)}
				linkAddress='/'
				buttonClassNameUpdate='update-card'
				buttonClassNameRemove='remove-card'
				buttonTitleUpdate='обновить'
				linkClassName='back'
				linkTitle='вернуться к списку'
				linkRole='link'>
				<WeatherDetails weatherFromStorage={cityWeather} />
				<Link to='/' className='back'>
					Вернуться к списку
				</Link>
			</CityCard>
		</div>
	);
};

export default CardView;
