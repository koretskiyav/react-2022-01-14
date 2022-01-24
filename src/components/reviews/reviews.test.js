import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;
const review = restaurants[0].reviews[0];

describe('Reviews', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Reviews reviews={ reviews } />);
  });

  it('should render root element', () => {
    expect(wrapper.find('[data-id="reviews-root"]').length).toBe(1);
  });

  it('should render all reviews', () => {
    expect(wrapper.find('[data-id="review-root"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-content"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-name"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-comment"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-rate"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="rate-root"]').length).toBe(reviews.length);
  });

  it('should show review rate correctly', () => {
    expect(wrapper.find('[data-id="rate-root"]').at(0).children().length).toBe(5);
    expect(wrapper.find('[data-id="rate-root"]').at(0)
      .find({ className: "star checked" }).not({ children: "star.svg" }).length).toBe(review.rating);
    expect(wrapper.find('[data-id="rate-root"]').at(0)
      .find('[data-id="rate-star"]')
      .not({ className: "star checked" }).not({ children: "star.svg" }).length).toBe(5 - review.rating);
  });
});
