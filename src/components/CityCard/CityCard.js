import React from 'react';
import { Link } from 'react-router-dom';
import './CityCard.css';

const CityCard = ({ city, onGoToCard }) => {
	const icon = `http://openweathermap.org/img/wn/${city.weather}@2x.png`;
	return (
		<div className='city-card' onClick={(e) => onGoToCard(e)}>
			<h1 className='title'>{city.title}</h1>
			<p className='temp'>{Math.round(city.temp)}°C</p>

			<img src={icon}></img>
			<div className='other-spec'>
				<p>
					Влажность <strong>{city.humidity} </strong> %
				</p>
				<p>
					Давление <strong>{city.pressure} </strong>мм рт.ст.
				</p>
				<p>
					Скорость ветра <strong>{Math.round(city.wind.speed)}</strong> м/с
				</p>
			</div>
		</div>
	);
};
export default CityCard;
