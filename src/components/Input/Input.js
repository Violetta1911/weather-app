import React from 'react';
import './Input.css';

const Input = ({
	className,
	placeholder,
	onHandleInput,
	query,
	searchWeather,
}) => {
	return (
		<input
			className={className}
			type='text'
			placeholder={placeholder}
			onChange={onHandleInput}
			value={query}
			onKeyPress={searchWeather}
		/>
	);
};

export default Input;
