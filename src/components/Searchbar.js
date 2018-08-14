import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie, fetchMovieDetails } from '../actions/movieActions';
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

    const movie = this.state.query;
    if (movie) {
      Promise.resolve(this.props.onFetchMovie(movie)).then(() => {
        console.log('searchbar.js: this.props gives us  ', this.props);
        this.props.onFetchMovieDetails(this.props.movie);
        history.push('/details');
      });
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

const mapStateToProps = state => {
  const { movie } = state.movieReducer;
  return {
    movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovie: movie => dispatch(fetchMovie(movie)),
    onFetchMovieDetails: movieID => dispatch(fetchMovieDetails(movieID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
