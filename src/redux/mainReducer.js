import { ADD_CITY, ADD_CITY_WEATHER, DELETE_CITY_WEATHER } from './types';

const initialState = {
	city: '',
	citiesWeather: [],
};

export const mainReducer = (state = initialState, action) => {
	console.log('mainReducer>>', state, action);
	switch (action.type) {
		case ADD_CITY:
			return {
				...state,
				city: action.city,
			};
		case ADD_CITY_WEATHER:
			const weatherData = state.citiesWeather;
			weatherData.push(action.city_weather);

			return {
				...state,
				citiesWeather: weatherData,
			};

		case DELETE_CITY_WEATHER:
			return {
				...state,
				citiesWeather: action.city_weather,
			};

		default: {
			return state;
		}
	}
};
