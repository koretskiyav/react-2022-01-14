import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;
const reviewsNum = restaurants[0].reviews.length;

describe('Reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    it('should render reviews div', () => {
        expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
    });

    it('should render reviews array', () => {
        expect(wrapper.find('[data-id="review"]').length).toBe(reviewsNum);
    });

    it('should render review content', () => {
        expect(wrapper.find('[data-id="review-content"]').length).toBe(reviewsNum);
    });

    it('should render review user name', () => {
        expect(wrapper.find('[data-id="review-user-name"]').length).toBe(reviewsNum);
    });

    it('should render review text', () => {
        expect(wrapper.find('[data-id="review-text"]').length).toBe(reviewsNum);
    });

    it('should render review rate', () => {
        expect(wrapper.find('[data-id="review-rate"]').length).toBe(reviewsNum);
    });

    it('should render rate', () => {
        expect(wrapper.find('[data-id="rate"]').length).toBe(reviewsNum);
    });

    it('should render rate star', () => {
        expect(wrapper.find('[data-id="rate-star"]').length).toBe(reviewsNum * 10);
    });



});
