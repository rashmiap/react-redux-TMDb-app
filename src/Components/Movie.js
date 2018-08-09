import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import ShowsDetail from './ShowsDetail';
import SavedTile from './SavedTile';
import NotFound from './NotFound';

const Movie = (props) => {
  return <main className="Movie-content">
    <Switch>
      <Route exact path='/' render={() => <MovieList {...props}  movieType={'movies'} />} />
      <Route path='/movies' render={() => <MovieList {...props} movieType={'movies'} />} />
      <Route path='/shows' render={() => <MovieList {...props} movieType={'shows'} />} />
      <Route exact path='/view/:postId' render={(routeProps) => <MovieDetail {...{...props,...routeProps}} />} />
      <Route exact path='/show/:postId' render={(routeProps) => <ShowsDetail {...{...props,...routeProps}} />} />
      <Route path='/saved' render={() => <SavedTile {...props} />} />
      <Route component={NotFound} />
    </Switch>
  </main>
}

export default Movie;
