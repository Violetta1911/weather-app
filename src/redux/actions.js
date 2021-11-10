import {
	ADD_CITY,
	ADD_CITY_WEATHER,
	DELETE_CITY_WEATHER,
	UPDATE_CITY_WEATHER,
	DETAIL_CITY_WEATHER,
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
export function deleteCityWeather(city_weather, city) {
	return {
		type: DELETE_CITY_WEATHER,
		data: { city_weather, city },
	};
}

export function updateCityWeather(weather, id) {
	return {
		type: UPDATE_CITY_WEATHER,
		data: { weather, id },
	};
}

export function detailCityWeather(detail_weather) {
	return {
		type: DETAIL_CITY_WEATHER,
		detail_weather,
	};
}
