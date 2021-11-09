import {
	ADD_CITY,
	ADD_CITY_WEATHER,
	DELETE_CITY_WEATHER,
	UPDATE_CITY_WEATHER,
} from './types';

export function addCity(city) {
	return {
		type: ADD_CITY,
		city,
	};
}
export function addCityWeather(city_weather) {
	return {
		type: ADD_CITY_WEATHER,
		city_weather,
	};
}
export function deleteCityWeather(weather, id) {
	return {
		type: DELETE_CITY_WEATHER,
		data: { weather, id },
	};
}

export function updateCityWeather(weather, id) {
	return {
		type: UPDATE_CITY_WEATHER,
		data: { weather, id },
	};
}
