import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const dishoomReviews = restaurants[0].reviews;
const homesliceReviews = restaurants[1].reviews;
const fabriqueReviews = restaurants[2].reviews;
const flatIronReviews = restaurants[3].reviews;

describe('Reviews', () => {
  it('should render 2 reviews for Dishoom', () => {
    const wrapper = mount(<Reviews reviews={ dishoomReviews } />)
    expect(wrapper.find('[data-id="review"]').length).toBe(2)
  });
  it('should render 3 reviews for Homeslice', () => {
    const wrapper = mount(<Reviews reviews={ homesliceReviews } />)
    expect(wrapper.find('[data-id="review"]').length).toBe(3)
  });
  it('should render 1 review for Fabrique', () => {
    const wrapper = mount(<Reviews reviews={ fabriqueReviews } />)
    expect(wrapper.find('[data-id="review"]').length).toBe(1)
  });
  it('should render 1 review for FlatIron', () => {
    const wrapper = mount(<Reviews reviews={ flatIronReviews } />)
    expect(wrapper.find('[data-id="review"]').length).toBe(2)
  });
})