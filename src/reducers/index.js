//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fetchSuccess, fetchIsLoading, fetchErrored, movies, toggleSaveCard } from './movies';

const rootReducer = combineReducers({
  movies,
  fetchErrored,
  fetchIsLoading,
  fetchSuccess,
  toggleSaveCard,
  routing : routerReducer });

export default rootReducer;
