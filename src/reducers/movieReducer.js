import {
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  FETCH_MOVIE_FAILURE
} from '../actions/movieActions';

const initialState = {
  error: null,
  loading: false,
  movie: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIE:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_MOVIE:
      console.log('received movie', action, 'state', state);
      return {
        ...state,
        error: null,
        loading: false,
        movie: action.movie
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

/*
export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE':
      return {
        result: action.movie
      };
    default:
      return state;
  }
};
*/
