import React from 'react';
import '../Css/App.css';
import Movie from './Movie';
import Header from './Header';
import Navigation from './Navigation';

const Main = (props) => (
  <section className="Main">
    <Header />
    <div className="Main-content">
      <Navigation />
      <Movie {...props}/>
    </div>
  </section>
)
export default Main;
