import axios from 'axios';

export const FETCH_MOVIE_START = 'FETCH_MOVIE_START';
const fetchMovieStart = () => ({
  type: FETCH_MOVIE_START
});

export const FETCH_MOVIE_ID_SUCCESS = 'FETCH_MOVIE_ID_SUCCESS';
const fetchMovieIdSuccess = id => ({
  type: FETCH_MOVIE_ID_SUCCESS,
  id
});

export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
const fetchMovieDetailsSuccess = movieDetails => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  movieDetails
});

export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
const fetchMovieFailure = error => ({
  type: FETCH_MOVIE_FAILURE,
  error
});

export const fetchMovie = movieTitle => {
  return dispatch => {
    dispatch(fetchMovieStart());

    const prefix = `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.REACT_APP_MOVIE_API_KEY
    }`;
    const searchRequest = `${prefix}&language=en-US&query=${movieTitle}&page=1&include_adult=false`;

    return axios
      .get(searchRequest)
      .then(response => {
        dispatch(fetchMovieIdSuccess(response.data.results[0].id));
      })
      .catch(error => {
        dispatch(fetchMovieFailure(error.message));
      });
  };
};

export const fetchMovieDetails = movieID => {
  return dispatch => {
    const request = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${
      process.env.REACT_APP_MOVIE_API_KEY
    }&language=en-US`;
    return axios
      .get(request)
      .then(response => {
        dispatch(fetchMovieDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchMovieFailure(error.message));
      });
  };
};
