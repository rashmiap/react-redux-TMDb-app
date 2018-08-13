import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cardDetails, detailsStyles } from '../Styles/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class ShowsDetail extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
    const movieId = this.props.match.params.postId;
    this.props.fetchCurrentShow(movieId, this.props.shows);
    this.props.fetchCastData(`https://api.themoviedb.org/3/tv/${movieId}/credits?api_key=28967d69513d49d94603253876b995a8&language=en-US`);
  }

  __renderCast(){
    let renderCastBlock = [];
    renderCastBlock = this.props.castDetails.cast !== undefined ?
     this.props.castDetails.cast.map((item, index) => {
       return (
        <div key={item.credit_id} className="cast-single">
          <div className="cast-single__header" style={Object.assign({ backgroundImage:`url(https://image.tmdb.org/t/p/original${item.profile_path})`},cardDetails.castHeader)}>
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
          this.props.currentShow.length > 0 ?
          <div>
            <div className="details-header" style={Object.assign({ backgroundImage:`url(https://image.tmdb.org/t/p/original${this.props.currentShow[0].backdrop_path})`},cardDetails.headerStyles)}>
              &nbsp;
            </div>
            <div className="details-body">
              <div className="details-content">
              <div className="details-saver">
                <h2>{this.props.currentShow[0].name}</h2>
                {
                  this.props.currentShow[0].saved ?
                  <Button aria-label="Saved" size={'large'} onClick={this.props.toggleShowCard.bind(null,this.props.currentShow[0].id)}>
                    <Icon style={detailsStyles.saveIcon}>
                        favorite
                    </Icon>
                  </Button>
                  :
                  <Button aria-label="Save" size={'large'} onClick={this.props.toggleShowCard.bind(null,this.props.currentShow[0].id)}>
                    <Icon style={detailsStyles.saveIcon}>
                        favorite_border
                    </Icon>
                  </Button>
                }
              </div>
                <div>
                  <p><strong>Overview :</strong> {this.props.currentShow[0].overview}</p>
                </div>
                <p>Release date: {this.props.currentShow[0].release_date}</p>
              </div>
            </div>
            <div className="details-cast">
              <p style={cardDetails.castText}>Full Cast</p>
              {this.__renderCast()}
            </div>
          </div>
          : <p>Wait for it</p>
        }
      </div>
    )
  }
}
ShowsDetail.propTypes = {
  movieType: PropTypes.bool,
};
