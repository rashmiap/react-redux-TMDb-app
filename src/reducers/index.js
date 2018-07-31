//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies';
import shows from './shows';

const rootReducer = combineReducers({movies, shows, routing : routerReducer });

export default rootReducer;
