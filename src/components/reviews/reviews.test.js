import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from '../reviews'
import Review from './review';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;
const { user, text, rating } = reviews[0];

describe('Review', () => {

  it('should be user', () => {
    const wrapper = mount(<Review user={user} text={text} rating={rating} />);
    expect(wrapper.find(`[data-id="name"]`).text()).toBe(user);
  });

  it('should be text', () => {
    const wrapper = mount(<Review user={user} text={text} rating={rating} />);
    expect(wrapper.find(`[data-id="text"]`).text()).toBe(text);
  });

  it('should be anonymous user', () => {
    const wrapper = mount(<Review text={text} rating={rating} />);
    expect(wrapper.find(`[data-id="name"]`).text()).toBe('Anonymous');
  });
});

describe('Reviews', () => {
  const wrapper = mount(<Reviews reviews={reviews} />);

  it('should review exist', () => {
    expect(wrapper);
  });

  it('should be correct name', () => {
    expect(wrapper.find(`[data-id="name"]`).first().text()).toBe(user);
  });

  it('should be correct review', () => {
    expect(wrapper.find(`[data-id="text"]`).first().text()).toBe(text);
  });
});