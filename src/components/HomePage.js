import React from 'react';
import { history } from '../AppRouter';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';

const HomePage = () => (
  <div className="container container--column">
    <div className="logo">
      <h1>MovieDB</h1>
    </div>

    <div>
      <NavLink exact={true} activeClassName="selected" className="link" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/search">
        Search
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/discover">
        Discover
      </NavLink>
    </div>

    <div className="container__box">
      <Searchbar
        formClass={'home__searchbar'}
        onHomePage={true}
        history={history}
      />
    </div>
  </div>
);

export default HomePage;
