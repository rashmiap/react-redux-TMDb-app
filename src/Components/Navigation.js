import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import showNav from '../Assets/show-nav.svg';
import movieNav from '../Assets/movie-nav.svg';
import savedNav from '../Assets/saved-nav.svg';

const Navigation = (props) => {
  return(
    <nav className="Nav">
      <NavLink activeClassName="Nav-active" exact to="/">
        <img src={movieNav} width={35} style={{marginRight: '10px'}} alt='movie logo'/>
        Latest Movies
      </NavLink>
      <NavLink activeClassName="Nav-active" to="/shows">
        <img src={showNav} width={35} style={{marginRight: '20px'}} alt='shows logo'/>
        TV Shows
      </NavLink>
      <NavLink activeClassName="Nav-active" to="/saved">
        <img src={savedNav} width={35} style={{marginRight: '8px'}} alt='saved logo'/>
        Saved Cards
      </NavLink>
    </nav>
  )
}

export default withRouter(Navigation);
