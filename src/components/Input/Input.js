import React from 'react';
import './Input.css';

const Input = ({
	className,
	placeholder,
	handleInput,
	query,
	searchWeather,
	onHandelSubmit,
}) => {
	return (
		<form onSubmit={onHandelSubmit}>
			<input
				className={className}
				type='text'
				placeholder={placeholder}
				onChange={handleInput}
				value={query}
				onKeyPress={searchWeather}
			/>
		</form>
	);
};

export default Input;
