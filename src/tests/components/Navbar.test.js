import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

test('should render Navbar', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
