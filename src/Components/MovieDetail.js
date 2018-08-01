import React, { Component } from 'react';
import MovieTile from './MovieTile';

export default class MovieDetail extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const movies = this.props.movies;
    const postId = this.props.match.params.postId;
    const index = movies.findIndex((movie) => movie.id == postId);
    const clickedMovie = movies[index];
    return(
      <div className="details">
      <h1>{postId}</h1>
      <MovieTile movies = {movies} {...this.props} i={index} key={index} />
      </div>
    )
  }
}
