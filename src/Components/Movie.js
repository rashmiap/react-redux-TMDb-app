import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import ShowList from './ShowList';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';

const Movie = (props) => {
  return <main className="Movie-content">
    <Switch>
      <Route exact path='/' render={(listProps) => <MovieList {...listProps} {...props} movies={props.movies[0].results} />} />
      <Route path='/movies' render={(listProps) => <MovieList {...listProps} {...props} movies={props.movies[0].results} />} />
      <Route path='/shows' render={(showProps) => <ShowList {...showProps} {...props} shows={props.shows[0].results} />} />
      <Route path='/view/:postId' render={(detailProps) => <MovieDetail {...detailProps}  {...props} />} />
      <Route component={NotFound} />
    </Switch>
  </main>
}

export default Movie
