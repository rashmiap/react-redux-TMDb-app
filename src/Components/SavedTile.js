import React, { Component } from 'react';
import MovieTile from './MovieTile';

export default class SavedTile extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    window.scrollTo(0,0);
  }
  __renderMovies(){
   let renderBlock = [];
   renderBlock = this.props.movies.results !== undefined ?
    this.props.movies.results
    .map((item, key) => {
      if (item.saved === true) {
        return(
          <MovieTile key={key} {...this.props} movies={this.props.movies.results} i={key} movieType={'movies'}/>
        )
      }
      return [];
    })
    : <p className="no-saved">Looks like there no saved movies</p>;
   return renderBlock.length > 0 ? renderBlock : <p className="no-saved">Looks like there no saved movies</p>;
  }
  __renderShows(){
   let renderShows = [];
   renderShows = this.props.shows.results !== undefined ?
   this.props.shows.results.map((item, key) => {
     if(item.saved === true){
       return(
         <MovieTile key={key} {...this.props} movies={this.props.shows.results} i={key} movieType={'shows'}/>
       )
     }
     return [];
   }): <p className="no-saved">Looks like there no saved shows</p>;
   return renderShows.length > 0 ? renderShows : <p className="no-saved">Looks like there no saved shows</p>;
  }

  render(){
    return(
      <div className="movie-listing">
        <h3>Saved Movies</h3>
        <div className="movie-listing__blocks">
            {this.__renderMovies()}
        </div>
        <h3 className="movie-listing__header">Saved Shows</h3>
        <div className="movie-listing__blocks">
            {this.__renderShows()}
        </div>
      </div>
    )
  }
}
