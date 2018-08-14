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
      tagline
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

    return (
      <div>
        <Navbar />

        <div className="row row--med-margin-y">
          <div className="col col--center">
            <img src={poster_path_url} alt="poster" />
          </div>
          <div className="col">
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <h2>{overview}</h2>
          </div>
        </div>

        <div className="backdrop">
          <img
            className="backdrop__image"
            src={backdrop_path_url}
            alt="backdrop"
          />
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
