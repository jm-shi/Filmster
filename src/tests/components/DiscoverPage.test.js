import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { shallow } from 'enzyme';
import DiscoverPage from '../../components/DiscoverPage';

let mockAdapter, request;
const props = {
  match: {
    params: {
      type: 'now_playing'
    }
  }
};

describe('DiscoverPage component', () => {
  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);
    request = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
      process.env.REACT_APP_MOVIE_API_KEY
    }&language=en-US&page=1`;
    mockAdapter.onGet(request).reply(200, {
      data: {
        results: [],
        loading: false
      }
    });
  });

  afterEach(() => {
    mockAdapter.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should render DiscoverPage', () => {
    const wrapper = shallow(<DiscoverPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle componentDidMount', async () => {
    const spy = jest.spyOn(DiscoverPage.prototype, 'getMovies');
    const wrapper = shallow(<DiscoverPage {...props} />);
    await wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should handle componentWillReceiveProps', async () => {
    const spy = jest.spyOn(DiscoverPage.prototype, 'getMovies');
    const wrapper = shallow(<DiscoverPage {...props} />);
    await wrapper.instance().UNSAFE_componentWillReceiveProps(props);
    expect(spy).toHaveBeenCalled();
  });
});
