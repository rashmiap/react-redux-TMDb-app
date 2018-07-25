import React from 'react';
import ReactDOM from 'react-dom';
// import CSS
import './Css/index.css';
// import components
import App from './Components/App';
// import react-router deps
import { Router, IndexRoute} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


ReactDOM.render(router, document.getElementById('root'));
