import axios from 'axios';

export const REQUEST_MOVIE = 'REQUEST_MOVIE';
const requestMovie = () => ({
  type: REQUEST_MOVIE
});

export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
const receiveMovie = data => ({
  type: RECEIVE_MOVIE,
  data
});

export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
const fetchMovieFailure = error => ({
  type: FETCH_MOVIE_FAILURE,
  error
});

export const fetchMovie = movieTitle => {
  return dispatch => {
    dispatch(requestMovie());

    const prefix = `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.REACT_APP_MOVIE_API_KEY
    }`;
    const searchRequest = `${prefix}&language=en-US&query=${movieTitle}&page=1&include_adult=false`;

    return axios
      .get(searchRequest)
      .then(response => {
        dispatch(receiveMovie(response.data));
      })
      .catch(error => {
        dispatch(fetchMovieFailure(error.message));
      });
  };
};
