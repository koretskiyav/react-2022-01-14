import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const templateReviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews list', () => {
  it('should render reviews list container', () => {
    const wrapper = mount(<Reviews reviews={templateReviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render all reviews', () => {
    const wrapper = mount(<Reviews reviews={templateReviews} />);
    expect(wrapper.find('[data-id="reviews-item"]').length).toBe(
      templateReviews.length
    );
  });
});
