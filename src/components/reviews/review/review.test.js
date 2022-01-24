import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Review from './review';
import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];
const { user, text, rating } = review;

describe('Reviews', () => {
  const wrapper = mount(<Review {...review} />);

  it('should review exist', () => {
    expect(wrapper);
  });

  it('should be correct name', () => {
    expect(wrapper.find(`[data-name="${user}"]`).text()).toBe(user);
  });

  it('should be correct review', () => {
    expect(wrapper.find(`[data-review="${text}"]`).text()).toBe(text);
  });

  it('should be correct rating', () => {
    expect(wrapper.find(`[data-checked="true"]`) === rating);
  });
});

describe('Reviews', () => {
  const wrapper = mount(<Review text="Super!" rating={5} />);

  it('should be anonymous user', () => {
    expect(wrapper.find(`[data-name="Anonymous"]`).text()).toBe('Anonymous');
  });
});
