import React, { Children } from 'react';

import './CityCard.css';
import Button from '../Button/Button';

const CityCard = ({
	city,
	onClick,
	buttonClassName,
	buttonTitle,
	children,
}) => {
	const icon = `http://openweathermap.org/img/wn/${city.weather}@2x.png`;
	return (
		<div className='city-card'>
			<h1 className='title'>{city.title}</h1>
			<p className='temp'>{Math.round(city.temp)}°C</p>
			<img src={icon} alt='weather' />

			{children}
			<Button
				className={buttonClassName}
				title={buttonTitle}
				onClick={(e) => onClick(e, city.title)}
			/>
		</div>
	);
};
export default CityCard;
