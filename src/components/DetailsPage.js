import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backdrop_path: '',
      budget: '',
      homepage: '',
      genres: '',
      title: '',
      overview: '',
      poster_path: '',
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
    const movie = this.props.movieDetails;
    this.setState(() => ({
      backdrop_path: movie.backdrop_path,
      budget: movie.budget,
      homepage: movie.homepage,
      genres: movie.genres,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      revenue: movie.revenue,
      runtime: movie.runtime,
      tagline: movie.tagline,
      vote_average: movie.vote_average
    }));

    if (!this.props.movieDetails) {
      this.setState(() => ({
        backdrop_path: '/5XPPB44RQGfkBrbJxmtdndKz05n.jpg',
        budget: 237000000,
        homepage: 'http://www.avatarmovie.com/',
        genres: [
          {
            id: 28,
            name: 'Action'
          },
          {
            id: 12,
            name: 'Adventure'
          },
          {
            id: 14,
            name: 'Science Fiction'
          }
        ],
        title: 'Avatar',
        overview:
          'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',

        poster_path: '/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
        release_date: '2009-12-10',
        revenue: '2,787,965,087',
        runtime: 162,
        tagline: 'Enter the World of Pandora.',
        vote_average: 7.3
      }));
    }
  };

  render() {
    let {
      backdrop_path,
      budget,
      homepage,
      genres,
      title,
      overview,
      poster_path,
      release_date,
      revenue,
      runtime,
      tagline,
      vote_average
    } = this.state;

    const backdrop_path_url = `http://image.tmdb.org/t/p/original/${backdrop_path}`;
    const poster_path_url = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    const poster_path_url_small = `https://image.tmdb.org/t/p/w185/${poster_path}`;

    console.log('DetailsPage.js: this.props', this.props);

    return (
      <div>
        <Navbar />

        <div className="backdrop">
          <img
            className="backdrop__image"
            src={backdrop_path_url}
            alt="backdrop"
          />
        </div>

        <div className="container container__details container--med-margin-y">
          <div className="container__column">
            <img className="large-screen" src={poster_path_url} alt="poster" />
            <img
              className="sub-large-screen"
              src={poster_path_url_small}
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
    );
  }
}

const mapStateToProps = state => {
  const { movieDetails } = state.movieReducer;
  return {
    movieDetails
  };
};

export default connect(mapStateToProps)(DetailsPage);
