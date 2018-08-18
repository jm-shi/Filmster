import React from 'react';

import { connect } from 'react-redux';
import { fetchMovieDetails } from '../actions/movieActions';
import { history } from '../AppRouter';

class Gallery extends React.Component {
  goToDetails = id => {
    if (id) {
      history.push({
        pathname: '/details',
        state: id
      });
    }
  };
  render() {
    const poster_path = 'https://image.tmdb.org/t/p/w185/';

    return (
      <div className="grid grid__results">
        {this.props.movies.map(movie => {
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovieDetails: movieID => dispatch(fetchMovieDetails(movieID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Gallery);
