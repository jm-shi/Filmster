import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_ID_SUCCESS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_FAILURE
} from '../actions/movieActions';

const initialState = {
  error: null,
  id: '',
  loading: false,
  movieDetails: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIE_ID_SUCCESS:
      return {
        ...state,
        loading: true,
        id: action.id
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
