import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_ID_SUCCESS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_FAILURE
} from '../actions/movieActions';

const initialState = {
  error: null,
  loading: false,
  movie: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIE_ID_SUCCESS:
      console.log('received movie', action, 'state', state);
      return {
        ...state,
        loading: true,
        movie: action.movie.id
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      console.log('movie details', action, 'state', state);
      return {
        ...state,
        error: null,
        loading: false,
        movie: action
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
