import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(router, document.getElementById('root'));
