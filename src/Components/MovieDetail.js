import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cardDetails } from '../Styles/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { detailsStyles } from '../Styles/styles';

export default class MovieDetail extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const movieId = this.props.match.params.postId;
    this.props.fetchCurrentMovie(movieId, this.props.movies);
    this.props.fetchCastData(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=28967d69513d49d94603253876b995a8`);
  }
  __renderCast(){
    let renderCastBlock = [];
    renderCastBlock = this.props.castDetails.cast !== undefined ?
     this.props.castDetails.cast.map((item, index) => {
       return (
        <div key={item.credit_id} className="cast-single">
          <div className="cast-single__header"
          style={Object.assign({ backgroundImage:`url(https://image.tmdb.org/t/p/original${item.profile_path})`},cardDetails.castHeader)}>
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
    return(
      <div className="details">
        {
          this.props.currentMovie.length > 0 ?
          <div>
            <div className="details-header" style={Object.assign({ backgroundImage:`url(https://image.tmdb.org/t/p/original${this.props.currentMovie[0].backdrop_path})`},cardDetails.headerStyles)}>
              &nbsp;
            </div>
            <div className="details-body">
              <div className="details-content">
                <div className="details-saver">
                  <h2>{this.props.currentMovie[0].title}</h2>
                  {
                    this.props.currentMovie[0].saved ?
                    <Button aria-label="Saved" size={'large'} onClick={this.props.toggleSaveCard.bind(null,this.props.currentMovie[0].id)}>
                      <Icon style={detailsStyles.saveIcon}>
                          favorite
                      </Icon>
                    </Button>
                    :
                    <Button aria-label="Save" size={'large'} onClick={this.props.toggleSaveCard.bind(null,this.props.currentMovie[0].id)}>
                      <Icon style={detailsStyles.saveIcon}>
                          favorite_border
                      </Icon>
                    </Button>
                  }
                </div>
                <div>
                  <p><strong>Overview :</strong> {this.props.currentMovie[0].overview}</p>
                </div>
                <p>Release date: {this.props.currentMovie[0].release_date}</p>
              </div>
            </div>
            <div className="details-cast">
              <p style={cardDetails.castText}>Full Cast</p>
              {this.__renderCast()}
            </div>
          </div>
          : <p>wait for it</p>
        }
      </div>
    )
  }
}
MovieDetail.propTypes = {
  movieType: PropTypes.bool,
};
