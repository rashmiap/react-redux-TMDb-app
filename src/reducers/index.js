//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies';
import comments from './comments';

const rootReducer = combineReducers({movies, comments, routing : routerReducer });

export default rootReducer;
