import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import CardView from './components/CardView/CardView';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact={true} path='/' component={App}></Route>
			<Route path='/CardView' component={CardView}></Route>
		</Switch>
	</BrowserRouter>,
	document.getElementById('root'),
);

reportWebVitals();
