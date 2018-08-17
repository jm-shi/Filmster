import {
  FETCH_MOVIE_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_FAILURE
} from '../actions/movieActions';

const initialState = {
  error: null,
  id: '',
  loading: false,
  searchedMovies: [],
  movieDetails: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIES_SUCCESS:
      console.log('action', action);
      return {
        ...state,
        loading: false,
        searchedMovies: action.searchedMovies
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        movieDetails: action.movieDetails
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
