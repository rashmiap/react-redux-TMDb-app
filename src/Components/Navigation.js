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
        <img src={movieNav} width={35} alt='movie logo'/>
        <p className="Nav-text Nav-movies">Latest Movies</p>
      </NavLink>
      <NavLink activeClassName="Nav-active" to="/shows">
        <img src={showNav} width={35} alt='shows logo'/>
        <p className="Nav-text Nav-shows">TV Shows</p>
      </NavLink>
      <NavLink activeClassName="Nav-active" to="/saved">
        <img src={savedNav} width={35} alt='saved logo'/>
        <p className="Nav-text Nav-saved">Saved Cards</p>
      </NavLink>
    </nav>
  )
}

export default withRouter(Navigation);
