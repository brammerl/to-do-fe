  
import React from 'react';
import { shallow } from 'enzyme';
import TodoPage from './TodoPage.js';

test('renders quests correctly', () => {
  const wrapper = shallow(<TodoPage />);
  expect(wrapper).toMatchSnapshot();
});