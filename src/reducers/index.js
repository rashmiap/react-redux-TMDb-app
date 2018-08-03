//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fetchSuccess, fetchIsLoading, fetchErrored, movies } from './movies';
import shows from './shows';

const rootReducer = combineReducers({
  movies,
  fetchErrored,
  fetchIsLoading,
  fetchSuccess,
  shows,
  routing : routerReducer });

export default rootReducer;
