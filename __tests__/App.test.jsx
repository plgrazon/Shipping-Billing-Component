import App from '../client/component/App';
import Shipping from '../client/component/Shipping';

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
