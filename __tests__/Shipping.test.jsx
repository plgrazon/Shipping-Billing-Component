import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import sinon from 'sinon';

import styles from '../client/component/Shipping.css';

import Shipping from '../client/component/Shipping';
import ReturnPolicyTable from '../client/component/tables/ReturnPolicyTable';
import PaymentDetails from '../client/component/tables/PaymentDetailsTable';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({ adapter: new Adapter() });

////////////////////////////////////////////////////////////////////////////////
// test starts here: ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

describe('Component: App', () => {
  const wrapper = shallow(<Shipping />)
  const countries = ['Philippines', 'Japan', 'United States of America'];

  beforeEach(() => {
    wrapper.setState({countries: countries});
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });

  it('Shipping should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('Shipping should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Shipping should render all nodes', () => {
    expect(wrapper.find('div').length).toBe(11);
  });

  it('Shipping should render options', () => {
    const instance = wrapper.instance();

    expect(instance.state.countries.length).toEqual(3);
  });

  it('Shipping should render ReturnPolicyTable', () => {
    expect(wrapper.contains(<ReturnPolicyTable />)).toBe(true);
    // expect(wrapper.find(ReturnPolicyTable).length).toBe(1);
  });

  it('Shipping should render PaymentDetailsTable', () => {
    expect(wrapper.contains(<PaymentDetails />)).toBe(true);
    // expect(wrapper.find(PaymentDetails).length).toBe(1);
  });

  it('Shipping should render table', () => {
    // expect(wrapper.find('.styles.shipping')).toBeDefined();
    expect(wrapper.find('table').length).toBe(1);
  });

  it('Shipping should render form', () => {
    // expect(wrapper.find('.styles.form-padding')).toBeDefined();
    expect(wrapper.find('form').length).toBe(1);
  });


  it('Shipping should register a click', async() => {
    const onSubmitForm = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = mount(<Shipping />);
    const instance = wrapper.instance();

    expect.assertions(1);

    wrapper
      .find('input')
      .simulate('change', {
        target: {
          value: 'India'
        }
      });

    wrapper
      .find('form')
      .simulate('submit', {preventDefault});

    // expect(preventDefault).toBeCalled();
    expect(onSubmitForm).toBeCalledWith('India');
  });
});

// test('User fetched name should be Leanne Graham', async() => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });
