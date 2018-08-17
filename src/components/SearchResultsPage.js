import React from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../actions/movieActions';
import { history } from '../AppRouter';
import Navbar from '../components/Navbar';

class SearchResultsPage extends React.Component {
  goToDetails = id => {
    if (id) {
      Promise.resolve(this.props.onFetchMovieDetails(id)).then(() => {
        history.push('/details');
      });
    }
  };

  render() {
    const moviesList = this.props.searchedMovies;
    const poster_path = 'https://image.tmdb.org/t/p/w185/';
    return (
      <div>
        <Navbar />

        {moviesList.length === 0 ? <div>Search for a movie</div> : null}

        <div className="grid grid__results">
          {moviesList.map(movie => {
            return movie.id && movie.poster_path && movie.title ? (
              <div className="grid__container" key={movie.id}>
                <img
                  className="image-item"
                  onClick={() => this.goToDetails(movie.id)}
                  src={poster_path + movie.poster_path}
                  style={{ height: '278px', width: '185px' }}
                  alt="poster"
                />

                <div
                  style={{
                    fontSize: '16px',
                    width: '185px',
                    margin: 'auto'
                  }}
                >
                  {movie.title}
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { id, searchedMovies } = state.movieReducer;
  return {
    id,
    searchedMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovieDetails: movieID => dispatch(fetchMovieDetails(movieID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsPage);
