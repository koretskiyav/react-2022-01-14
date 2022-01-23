import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './reviews';
import Review from './review';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;
const review = restaurants[0].reviews[0];

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render all reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });

  it('should have user name', () => {
    const wrapper = mount(
      <Review user={review.user} rating={review.rating} text={review.text} />
    );
    expect(wrapper.find('[data-id="review-name"]').text()).toBe(review.user);
  });

  it('should have default user name', () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} />);
    expect(wrapper.find('[data-id="review-name"]').text()).toBe(
      Review.defaultProps.user
    );
  });

  it('should have comment', () => {
    const wrapper = mount(
      <Review user={review.user} rating={review.rating} text={review.text} />
    );
    expect(wrapper.find('[data-id="review-comment"]').text()).toBe(review.text);
  });

  it('should have rating component', () => {
    const wrapper = mount(
      <Review user={review.user} rating={review.rating} text={review.text} />
    );
    expect(wrapper.find('[data-id="review-rating"]').length).toBe(1);
  });
});
