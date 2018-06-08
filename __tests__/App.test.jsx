import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import App from '../client/component/App';
import Shipping from '../client/component/Shipping';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({ adapter: new Adapter() });

describe('Component: App', () => {
  const wrapper = shallow(<App />);

  it('App should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('App should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('App should have the shipping component', () => {
    expect(wrapper.contains(<Shipping />)).toEqual(true);
  });
});
