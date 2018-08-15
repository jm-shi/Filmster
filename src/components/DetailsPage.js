import React from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

class DetailsPage extends React.Component {
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
    } = this.props.movieDetails;

    if (!this.props.movieDetails) {
      backdrop_path = '/5XPPB44RQGfkBrbJxmtdndKz05n.jpg';
      budget = 237000000;
      genres = [
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
      ];
      homepage = 'http://www.avatarmovie.com/';
      title = 'Avatar';
      overview =
        'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.';
      poster_path = '/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg';
      release_date = '2009-12-10';
      revenue = 2787965087;
      runtime = 162;
      tagline = 'Enter the World of Pandora.';
      vote_average = 7.3;
    }

    const backdrop_path_url = `http://image.tmdb.org/t/p/original/${backdrop_path}`;
    const poster_path_url = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    console.log('DetailsPage.js: this.props', this.props);
    console.log('backdrop_path', backdrop_path);
    console.log('budget', budget);
    console.log('homepage', homepage);
    console.log('genres', genres);
    console.log('title', title);
    console.log('overview', overview);
    console.log('poster_path', poster_path);
    console.log('release_date', release_date);
    console.log('revenue', revenue);
    console.log('runtime', runtime);
    console.log('tagline', tagline);
    console.log('vote_average', vote_average);

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

        <div className="container container--med-margin-y">
          <div className="container__column">
            <img src={poster_path_url} alt="poster" />
          </div>
          <div className="container__column details">
            <div className="details--large">{title}</div>

            <div className="details--med details--green">{tagline}</div>
            <div className="details--med-small">{overview}</div>

            <div className="line-break" />

            <div className="grid">
              <div className="grid__item-halves details--med-small">
                <div className="details--green">Release Date</div>
                {release_date}
              </div>
              <div className="grid__item-halves details--med-small details-green">
                <div className="details--green">Revenue</div>
                {revenue}
              </div>
              <div className="grid__item-halves details--med-small details-green">
                <div className="details--green">Runtime</div>
                {runtime}
              </div>
              <div className="grid__item-halves details--med-small details-green">
                <div className="details--green">Rating</div>
                {vote_average}
                /10
              </div>
            </div>

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

            {homepage ? (
              <div className="details--med-small">
                <span className="details--green">Homepage: </span>
                <a className="details__link" href={homepage}>
                  {homepage}
                </a>
              </div>
            ) : (
              ''
            )}
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
