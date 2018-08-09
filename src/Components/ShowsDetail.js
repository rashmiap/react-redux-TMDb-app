import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class ShowsDetail extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const movieId = this.props.match.params.postId;
    this.props.fetchDetailsData(`https://api.themoviedb.org/3/tv/${movieId}?api_key=28967d69513d49d94603253876b995a8&language=en-US`);
    this.props.fetchCastData(`https://api.themoviedb.org/3/tv/${movieId}/credits?api_key=28967d69513d49d94603253876b995a8&language=en-US`);
  }
  __renderCast(){
    let renderCastBlock = [];
    renderCastBlock = this.props.castDetails.cast !== undefined ?
     this.props.castDetails.cast.map((item, index) => {
       return (
        <div key={item.id} className="cast-single">
          <div className="cast-single__header" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.profile_path})`,
          backgroundSize: "cover",
          height: '175px',
          backgroundColor: 'black',
          backgroundPosition: "center"}}>
            &nbsp;
          </div>
          <div className="cast-single__info">
            <p className="character">{item.character}</p>
            <h3 className="name">{item.name}</h3>
          </div>
        </div>
       );
     })
     : [];
    return renderCastBlock;
  }
  render(){
    const postId = this.props.match.params.postId;
    const { name, overview, release_date, vote_average, backdrop_path,poster_path } = this.props.fullDetails;
    const headerStyles = {
        width: "100%",
        height: "45vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    const posterStyle = {
        width: "100%",
        height: "45vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    if (this.props.hasErrored) {
      return <div className="movie-listing__error">
          <h3> Oops! There was an error loading the  </h3>
      </div>
    }

    if (this.props.isLoading) {
      return <div className="movie-listing__error">
            <CircularProgress size={150} thickness={2}/>
      </div>;
    }

    return(
      <div className="details">
        <div className="details-header" style={headerStyles}>
          &nbsp;
        </div>
        <div className="details-body">
          <div className="details-content">
            <h2>{name}</h2>
            <div>
              <p><strong>Overview :</strong> {overview}</p>
            </div>
            <p>Release date: {release_date}</p>
          </div>
          <div className="details-cast">
            <p style={{width: '100%'}}>Full Cast</p>
            {this.__renderCast()}
          </div>
        </div>
      </div>
    )
  }
}
ShowsDetail.propTypes = {
  movieType: PropTypes.bool,
};
