import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';

Enzyme.configure({ adapter: new Adapter() });

describe('Rate', () => {
  it('should render rate container', () => {
    const wrapper = mount(<Rate value={0} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });

  it('should render five stars', () => {
    /** При использовании обычного mount появлялись одновременно нормальные
     * компоненты и ForwardRef, из-за чего длина удваивалась
     */
    const wrapper = shallow(<Rate value={0} />);
    expect(wrapper.find('[data-id="star"]').length).toBe(5);
  });

  it('should render 4 filled stars', () => {
    const wrapper = shallow(<Rate value={4} />);
    expect(wrapper.find('[data-mark="checked"]').length).toBe(4);
  });

  it('should floor 2.7 to 2 filled stars', () => {
    const wrapper = shallow(<Rate value={2.7} />);
    expect(wrapper.find('[data-mark="checked"]').length).toBe(2);
  });

  it('should render no more than 5 filled stars', () => {
    const wrapper = shallow(<Rate value={6} />);
    expect(wrapper.find('[data-mark="checked"]').length).toBe(5);
  });

  it('should render 5 filled stars by default', () => {
    const wrapper = shallow(<Rate />);
    expect(wrapper.find('[data-mark="checked"]').length).toBe(5);
  });
});
