import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movieActions';

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

    const movie = this.state.query;
    if (movie) {
      this.props.onFetchMovie(movie);
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

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovie: movie => {
      dispatch(fetchMovie(movie));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Searchbar);
