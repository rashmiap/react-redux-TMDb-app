import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import ShowList from './ShowList';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';

const Movie = (props) => {
  return <main className="Movie-content">
    <Switch>
      <Route exact path='/' render={() => <MovieList {...props} movies={props.movies[0].results} />} />
      <Route path='/movies' render={() => <MovieList {...props} movies={props.movies[0].results} />} />
      <Route path='/shows' render={() => <ShowList {...props} shows={props.shows[0].results} />} />
      <Route exact path='/view/:postId' render={(routeProps) => <MovieDetail {...{...props,...routeProps}} movies={props.movies[0].results} />} />
      <Route component={NotFound} />
    </Switch>
  </main>
}

export default Movie;
