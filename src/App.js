import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardView from './components/CardView/CardView';
import Home from './components/Home/Home';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherFromStorage } from './Api';
import { addCityWeather } from './redux/actions';
import { uuid } from 'uuidv4';

let citiesFromStorage = JSON.parse(localStorage.getItem('cities'));

const App = () => {
	const [citiesWeather, setCitiesWeather] = useState([]);

	const dispatch = useDispatch();

	const weatherFromStorage = useSelector(
		(state) => state.mainReducer.citiesWeather,
	);

	useEffect(() => {
		getWeatherFromLocalStorage();
	}, [citiesFromStorage]);

	const getWeatherFromLocalStorage = async () => {
		const weather = await getWeatherFromStorage(citiesFromStorage, uuid);
		if (weather) {
			dispatch(addCityWeather(weather));
		}
	};

	const onGoToCard = (e, key) => {
		const chosenCity = weatherFromStorage.filter((city) => city.id === key);
		setCitiesWeather(...citiesWeather, chosenCity);
	};

	return (
		<Switch>
			<Route exact={true} path='/'>
				<Home onGoToCard={onGoToCard} />
			</Route>
			<Route path='/CardView'>
				<CardView weatherFromStorage={weatherFromStorage} />
			</Route>
		</Switch>
	);
};
const AppWithRouter = withRouter(App);
export default AppWithRouter;
