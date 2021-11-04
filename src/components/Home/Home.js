import React from 'react';
import './Home.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import CityCard from '../CityCard/CityCard';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';

const Home = ({
	handleInput,
	searchWeather,
	citiesWeather,
	onGoToCard,
	onRemove,
	query,
	updateWeather,
}) => {
	return (
		<div className='home'>
			<Input
				className='search-city'
				placeholder='Погода  в ...'
				handleInput={handleInput}
				query={query}
				searchWeather={searchWeather}
			/>
			<Button />
			<div className='city-cards'>
				{citiesWeather
					? citiesWeather.map((city) => (
							<Link
								key={uuid}
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
					  ))
					: null}
			</div>
		</div>
	);
};
export default Home;
