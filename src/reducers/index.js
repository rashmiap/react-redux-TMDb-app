//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fetchSuccess, fetchIsLoading, fetchErrored, movies, fetchDetailsSuccess,
fetchCastSuccess, fetchCastIsLoading,  fetchCastDataErrored } from './movies';

const rootReducer = combineReducers({
  movies,
  fetchErrored,
  fetchIsLoading,
  fetchSuccess,
  fetchDetailsSuccess,
  fetchCastSuccess,
  fetchCastIsLoading,
  fetchCastDataErrored,
  routing : routerReducer });

export default rootReducer;
