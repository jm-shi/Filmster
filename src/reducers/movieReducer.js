import * as types from '../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  searchedMovies: [],
  movieDetails: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_START:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_MOVIES_SUCCESS:
      //console.log('fetch_movies_success', action);
      return {
        ...state,
        loading: false,
        searchedMovies: action.searchedMovies.results
      };
    case types.FETCH_MOVIE_DETAILS_SUCCESS:
      //console.log('fetch_movie_details_success', action);
      return {
        ...state,
        error: null,
        loading: false,
        movieDetails: action.movieDetails
      };
    case types.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message
      };
    default:
      return state;
  }
};
