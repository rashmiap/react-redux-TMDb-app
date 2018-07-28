import React from 'react';
import '../Css/App.css';
import Movie from './Movie';
import { Link } from 'react-router-dom';

const Main = (props) => (
  <section>
    <Link to="/">tmdb</Link>
    <Movie {...props}/>
  </section>
)
export default Main;
