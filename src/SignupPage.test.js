import React from 'react';
import { shallow } from 'enzyme';
import SignupPage from './SignupPage.js';

test('renders signup correctly', () => {
  const wrapper = shallow(<SignupPage />);
  expect(wrapper).toMatchSnapshot();
});