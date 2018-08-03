import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';

export default class MovieList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount () {
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=28967d69513d49d94603253876b995a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    this.props.fetchData(apiUrl);
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
  __renderTile(){
    let renderBlock = [];

    renderBlock = this.props.responseItem.results !== undefined ?
     this.props.responseItem.results.map((k, i) => {
       return (
         <MovieTile key={i} {...this.props} movies={this.props.responseItem.results} i={i}/>
       );
     })
     : [];
    return renderBlock;
  }
  render(){
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading ...</p>;
    }

    return(
      <div className="movie-listing">
        <p>{ this.props.movieType ? `Discover the latest Movies` : `Discover the latest TV Shows`}</p>
        <div className="movie-listing__blocks">
            {this.__renderTile()}
        </div>
      </div>
    )
  }
}
MovieList.propTypes = {
  movieType: PropTypes.bool.isRequired, // movieType == true ? movies : tv shows
};
