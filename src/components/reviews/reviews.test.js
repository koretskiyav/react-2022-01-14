import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from "./reviews";
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('Reviews collection should render, total is 1', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('[data-id="reviews-collection"]').length).toBe(1);
  });

  it('Review elements should render, total is 2', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });
});
