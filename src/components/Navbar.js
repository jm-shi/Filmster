import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="container__title">MovieDB</div>
    <input className="search" placeholder="Search for a movie" />

    <div className="links">
      <NavLink exact={true} activeClassName="active" className="link" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" className="link" to="/login">
        Discover
      </NavLink>
      <NavLink activeClassName="active" className="link" to="/login">
        Login
      </NavLink>
    </div>
  </div>
);

export default Navbar;
