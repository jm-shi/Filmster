import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movieActions';
import { history } from '../AppRouter';
import LoadingPage from './LoadingPage';
import Gallery from './Gallery';
import Navbar from './Navbar';

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesList: []
    };
  }
  goToDetails = id => {
    if (id) {
      history.push({
        pathname: '/details',
        state: id
      });
    }
  };
  fetchMovies = () => {
    const movieTitle = this.props.location.state;
    if (!movieTitle) return;

    Promise.resolve(this.props.onFetchMovie(movieTitle)).then(() => {
      const moviesList = this.props.searchedMovies;
      this.setState(() => ({
        moviesList
      }));
    });
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.state !== prevProps.location.state) {
      this.fetchMovies();
    }
  }

  render() {
    const { moviesList } = this.state;
    const { loading } = this.props;

    return (
      <div>
        <Navbar />

        {moviesList.length === 0 && !loading ? (
          <div className="container--centered">
            <div className="text--ms">
              Enter a movie title in the searchbar above.
            </div>
          </div>
        ) : loading ? (
          <LoadingPage />
        ) : (
          <Gallery movies={moviesList} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, searchedMovies } = state.movieReducer;
  return {
    loading,
    searchedMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovie: movieID => dispatch(fetchMovie(movieID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsPage);
