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
    this.props.movieType ? this.props.fetchData(movieApiUrl): this.props.fetchData(showsApiUrl);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.location.pathname != this.props.location.pathname){
      nextProps.movieType ? this.props.fetchData(movieApiUrl): this.props.fetchData(showsApiUrl)
      return true;
    }
    return true;
  }

  __renderTiles(){
    let renderBlock = [];
    renderBlock = this.props.responseItem.results !== undefined ?
     this.props.responseItem.results.map((key, index) => {
       return (
         <MovieTile key={index} {...this.props} movies={this.props.responseItem.results} i={index}/>
       );
     })
     : [];
    return renderBlock;
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
