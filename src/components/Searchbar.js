import React from 'react';
import { searchMovie } from '../utils/api';

export default class Searchbar extends React.Component {
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

    if (this.state.query) {
      searchMovie(this.state.query);
    }
  };
  render() {
    return (
      <form className="searchbar" onSubmit={this.onSubmit}>
        <h1>Search for movies and TV shows</h1>
        <input value={this.state.query} onChange={this.onQueryChange} />

        <button>Search</button>
      </form>
    );
  }
}
