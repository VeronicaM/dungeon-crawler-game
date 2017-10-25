import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const element = < Provider store = { store } >
    <
    App / >
    <
    /Provider>;
ReactDOM.render(element, document.getElementById('root'));