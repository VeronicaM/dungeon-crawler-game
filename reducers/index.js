import { combineReducers } from 'redux';
import game from './ganeReducers.js';

const rootReducer = combineReducers({ game });

export default rootReducer;