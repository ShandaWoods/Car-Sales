import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { featureReducer } from './reducers/featureReducer';
import { Provider } from 'react-redux'

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
const store = createStore(featureReducer)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, rootElement);
