import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import Gallery from './Gallery';
import Navbar from './Navbar';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  getMovies = () => {
    let searchType = this.props.match.params.type;
    searchType = searchType === undefined ? 'now_playing' : searchType;
    const api = `https://api.themoviedb.org/3/movie/${searchType}?api_key=${
      process.env.REACT_APP_MOVIE_API_KEY
    }&language=en-US&page=1`;

    axios
      .get(api)
      .then(response => {
        this.setState(() => ({ results: response.data.results }));
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  componentDidMount = () => {
    this.getMovies();
  };

  componentWillReceiveProps = () => {
    this.getMovies();
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="container container--row container--margin-top-ms">
          <div className="grid">
            <NavLink
              exact
              activeClassName="selected"
              className="link link__nav"
              to="/discover"
            >
              Now Playing
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="link link__nav"
              to="/discover/popular"
            >
              Popular
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="link link__nav"
              to="/discover/top_rated"
            >
              Top Rated
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="link link__nav"
              to="/discover/upcoming"
            >
              Upcoming
            </NavLink>
          </div>
        </div>

        {this.state.results.length === 0 ? <div>Search for a movie</div> : null}
        <Gallery movies={this.state.results} />
      </div>
    );
  }
}

export default DiscoverPage;
