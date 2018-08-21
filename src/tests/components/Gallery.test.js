import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../../components/Gallery';

describe('Gallery component', () => {
  let mockHistory, movies, wrapper;

  beforeEach(() => {
    mockHistory = { push: jest.fn() };
    movies = [
      {
        id: 123,
        poster_path: 'posterpath',
        title: 'A movie title'
      }
    ];
    wrapper = shallow(<Gallery movies={movies} history={mockHistory} />);
  });

  it('should render Gallery', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push on click', () => {
    wrapper.find('.image-item').simulate('click', 'movieID');
    expect(mockHistory.push).toBeCalled();
  });
});
