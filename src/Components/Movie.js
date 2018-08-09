import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import ShowsDetail from './ShowsDetail';
import NotFound from './NotFound';

const Movie = (props) => {
  return <main className="Movie-content">
    <Switch>
      <Route exact path='/' render={() => <MovieList {...props}  movieType={true} />} />
      <Route path='/movies' render={() => <MovieList {...props} movieType={true} />} />
      <Route path='/shows' render={() => <MovieList {...props} movieType={false} />} />
      <Route exact path='/view/:postId' render={(routeProps) => <MovieDetail {...{...props,...routeProps}} />} />
      <Route exact path='/show/:postId' render={(routeProps) => <ShowsDetail {...{...props,...routeProps}} />} />
      <Route component={NotFound} />
    </Switch>
  </main>
}

export default Movie;
