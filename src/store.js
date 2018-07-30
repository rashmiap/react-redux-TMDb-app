import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

//import the root reducers
import rootReducer  from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

//create an object for default data
const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

//export const history = syncHistoryWithStore(createBrowserHistory, store);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;
