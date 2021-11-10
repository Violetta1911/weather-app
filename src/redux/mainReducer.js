import { detailCityWeather } from './actions';
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
	switch (action.type) {
		case ADD_CITY:
			return {
				...state,
				cities: [...state.cities, action.city],
			};
		case ADD_CITY_WEATHER:
			return {
				...state,
				citiesWeather: [...state.citiesWeather, action.city_weather],
			};

		case DELETE_CITY_WEATHER:
			return {
				...state,
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
