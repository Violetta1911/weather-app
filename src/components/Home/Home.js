import React from 'react';
import './Home.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import CityCard from '../CityCard/CityCard';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

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
			<div className='city-cards'>
				{citiesWeather
					? citiesWeather.map((city) => (
							<div className='card-wrapper'>
								<Link
									to='/CardView'
									className='more'
									role='button'
									onClick={(e) => onGoToCard(e, city.id)}>
									<CityCard
										key={city.id}
										city={city}
										onClick={(e) => onRemove(e, city.id)}
										linkAddress='/CardView'
										buttonClassName='remove'
										buttonTitle='x'
										linkClassName='more'
										linkTitle='подробнее'
										linkRole='button'
									/>
								</Link>

								<Button
									className='update'
									title='обновить'
									onClick={(e) => updateWeather(e, city.title)}
								/>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};
const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;
