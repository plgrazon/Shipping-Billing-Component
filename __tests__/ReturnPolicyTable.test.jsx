import ReturnPolicyTable from '../client/component/tables/ReturnPolicyTable';

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
