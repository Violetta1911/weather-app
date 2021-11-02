import React from 'react';
import './CardView.css';
// import CityCard from '../CityCard/CityCard';

const CardView = ({ chosenCity }) => {
	return <div className='card-view'>{chosenCity}</div>;
};

export default CardView;
