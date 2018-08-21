import React from 'react';
import { NavLink } from 'react-router-dom';

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

export default Dropdown;
