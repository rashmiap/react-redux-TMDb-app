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
        <NavLink activeClassName="Nav-active" exact to="/">Movies</NavLink>
        <NavLink activeClassName="Nav-active" to="/view/12">Test</NavLink>
      </nav>
    )
  }
}

export default withRouter(Navigation);
