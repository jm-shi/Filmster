import React from 'react';
import { history } from '../AppRouter';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = e => {
    e.preventDefault();
    this.setState({ displayMenu: !this.state.displayMenu });
  };

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown__button" onClick={this.toggleMenu}>
          Settings
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <NavLink exact={true} className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/search">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/discover">
                Discover
              </NavLink>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

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
