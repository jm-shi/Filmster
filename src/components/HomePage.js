import React from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';

const HomePage = () => (
  <div className="container container--column">
    <div className="logo">
      <h1>MovieDB</h1>
    </div>

    <div>
      <NavLink exact={true} activeClassName="active" className="link" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" className="link" to="/login">
        Login
      </NavLink>
    </div>

    <div className="container__box">
      <Searchbar />
    </div>
  </div>
);

export default HomePage;
