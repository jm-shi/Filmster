import movieReducer from '../../reducers/movieReducer';
import * as types from '../../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  searchedMovies: [],
  movieDetails: ''
};

describe('movie reducer', () => {
  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MOVIE_START', () => {
    expect(
      movieReducer(initialState, {
        type: types.FETCH_MOVIE_START,
        loading: true
      })
    ).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(
      movieReducer(initialState, {
        type: types.FETCH_MOVIES_SUCCESS,
        loading: false,
        searchedMovies: {
          results: [
            { id: 672, title: 'Harry Potter and the Chamber of Secrets' },
            { id: 671, title: "Harry Potter and the Philosopher's Stone" }
          ]
        }
      })
    ).toEqual({
      ...initialState,
      loading: false,
      searchedMovies: [
        { id: 672, title: 'Harry Potter and the Chamber of Secrets' },
        { id: 671, title: "Harry Potter and the Philosopher's Stone" }
      ]
    });
  });

  it('should handle FETCH_MOVIE_DETAILS_SUCCESS', () => {
    expect(
      movieReducer(initialState, {
        type: types.FETCH_MOVIE_DETAILS_SUCCESS,
        error: null,
        loading: false,
        movieDetails: {
          id: 603,
          tagline: 'Welcome to the Real World',
          title: 'The Matrix'
        }
      })
    ).toEqual({
      ...initialState,
      loading: false,
      movieDetails: {
        id: 603,
        tagline: 'Welcome to the Real World',
        title: 'The Matrix'
      }
    });
  });

  it('should handle FETCH_MOVIE_FAILURE', () => {
    expect(
      movieReducer(initialState, {
        type: types.FETCH_MOVIE_FAILURE,
        loading: false,
        error: {
          message: '429 Too Many Requests'
        }
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: '429 Too Many Requests'
    });
  });
});
