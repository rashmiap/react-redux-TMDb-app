import React from 'react';
import '../Css/App.css';
import Movie from './Movie';
import { Link } from 'react-router-dom';

const Main = () => (
  <section>
    <Link to="/">tmdb</Link>
    <Movie />
  </section>
)
export default Main;
