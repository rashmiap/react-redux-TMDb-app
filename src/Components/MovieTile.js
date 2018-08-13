import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { cardTileStyles } from '../Styles/styles';

const MovieTile = (props) => {
  const { classes, movies, i, movieType } = props;
  return <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w300/${movies[i].poster_path}`}
          title={movies[i].original_title ? movies[i].original_title : movies[i].original_name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.title}>
            {movies[i].original_title ? movies[i].original_title : movies[i].original_name}
          </Typography>
          <Typography component="p" className={classes.overview}>
            {movies[i].overview}
          </Typography>
        </CardContent>
          {
            movieType == 'movies' ?
            <CardActions className={classes.actions}>
              <Button component={Link} to={`/view/${movies[i].id}`} className={classes.linker} color="primary">
                See More
              </Button>
              {props.movies[i].saved ?
              <Button aria-label="Saved" className={classes.button} onClick={props.toggleSaveCard.bind(null,movies[i].id)} >
                <Icon className={classes.icon} style={cardTileStyles.saveIcon}>
                    favorite
                </Icon>
              </Button>
              :
              <Button aria-label="Save" className={classes.button} onClick={props.toggleSaveCard.bind(null,movies[i].id)}>
                <Icon className={classes.icon} style={cardTileStyles.saveIcon}>
                    favorite_border
                </Icon>
              </Button>}
            </CardActions>
            :
            <CardActions className={classes.actions}>
              <Button component={Link} to={`/show/${movies[i].id}`} className={classes.linker} color="primary">
                See More
              </Button>
                {props.movies[i].saved ?
                <Button aria-label="Saved" className={classes.button} onClick={props.toggleShowCard.bind(null,movies[i].id)}>
                  <Icon className={classes.icon} style={cardTileStyles.saveIcon}>
                      favorite
                  </Icon>
                </Button>
                :
                <Button aria-label="Save" className={classes.button} onClick={props.toggleShowCard.bind(null,movies[i].id)}>
                  <Icon className={classes.icon} style={cardTileStyles.saveIcon}>
                      favorite_border
                  </Icon>
                </Button>}
            </CardActions>
          }
      </Card>
}
MovieTile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(cardTileStyles)(MovieTile);
