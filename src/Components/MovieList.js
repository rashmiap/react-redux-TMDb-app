import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';

export default class MovieList extends Component {
  componentDidMount () {
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=28967d69513d49d94603253876b995a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    //this.props.fetchData(apiUrl);
  }

  __renderTiles(){
    let renderBlocks = [];
    renderBlocks = this.props.movies.map((key, index) => {
      return (
        <MovieTile key={index} {...this.props} movies={this.props.movies} i={index}/>
      );
    })
    return renderBlocks;
  }
  render(){
    return(
      <div className="movie-listing">
        <p>{ this.props.movieType ? `Discover the latest Movies` : `Discover the latest TV Shows`}</p>
        <div className="movie-listing__blocks">
          {this.__renderTiles()}
        </div>
      </div>
    )
  }
}
MovieList.propTypes = {
  movieType: PropTypes.bool.isRequired, // movieType == true ? movies : tv shows
};
