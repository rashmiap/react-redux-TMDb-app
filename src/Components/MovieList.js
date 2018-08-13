import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';
import CircularProgress from '@material-ui/core/CircularProgress';

const movieApiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=28967d69513d49d94603253876b995a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const showsApiUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=28967d69513d49d94603253876b995a8&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';

export default class MovieList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount () {
    window.scrollTo(0,0);
    if(this.props.movieType == 'movies'){
      if(Object.keys(this.props.movies).length == 0){
        this.props.fetchData(movieApiUrl,'movie');
      }
    }
    else{
      if(Object.keys(this.props.shows).length == 0){
        this.props.fetchData(showsApiUrl,'show');
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.location.pathname != this.props.location.pathname){
      if(nextProps.movieType == 'movies'){
        if(Object.keys(nextProps.movies).length == 0){
          this.props.fetchData(movieApiUrl,'movie');
        }
      }
      else{
        if(Object.keys(nextProps.shows).length == 0){
          this.props.fetchData(showsApiUrl,'show');
        }
      }
      return true;
    }
    return true;
  }

  __renderTiles(){
    let renderBlock = [];
    renderBlock = this.props.movies.results !== undefined ?
     this.props.movies.results.map((key, index) => {
       return (
         <MovieTile key={index} {...this.props} movies={this.props.movies.results} i={index} movieType={'movies'}/>
       );
     })
     : [];
    return renderBlock;
  }
  __renderShows(){
    let renderShows = [];
    renderShows = this.props.shows.results !== undefined ?
     this.props.shows.results.map((key, index) => {
       return (
         <MovieTile key={index} {...this.props} movies={this.props.shows.results} i={index} movieType={'shows'}/>
       );
     })
     : [];
    return renderShows;
  }
  render(){
    if (this.props.hasErrored) {
      return <div className="movie-listing__error">
          <h3> Oops! There was an error loading the items </h3>
      </div>
    }

    if (this.props.isLoading) {
      return <div className="movie-listing__error">
            <CircularProgress size={150} thickness={2}/>
      </div>;
    }

    return(
      <div className="movie-listing">
        <p>{ this.props.movieType == 'movies' ? `Discover the latest Movies` : `Discover the latest TV Shows`}</p>
        <div className="movie-listing__blocks">
            { this.props.movieType == 'movies' ? this.__renderTiles() : this.__renderShows() }
        </div>
      </div>
    )
  }
}
MovieList.propTypes = {
  movieType: PropTypes.string.isRequired, // movieType == true ? movies : tv shows
};
