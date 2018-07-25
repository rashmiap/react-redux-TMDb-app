import React from 'react';
import ReactDOM from 'react-dom';
// import CSS
import './index.css';
// import components
import App from './Components/App';
import MovieList from './Components/MovieList';
import MovieDetail from './Components/MovieDetail';
// import react-router deps
import { Router, IndexRoute} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


ReactDOM.render(router, document.getElementById('root'));
