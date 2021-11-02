import React from 'react';
import './Home.css';
import Input from '../Input/Input';
import CityCard from '../CityCard/CityCard';
import { withRouter } from 'react-router';

const Home = (props) => {
	return (
		<div className='home'>
			<Input
				className='search-city'
				placeholder='Погода  в ...'
				onHandleInput={props.onHandleInput}
				query={props.query}
				searchWeather={props.searchWeather}
			/>
			<div className='city-cards'>
				{props.citiesWeather
					? props.citiesWeather.map((city) => (
							<CityCard
								key={city.id}
								city={city}
								onGoToCard={props.onGoToCard}
								onRemove={props.onRemove}
							/>
					  ))
					: null}
			</div>
		</div>
	);
};
const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;
