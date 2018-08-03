import React from 'react';
import ReactDOM from 'react-dom';
// import CSS
import './Css/index.css';
// import components
import App from './Components/App';
// import react-router deps
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
//import store, { history } from './store';
import configureStore from './store';
import movies from './data/movies';
import shows from './data/shows';

const defaultState = {
  movies,
  shows
}
const store = configureStore(defaultState);

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(router, document.getElementById('root'));
