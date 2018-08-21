import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../../components/Dropdown';

test('should render Dropdown', () => {
  const wrapper = shallow(<Dropdown />);
  expect(wrapper).toMatchSnapshot();
});

test('should toggle menu upon click', () => {
  const event = {
    preventDefault() {},
    target: { displayMenu: true }
  };
  const wrapper = shallow(<Dropdown />);
  let displayMenuState = wrapper.state('displayMenu');
  expect(displayMenuState).toEqual(false);
  wrapper.find('.dropdown__button').prop('onClick')(event);
  displayMenuState = wrapper.state('displayMenu');
  expect(displayMenuState).toEqual(true);
});
