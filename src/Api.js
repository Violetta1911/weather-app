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
