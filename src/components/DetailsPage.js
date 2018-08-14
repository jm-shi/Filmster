import React from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

class DetailsPage extends React.Component {
  render() {
    let {
      backdrop_path,
      title,
      overview,
      poster_path,
      release_date
    } = this.props.movie;

    console.log('detailspage this.props', this.props);

    if (!title) {
      backdrop_path = '/5XPPB44RQGfkBrbJxmtdndKz05n.jpg';
      title = 'Avatar';
      overview =
        'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.';
      poster_path = '/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg';
      release_date = '2009-12-10';
    }

    const backdrop_path_url = `http://image.tmdb.org/t/p/original/${backdrop_path}`;
    const poster_path_url = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    console.log('details page props', this.props.movie);
    //console.log(backdrop_path, title, overview, poster_path, release_date);

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
  console.log('detailspage state is', state);
  const { movie } = state.movieReducer;
  return {
    movie
  };
};

export default connect(mapStateToProps)(DetailsPage);
