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
import lizardlogo from '../Assets/cici.jpg';
import { cardTileStyles } from '../Styles/styles';

const MovieTile = (props) => {
  const { classes, movies, i } = props;
  return <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={lizardlogo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Link to={`/view/${movies[i].code}`}>
            See More
          </Link>
          {
            props.movies[i].saved == true ?
            <Button aria-label="Saved" className={classes.button} onClick={props.toggleSaveCard.bind(null, i)}>
              <Icon className={classes.icon} color="action">
                  favorite
              </Icon>
            </Button>
            :
            <Button aria-label="Save" className={classes.button} onClick={props.toggleSaveCard.bind(null, i)}>
              <Icon className={classes.icon} color="action">
                  favorite_border
              </Icon>
            </Button>
          }

        </CardActions>
      </Card>
}
MovieTile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(cardTileStyles)(MovieTile);
