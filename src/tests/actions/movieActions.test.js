import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/movieActions';

const mockAxiosSuccess = payload => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: payload
    });
  });
};

const mockAxiosFailure = error => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.reject(error);
  });
};

describe('movie actions', () => {
  it('should create an action to start fetching movie data', () => {
    const expectedAction = {
      type: types.FETCH_MOVIE_START
    };
    expect(actions.fetchMovieStart()).toEqual(expectedAction);
  });

  it('should create an action to indicate successful fetch of movies', () => {
    const searchedMovies = [
      { id: 672, title: 'Harry Potter and the Chamber of Secrets' },
      { id: 671, title: "Harry Potter and the Philosopher's Stone" }
    ];
    const expectedAction = {
      type: types.FETCH_MOVIES_SUCCESS,
      searchedMovies
    };
    expect(actions.fetchMoviesSuccess(searchedMovies)).toEqual(expectedAction);
  });

  it('should create an action to indicate successful fetch of movie details', () => {
    const movieDetails = {
      id: 603,
      tagline: 'Welcome to the Real World',
      title: 'The Matrix'
    };
    const expectedAction = {
      type: types.FETCH_MOVIE_DETAILS_SUCCESS,
      movieDetails
    };
    expect(actions.fetchMovieDetailsSuccess(movieDetails)).toEqual(
      expectedAction
    );
  });

  it('should create an action to indicate failed attempt to fetch movie', () => {
    const error = '404';
    const expectedAction = {
      type: types.FETCH_MOVIE_FAILURE,
      error
    };
    expect(actions.fetchMovieFailure(error)).toEqual(expectedAction);
  });
});

describe('async movie actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCH_MOVIES_SUCCESS after successfully fetching movies', () => {
    const payload = {
      searchedMovies: [
        { id: 672, title: 'Harry Potter and the Chamber of Secrets' },
        { id: 671, title: "Harry Potter and the Philosopher's Stone" }
      ]
    };

    mockAxiosSuccess(payload);

    const expectedActions = [
      { type: 'FETCH_MOVIE_START' },
      { searchedMovies: payload, type: types.FETCH_MOVIES_SUCCESS }
    ];

    const store = mockStore({ searchedMovies: [] });
    return store.dispatch(actions.fetchMovie('Harry Potter')).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIE_DETAILS_SUCCESS after successfully fetching movies', () => {
    const payload = 'Terminator 2';

    mockAxiosSuccess(payload);

    const expectedActions = [
      { type: 'FETCH_MOVIE_START' },
      { movieDetails: 'Terminator 2', type: types.FETCH_MOVIE_DETAILS_SUCCESS }
    ];

    const store = mockStore({ movieDetails: '' });
    return store.dispatch(actions.fetchMovieDetails(280)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIE_FAILURE after failing to fetch movies', () => {
    const error = {
      status: 429,
      response: { message: 'Too Many Requests' }
    };

    mockAxiosFailure(error);

    const expectedActions = [
      { type: 'FETCH_MOVIE_START' },
      { error: error, type: types.FETCH_MOVIE_FAILURE }
    ];

    const store = mockStore({ searchedMovies: [] });
    return store.dispatch(actions.fetchMovie()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIE_FAILURE after failing to fetch movie details', () => {
    const error = {
      status: 429,
      response: { message: 'Too Many Requests' }
    };

    mockAxiosFailure(error);

    const expectedActions = [
      { type: 'FETCH_MOVIE_START' },
      { error: error, type: types.FETCH_MOVIE_FAILURE }
    ];

    const store = mockStore({ searchedMovies: [] });
    return store.dispatch(actions.fetchMovieDetails()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
});
