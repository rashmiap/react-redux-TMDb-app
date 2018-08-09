//creating root reducers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responseItem } from './responseItem';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { fullDetails } from './fullDetails';
import { castDetails } from './castDetails';
import { isCastLoading } from './isCastLoading';
import { hasCastErrored } from './hasCastErrored';

const rootReducer = combineReducers({
  isLoading,
  responseItem,
  hasErrored,
  fullDetails,
  castDetails,
  isCastLoading,
  hasCastErrored,
  routing : routerReducer });

export default rootReducer;
