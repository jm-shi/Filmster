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

    const movieTitle = this.state.query;
    if (movieTitle) {
      Promise.resolve(this.props.onFetchMovie(movieTitle)).then(() => {
        history.push('/results');
      });
    }
  };
  render() {
    return (
      <form className={this.props.formClass} onSubmit={this.onSubmit}>
        {this.props.onHomePage ? <h1>Search for movies and TV shows</h1> : ''}

        <div>
          <input
            className={this.props.inputClass}
            value={this.state.query}
            onChange={this.onQueryChange}
            placeholder={'Search for a movie'}
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

const mapStateToProps = state => {
  const { movieDetails, id } = state.movieReducer;
  return {
    movieDetails,
    id
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
