import React from 'react';
import './CardView.css';
import CityCard from '../CityCard/CityCard';
import { Link } from 'react-router-dom';
import WeatherDetails from './WeatherDetails';

const CardView = ({ weatherFromStorage, updateWeather }) => {
	return (
		<div className='card-view'>
			<CityCard
				key={weatherFromStorage.id}
				city={weatherFromStorage}
				onGoTo={() => console.log('hello')}
				onUpdate={(e) => updateWeather(e, weatherFromStorage.title)}
				linkAddress='/'
				buttonClassNameUpdate='update-card'
				buttonClassNameRemove='remove-card'
				buttonTitleUpdate='обновить'
				linkClassName='back'
				linkTitle='вернуться к списку'
				linkRole='link'>
				<WeatherDetails weatherFromStorage={weatherFromStorage} />
				<Link to='/' className='back'>
					Вернуться к списку
				</Link>
			</CityCard>
		</div>
	);
};

export default CardView;
