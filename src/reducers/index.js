//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { movies } from './movies';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { castDetails } from './castDetails';
import { isCastLoading } from './isCastLoading';
import { hasCastErrored } from './hasCastErrored';
import { shows } from './shows';
import { currentMovie } from './currentMovie';
import { currentShow } from './currentShow';

const rootReducer = combineReducers({
  isLoading,
  shows,
  movies,
  hasErrored,
  castDetails,
  isCastLoading,
  hasCastErrored,
  currentMovie,
  currentShow,
  routing : routerReducer });

export default rootReducer;
