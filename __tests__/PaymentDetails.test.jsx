import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import PaymentDetails from '../client/component/tables/PaymentDetailsTable';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({ adapter: new Adapter() });

describe('Component: PaymentDetailsTable', () => {
  const wrapper = shallow(<PaymentDetails />);

  it('PaymentDetailsTable should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('PaymentDetailsTable should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('PaymentDetailsTable should render table', () => {
    expect(wrapper.find('table').length).toBe(1);
  });
});
