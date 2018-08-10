import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { headerStyles } from '../Styles/styles';
import logo from '../Assets/tmdb_logo.svg';

class Header extends Component{
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Link to="/">
              <img src={logo} className={classes.logo} alt='main logo'/>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(headerStyles)(Header);
