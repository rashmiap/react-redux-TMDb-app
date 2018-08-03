import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
//import the root reducers
import rootReducer  from './reducers/index';
import movies from './data/movies';
import shows from './data/shows';

/**
* The createStore method takes 3 arguments:
* 1, the reducer. 2, preloaded state. 3, enhancers (redux dev tools etc)
*/
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
//create an object for default data

const store = createStore(rootReducer, enhancers);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

//export default store;

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
