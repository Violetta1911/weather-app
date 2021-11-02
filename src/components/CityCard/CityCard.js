import React from 'react';
import './CityCard.css';
import Button from '../Button/Button';

const CityCard = ({ city, onGoToCard, onRemove }) => {
	const icon = `http://openweathermap.org/img/wn/${city.weather}@2x.png`;
	return (
		<div className='city-card'>
			<Button
				className='remove'
				title='x'
				onClick={(e) => onRemove(e, city.id)}
			/>

			<h1 className='title'>{city.title}</h1>
			<p className='temp'>{Math.round(city.temp)}°C</p>

			<img src={icon} alt='weather' />
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
			<Button
				className='more'
				title='подробнее'
				onClick={(e) => onGoToCard(e, city.id)}
			/>
		</div>
	);
};
export default CityCard;
