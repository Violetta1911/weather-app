import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardView from './components/CardView/CardView';
import Home from './components/Home/Home';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

const App = () => {
	const citiesWeather = useSelector((state) => state.mainReducer.citiesWeather);

	const cityWeather = useSelector(
		(state) => state.mainReducer.detailCityWeather,
	);

	return (
		<Switch>
			<Route exact={true} path='/'>
				<Home citiesWeather={citiesWeather} cityWeather={cityWeather} />
			</Route>
			<Route path='/CardView'>
				<CardView cityWeather={cityWeather} />
			</Route>
		</Switch>
	);
};
const AppWithRouter = withRouter(App);
export default AppWithRouter;
