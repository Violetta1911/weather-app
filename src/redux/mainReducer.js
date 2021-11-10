import {
	ADD_CITY,
	ADD_CITY_WEATHER,
	DELETE_CITY_WEATHER,
	DETAIL_CITY_WEATHER,
} from './types';

const initialState = {
	cities: [],
	citiesWeather: [],
	detailCityWeather: {},
};

export const mainReducer = (state = initialState, action) => {
	console.log('mainReducer>>', state, action);

	const citiesData = state.cities;
	const weatherData = state.citiesWeather;

	switch (action.type) {
		case ADD_CITY:
			citiesData.push(action.city);
			return {
				...state,
				cities: citiesData,
			};
		case ADD_CITY_WEATHER:
			weatherData.push(action.city_weather);

			return {
				...state,
				citiesWeather: weatherData,
			};

		case DELETE_CITY_WEATHER:
			return {
				citiesWeather: action.data.city_weather,
				cities: action.data.city,
			};
		case DETAIL_CITY_WEATHER:
			return {
				...state,
				detailCityWeather: action.detail_weather,
			};
		default: {
			return state;
		}
	}
};
