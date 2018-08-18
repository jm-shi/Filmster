import React from 'react';
import { history } from '../AppRouter';

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
      history.push({
        pathname: '/search',
        state: movieTitle
      });
    }
  };
  render() {
    return (
      <form className={this.props.formClass} onSubmit={this.onSubmit}>
        {this.props.onHomePage ? <h1>Search for movies to learn more</h1> : ''}

        <div className={this.props.onHomePage ? null : 'searchbar-container'}>
          <input
            className={this.props.inputClass}
            value={this.state.query}
            onChange={this.onQueryChange}
            placeholder={'Enter a movie title'}
          />

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

export default Searchbar;
