import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer  from './reducers/index';
/**
* The createStore method takes 3 arguments:
* 1, the reducer. 2, preloaded state. 3, enhancers (redux dev tools etc)
*/
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancers
    );
}
