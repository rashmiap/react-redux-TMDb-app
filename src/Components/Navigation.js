import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import showNav from '../Assets/show-nav.svg';
import movieNav from '../Assets/movie-nav.svg';

class Navigation extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav className="Nav">
        <NavLink activeClassName="Nav-active" exact to="/">
          <img src={movieNav} width={35} style={{marginRight: '10px'}}/>
          Latest Movies
        </NavLink>
        <NavLink activeClassName="Nav-active" to="/shows">
          <img src={showNav} width={35} style={{marginRight: '20px'}}/>
          TV Shows
        </NavLink>
      </nav>
    )
  }
}

export default withRouter(Navigation);
