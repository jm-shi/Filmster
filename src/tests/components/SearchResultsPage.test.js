import React from 'react';
import { shallow } from 'enzyme';
import { SearchResultsPage } from '../../components/SearchResultsPage';

describe('SearchResultsPage component', () => {
  let wrapper;
  const mockFetchMovie = jest.fn();
  const props = {
    loading: false,
    location: { state: 'Movie title' },
    onFetchMovie: mockFetchMovie,
    searchedMovies: ['Movie 1', 'Movie 2']
  };

  beforeEach(() => {
    wrapper = shallow(<SearchResultsPage {...props} />);
  });

  it('should render SearchResultsPage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch movies in componentDidMount', async () => {
    const spy = jest.spyOn(SearchResultsPage.prototype, 'fetchMovies');
    const wrapper = shallow(<SearchResultsPage {...props} />);
    expect(wrapper.state().moviesList).toEqual([]);
    await wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().moviesList).toEqual(['Movie 1', 'Movie 2']);
  });

  it('should fetch movies in componentDidUpdate', async () => {
    const spy = jest.spyOn(SearchResultsPage.prototype, 'fetchMovies');
    const wrapper = shallow(<SearchResultsPage {...props} />);
    expect(wrapper.state().moviesList).toEqual([]);
    await wrapper
      .instance()
      .componentDidUpdate({ location: { state: 'Movie' } });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().moviesList).toEqual(['Movie 1', 'Movie 2']);
  });
});
