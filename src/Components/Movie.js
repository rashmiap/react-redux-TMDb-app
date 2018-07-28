import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const Movie = (props) => {
  return <main>
    <Switch>
      <Route exact path='/' render={(listProps) => <MovieList {...listProps} posts={props.posts}/>} />
      <Route path='/view/:postId' render={(detailProps) => <MovieDetail {...detailProps} comments={props.comments}/>} />
    </Switch>
  </main>
}

export default Movie
