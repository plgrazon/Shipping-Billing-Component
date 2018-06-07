import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import App from './App';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({ adapter: new Adapter() });

it('App renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toBeDefined();
});
