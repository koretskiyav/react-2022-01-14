import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () =>{
    it('should render reviews', () => {
        const wrapper = mount(<Reviews reviews={reviews}/>)
        expect(wrapper.find('[data-id="reviews"]').length).toBe(1)
    })
    it('should render review', () => {
        const wrapper = mount(<Reviews reviews={reviews}/>)
        expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length)
    })
    it('should render review-content', () => {
        const wrapper = mount(<Reviews reviews={reviews}/>)
        expect(wrapper.find('[data-id="review-content"]').length).toBe(reviews.length)
    })
    it('should render review-rate', () => {
        const wrapper = mount(<Reviews reviews={reviews}/>)
        expect(wrapper.find('[data-id="review-rate"]').length).toBe(reviews.length)
    })
})