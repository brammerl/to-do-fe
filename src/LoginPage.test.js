import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

test('renders app correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});