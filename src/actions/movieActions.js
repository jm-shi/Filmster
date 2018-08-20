import axios from 'axios';
import * as types from '../actions/actionTypes';

export const fetchMovieStart = () => ({
  type: types.FETCH_MOVIE_START
});

export const fetchMoviesSuccess = searchedMovies => ({
  type: types.FETCH_MOVIES_SUCCESS,
  searchedMovies
});

export const fetchMovieDetailsSuccess = movieDetails => ({
  type: types.FETCH_MOVIE_DETAILS_SUCCESS,
  movieDetails
});

export const fetchMovieFailure = error => ({
  type: types.FETCH_MOVIE_FAILURE,
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
        dispatch(fetchMoviesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchMovieFailure(error));
      });
  };
};

export const fetchMovieDetails = movieID => {
  return dispatch => {
    dispatch(fetchMovieStart());

    const request = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${
      process.env.REACT_APP_MOVIE_API_KEY
    }&language=en-US`;
    return axios
      .get(request)
      .then(response => {
        dispatch(fetchMovieDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchMovieFailure(error));
      });
  };
};
