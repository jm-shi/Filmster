import axios from 'axios';

export const FETCH_MOVIE_START = 'FETCH_MOVIE_START';
const fetchMovieStart = () => ({
  type: FETCH_MOVIE_START
});

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
const fetchMoviesSuccess = searchedMovies => ({
  type: FETCH_MOVIES_SUCCESS,
  searchedMovies
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
        dispatch(fetchMoviesSuccess(response.data.results));
      })
      .catch(error => {
        dispatch(fetchMovieFailure(error.message));
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
        dispatch(fetchMovieFailure(error.message));
      });
  };
};
