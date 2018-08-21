import React from 'react';
import { history } from '../AppRouter';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import Searchbar from './Searchbar';

const Navbar = () => (
  <div className="navbar">
    <NavLink className="navbar--left link link__logo" to="/">
      <div className="logo">MovieDB</div>
    </NavLink>

    <div className="navbar--center">
      <Searchbar inputClass="navbar__searchbar" history={history} />
    </div>

    <div className="navbar--right links small-screen">
      <Dropdown />
    </div>

    <div className="navbar--right links medium-screen">
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
  </div>
);

export default Navbar;
