import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const Movie = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MovieList}/>
      <Route path='/view/:postId' component={MovieDetail}/>
    </Switch>
  </main>
)

export default Movie
