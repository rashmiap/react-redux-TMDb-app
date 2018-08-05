//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fetchSuccess, fetchIsLoading, fetchErrored, movies, toggleSaveCard, fetchDetailsSuccess,
fetchCastSuccess, fetchCastIsLoading,  fetchCastDataErrored } from './movies';

const rootReducer = combineReducers({
  movies,
  fetchErrored,
  fetchIsLoading,
  fetchSuccess,
  toggleSaveCard,
  fetchDetailsSuccess,
  fetchCastSuccess,
  fetchCastIsLoading,
  fetchCastDataErrored,
  routing : routerReducer });

export default rootReducer;
