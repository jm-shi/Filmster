import React from 'react';
import { shallow } from 'enzyme';
import { DetailsPage } from '../../components/DetailsPage';

describe('DetailsPage component', () => {
  let wrapper;
  const mockFetchMovieDetails = jest.fn();
  const props = {
    loading: false,
    location: { state: 'Movie title' },
    movieDetails: { title: 'Inception' },
    onFetchMovieDetails: mockFetchMovieDetails
  };

  beforeEach(() => {
    wrapper = shallow(<DetailsPage {...props} />);
  });

  it('should render DetailsPage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state after componentDidMount', async () => {
    const wrapper = shallow(<DetailsPage {...props} />);
    expect(wrapper.state().title).toEqual('');
    await wrapper.instance().componentDidMount();
    expect(props.onFetchMovieDetails).toHaveBeenCalled();
    expect(wrapper.state().title).toEqual('Inception');
  });
});
