import React from 'react';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }
  onQueryChange = e => {
    const query = e.target.value;
    this.setState(() => ({ query }));
  };
  onSubmit = e => {
    e.preventDefault();
    const movieTitle = this.state.query;
    if (movieTitle) {
      this.props.history.push({
        pathname: '/search',
        state: movieTitle
      });
    }
  };
  render() {
    return (
      <form className={this.props.formClass} onSubmit={this.onSubmit}>
        <div className={this.props.onHomePage ? null : 'searchbar-container'}>
          <label>
            {this.props.onHomePage ? (
              <h1>Search for movies to learn more</h1>
            ) : null}

            <input
              className={this.props.inputClass}
              value={this.state.query}
              onChange={this.onQueryChange}
              placeholder={'Enter a movie title'}
              type="text"
            />
          </label>

          {this.props.onHomePage ? (
            <button className="button button--home">Search</button>
          ) : (
            <button className="button">Search</button>
          )}
        </div>
      </form>
    );
  }
}

Searchbar.propTypes = {
  formClass: PropTypes.string,
  inputClass: PropTypes.string,
  history: PropTypes.object,
  onHomePage: PropTypes.bool
};

export default Searchbar;
