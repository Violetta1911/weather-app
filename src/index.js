import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { rootReducer } from './redux/rootReducer';

// const store = createStore(rootReducer);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'),
);

reportWebVitals();
