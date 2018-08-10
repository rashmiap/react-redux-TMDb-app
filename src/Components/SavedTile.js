import React, { Component } from 'react';
import MovieTile from './MovieTile';

export default class SavedTile extends Component {
  constructor(props){
    super(props);
  }
  __renderMovies(){
    let renderBlock = [];
    renderBlock = this.props.movies.results !== undefined ?
     this.props.movies.results.map((key, index) => {
       if(key.saved){
         return (
           <MovieTile key={index} {...this.props} movies={this.props.movies.results} i={index} movieType={'movies'}/>
         );
       }
     })
     : [];
    return renderBlock;
  }
  __renderShows(){
    let renderShows = [];
    renderShows = this.props.shows.results !== undefined ?
     this.props.shows.results.map((key, index) => {
       if(key.saved){
         return (
           <MovieTile key={index} {...this.props} movies={this.props.shows.results} i={index} movieType={'shows'}/>
         );
       }
     })
     : [];
    return renderShows;
  }
  render(){
    return(
      <div className="movie-listing">
        <p>Saved Movies</p>
        <div className="movie-listing__blocks">
            { this.__renderMovies() }
        </div>
        <p>Saved Shows</p>
        <div className="movie-listing__blocks">
            { this.__renderShows() }
        </div>
      </div>
    )
  }
}
