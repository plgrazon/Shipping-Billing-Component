import styles from '../client/component/Shipping.css';

import Shipping from '../client/component/Shipping';
import ReturnPolicyTable from '../client/component/tables/ReturnPolicyTable';
import PaymentDetails from '../client/component/tables/PaymentDetailsTable';

// Use this if you only want to use the serialiazer into one test file only
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

// configure({ adapter: new Adapter() });

////////////////////////////////////////////////////////////////////////////////
// test starts here: ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

describe('Component: App', () => {
  const wrapper = shallow(<Shipping />);

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
    const countries = ['Philippines', 'Japan', 'United States of America'];
    wrapper.setState({ countries: countries });
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

  it('Shipping should have a state', () => {
    const instance = wrapper.instance();
    expect(instance.state).toBeDefined();
  });

  it('Shipping should register a click', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(<Shipping />);
    const instance = wrapper.instance();

    wrapper
      .find('form')
      .simulate('submit', { preventDefault });

    expect(preventDefault).toBeCalled();
  });

  it('Shipping should register submit', () => {
    const wrapper = shallow(<Shipping />);

    wrapper.find('select').simulate('change', {
      target: {
        value: 'India'
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
