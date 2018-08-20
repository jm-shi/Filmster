import React from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../actions/movieActions';
import LoadingPage from './LoadingPage';
import Navbar from './Navbar';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backdrop_url: '',
      budget: '',
      homepage: '',
      genres: '',
      title: '',
      overview: '',
      poster_url_medium: '',
      poster_url_small: '',
      release_date: '',
      revenue: '',
      runtime: '',
      tagline: '',
      vote_average: ''
    };
  }
  showSettings(event) {
    event.preventDefault();
  }

  componentDidMount = () => {
    const backdrop_original = 'https://image.tmdb.org/t/p/original';
    const poster_path_342 = 'https://image.tmdb.org/t/p/w342';
    const poster_path_185 = 'https://image.tmdb.org/t/p/w185';
    const movieID = this.props.location.state;
    if (!movieID) return;

    Promise.resolve(this.props.onFetchMovieDetails(movieID)).then(() => {
      const movie = this.props.movieDetails;
      this.setState(() => ({
        backdrop_url: backdrop_original + movie.backdrop_path,
        budget: movie.budget,
        homepage: movie.homepage,
        genres: movie.genres,
        title: movie.title,
        overview: movie.overview,
        poster_url_medium: poster_path_342 + movie.poster_path,
        poster_url_small: poster_path_185 + movie.poster_path,
        release_date: movie.release_date,
        revenue: movie.revenue,
        runtime: movie.runtime,
        tagline: movie.tagline,
        vote_average: movie.vote_average
      }));
    });
  };

  render() {
    let {
      backdrop_url,
      budget,
      homepage,
      genres,
      title,
      overview,
      poster_url_medium,
      poster_url_small,
      release_date,
      revenue,
      runtime,
      tagline,
      vote_average
    } = this.state;

    const { loading } = this.props;
    const { backdrop_path } = this.props.movieDetails;
    return (
      <div>
        <Navbar />

        {!title && !loading ? (
          <div className="container--centered">
            <div className="text--ms">
              Enter a movie title in the searchbar above.
            </div>
          </div>
        ) : loading ? (
          <LoadingPage />
        ) : (
          <div>
            {backdrop_path ? (
              <div className="backdrop">
                <img
                  className="backdrop__image"
                  src={backdrop_url}
                  alt="backdrop"
                />
              </div>
            ) : null}

            <div className="container container__details container--med-margin-y">
              <div className="container__column">
                <img
                  className="large-screen"
                  src={poster_url_medium}
                  alt="poster"
                />
                <img
                  className="sub-large-screen"
                  src={poster_url_small}
                  alt="poster"
                />
              </div>

              <div className="container__column container--margin-bottom details">
                <div className="details__title">{title}</div>

                <div className="details--med details--green">{tagline}</div>
                <div className="details--med-small">{overview}</div>

                <div className="line-break" />

                <div className="grid">
                  <div className="grid__item-halves details--med-small">
                    <div className="details--green">Release Date</div>
                    {release_date ? release_date : 'N/A'}
                  </div>
                  <div className="grid__item-halves details--med-small details-green">
                    <div className="details--green">Rating</div>
                    {vote_average ? vote_average + '/10' : 'N/A'}
                  </div>
                  <div className="grid__item-halves details--med-small details-green">
                    <div className="details--green">Runtime</div>
                    {runtime ? runtime + ' minutes' : 'N/A'}
                  </div>
                  <div className="grid__item-halves details--med-small details-green">
                    <div className="details--green">Budget</div>
                    {budget ? '$' + budget.toLocaleString() : 'N/A'}
                  </div>
                </div>

                <div className="line-break" />

                {revenue ? (
                  <div className="details--med-small">
                    <span className="details--green">Revenue: </span>$
                    {revenue.toLocaleString()}
                  </div>
                ) : null}

                {genres ? (
                  <div className="details--med-small">
                    <span className="details--green">Genres: </span>
                    {genres.map((genre, index) => {
                      return (
                        <span key={genre.id}>
                          {genre.name}
                          {index < genres.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </div>
                ) : null}

                {homepage ? (
                  <div className="details--med-small">
                    <span className="details--green">Homepage: </span>
                    <a className="details__link" href={homepage}>
                      {homepage}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, movieDetails } = state.movieReducer;
  return {
    loading,
    movieDetails
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
)(DetailsPage);
