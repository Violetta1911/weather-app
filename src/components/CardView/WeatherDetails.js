import React from 'react';
const WeatherDetails = ({ cityWeather }) => {
	return (
		<div className='other-spec'>
			<p>
				<span className='temp-min'>
					min темп. <strong>{Math.round(cityWeather.temp_min)} </strong>°C
				</span>
				<span>
					max <strong>{Math.round(cityWeather.temp_max)} </strong>°C
				</span>
			</p>

			<p>
				Влажность <strong>{cityWeather.humidity} </strong> %
			</p>
			<p>
				Давление <strong>{cityWeather.pressure} </strong>мм рт.ст.
			</p>
			<p>
				Скорость ветра <strong>{Math.round(cityWeather.wind.speed)}</strong> м/с
			</p>
		</div>
	);
};

export default WeatherDetails;
