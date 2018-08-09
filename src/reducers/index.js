//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { movies } from './movies';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { fullDetails } from './fullDetails';
import { castDetails } from './castDetails';
import { isCastLoading } from './isCastLoading';
import { hasCastErrored } from './hasCastErrored';
import { shows } from './shows';

const rootReducer = combineReducers({
  isLoading,
  shows,
  movies,
  hasErrored,
  fullDetails,
  castDetails,
  isCastLoading,
  hasCastErrored,
  routing : routerReducer });

export default rootReducer;
