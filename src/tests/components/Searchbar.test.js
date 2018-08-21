import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from '../../components/Searchbar';

let mockHistory, wrapper;
const event = {
  preventDefault() {},
  target: { value: 'Movie title' }
};

beforeEach(() => {
  mockHistory = { push: jest.fn() };
  wrapper = shallow(<Searchbar history={mockHistory} />);
});

test('should render Searchbar', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should update Searchbar state upon query change', () => {
  let queryState = wrapper.state('query');
  expect(queryState).toEqual('');
  wrapper.find('input').prop('onChange')(event);
  queryState = wrapper.state('query');
  expect(queryState).toEqual('Movie title');
});

test('should call history.push upon submit and movie title exists', () => {
  wrapper.setState({ query: 'Movie title' });
  wrapper.find('form').simulate('submit', event);
  expect(mockHistory.push).toHaveBeenCalledTimes(1);
});

test('should not call history.push upon submit and movie title is blank', () => {
  wrapper.find('form').simulate('submit', event);
  expect(mockHistory.push).toHaveBeenCalledTimes(0);
});
