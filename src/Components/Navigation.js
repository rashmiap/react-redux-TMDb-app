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
        <NavLink activeStyle={{color: 'red'}} exact to="/">Movies</NavLink>
        <NavLink activeStyle={{color: 'red'}} to="/view/12">Test</NavLink>
      </nav>
    )
  }
}

export default withRouter(Navigation);
