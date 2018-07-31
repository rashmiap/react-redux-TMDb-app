//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies';
import comments from './comments';
import shows from './shows';

const rootReducer = combineReducers({movies, shows, comments, routing : routerReducer });

export default rootReducer;
