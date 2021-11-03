import React from 'react';
import './CardView.css';
import CityCard from '../CityCard/CityCard';
import { Link } from 'react-router-dom';

const CardView = ({ cityWeather, updateWeather }) => {
	return (
		<div className='card-view'>
			<CityCard
				key={cityWeather.id}
				city={cityWeather}
				onGoTo={() => console.log('hello')}
				onClick={(e) => updateWeather(e, cityWeather.title)}
				linkAddress='/'
				buttonClassName='update-card'
				buttonTitle='обновить'
				linkClassName='back'
				linkTitle='вернуться к списку'
				linkRole='link'>
				<div className='other-spec'>
					<p>
						Влажность <strong>{cityWeather.humidity} </strong> %
					</p>
					<p>
						Давление <strong>{cityWeather.pressure} </strong>мм рт.ст.
					</p>
					<p>
						Скорость ветра <strong>{Math.round(cityWeather.wind.speed)}</strong>{' '}
						м/с
					</p>
				</div>
				<Link to='/' className='back'>
					Вернуться к списку
				</Link>
			</CityCard>
		</div>
	);
};

export default CardView;
