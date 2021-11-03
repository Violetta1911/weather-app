import React from 'react';
import './Input.css';

const Input = ({
	className,
	placeholder,
	handleInput,
	query,
	searchWeather,
}) => {
	return (
		<input
			className={className}
			type='text'
			placeholder={placeholder}
			onChange={handleInput}
			value={query}
			onKeyPress={searchWeather}
		/>
	);
};

export default Input;
