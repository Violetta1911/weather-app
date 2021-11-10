export const getWeatherByCity = async (city) => {
	const api = {
		key: '6dbb48040117b5976da7c1c299b58cf0',
		base: 'https://api.openweathermap.org/data/2.5/',
	};

	const response = await fetch(
		`${api.base}weather?q=${city}&units=metric&id=524901&lang=ru&APPID=${api.key}`,
	);
	const weather = await response.json();
	return weather;
};

export async function searchCityWeather(city) {
	const weather = await getWeatherByCity(city);

	let cityWeather = {};

	if (weather && weather.main) {
		cityWeather = {
			id: weather.id,
			title: weather.name,
			temp: weather.main.temp,
			feels_like: weather.main.feels_like,
			temp_min: weather.main.temp_min,
			temp_max: weather.main.temp_max,
			humidity: weather.main.humidity,
			wind: weather.wind,
			pressure: weather.main.pressure,
			clouds: weather.clouds,
			weather: weather.weather[0].icon,
			coord: weather.coord,
		};
	} else {
		alert('К сожалению, объект не обнаружен...Попробуйте снова ');
	}
	return cityWeather;
}

export const addCityToLocalStorage = (cities) => {
	localStorage.setItem('cities', JSON.stringify(cities));
};
export async function getWeatherFromStorage(citiesFromStorage) {
	if (citiesFromStorage === null) {
		return;
	}
	const promises = await citiesFromStorage.map(async (city) => {
		const weather = await getWeatherByCity(city);

		const cityWeather = {
			id: weather.id,
			title: weather.name,
			temp: weather.main.temp,
			feels_like: weather.main.feels_like,
			temp_min: weather.main.temp_min,
			temp_max: weather.main.temp_max,
			humidity: weather.main.humidity,
			wind: weather.wind,
			pressure: weather.main.pressure,
			clouds: weather.clouds,
			weather: weather.weather[0].icon,
			coord: weather.coord,
		};
		return cityWeather;
	});
	const data = await Promise.all(promises);

	return data;
}

export async function updateWeather(e, city) {
	e.preventDefault();
	let cityWeather = {};

	const weather = await getWeatherByCity(city);

	if (weather && weather.main) {
		cityWeather = {
			id: weather.id,
			title: weather.name,
			temp: weather.main.temp,
			feels_like: weather.main.feels_like,
			temp_min: weather.main.temp_min,
			temp_max: weather.main.temp_max,
			humidity: weather.main.humidity,
			wind: weather.wind,
			pressure: weather.main.pressure,
			clouds: weather.clouds,
			weather: weather.weather[0].icon,
		};
	}
	return cityWeather;
}
