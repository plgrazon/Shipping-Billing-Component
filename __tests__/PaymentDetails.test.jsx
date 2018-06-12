import PaymentDetails from '../client/component/tables/PaymentDetailsTable';

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
