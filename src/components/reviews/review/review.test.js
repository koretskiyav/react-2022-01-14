import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

const templateReview = {
  user: 'Alan',
  text: 'Not bad',
  rating: 5,
};

const templateReviewNoUser = {
  text: 'Not bad',
  rating: 5,
};

const templateReviewNoText = {
  user: 'Alan',
  rating: 5,
};

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render review container', () => {
    const wrapper = mount(<Review {...templateReview} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render usename', () => {
    const wrapper = mount(<Review {...templateReview} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe(
      templateReview.user
    );
  });

  it('should render text', () => {
    const wrapper = mount(<Review {...templateReview} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(
      templateReview.text
    );
  });

  it('should render default user name', () => {
    const wrapper = mount(<Review {...templateReviewNoUser} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Anonymous');
  });

  it('should render default text', () => {
    const wrapper = mount(<Review {...templateReviewNoText} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe('No message');
  });
});
