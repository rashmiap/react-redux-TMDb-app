import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Navigation extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav className="Nav">
        <NavLink activeClassName="Nav-active" exact to="/">Latest Movies</NavLink>
        <NavLink activeClassName="Nav-active" to="/shows">TV Shows</NavLink>
      </nav>
    )
  }
}

export default withRouter(Navigation);
