import React from 'react';
import ReactDOM from 'react-dom';
// import CSS
import './Css/index.css';
// import components
import App from './Components/App';
// import react-router deps
import { Router, IndexRoute} from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(router, document.getElementById('root'));
