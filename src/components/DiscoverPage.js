import React from 'react';
import axios from 'axios';
import { history } from '../AppRouter';
import { NavLink } from 'react-router-dom';

import LoadingPage from './LoadingPage';
import Gallery from './Gallery';
import Navbar from './Navbar';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      loading: true
    };
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(props) {
    let searchType = props.match.params.type;
    searchType = searchType === undefined ? 'now_playing' : searchType;
    const api = `https://api.themoviedb.org/3/movie/${searchType}?api_key=${
      process.env.REACT_APP_MOVIE_API_KEY
    }&language=en-US&page=1`;

    axios
      .get(api)
      .then(response => {
        this.setState(() => ({
          results: response.data.results,
          loading: false
        }));
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  componentDidMount() {
    this.getMovies(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.getMovies(nextProps);
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Navbar />

        {loading ? <LoadingPage /> : null}

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

        <Gallery history={history} movies={this.state.results} />
      </div>
    );
  }
}

export default DiscoverPage;
