import React from 'react';
import '../Css/App.css';
import Main from './Main';
import { Link } from 'react-router-dom';

const App = () => (
  <section>
    <Link to="/">tmdb</Link>
    <Main />
  </section>
)
export default App;
