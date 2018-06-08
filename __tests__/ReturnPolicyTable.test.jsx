import React from 'react';
import Ezyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import ReturnPolicyTable from '../client/component/tables/ReturnPolicyTable';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({adapter: new Adapter() });

describe('Component: ReturnPolicyTable', () => {
  const wrapper = shallow(<ReturnPolicyTable />);

  it('ReturnPolicyTable should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('ReturnPolicyTable should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('ReturnPolicyTable should render table', () => {
    expect(wrapper.find('table').length).toBe(1);
  });
});
