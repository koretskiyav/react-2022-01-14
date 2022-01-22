import Enzyme, {mount,} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Review from './review';

import {restaurants,} from '../../../fixtures';

Enzyme.configure({adapter: new Adapter(),});

describe('Review', () => {
    const [{user, text, rating,}] = restaurants[0].reviews;

    it('should render review with name "Antony" inside h4 tag', () => {
        const wrapper = mount(<Review user={user} text={text} rating={rating}/>);

        expect(wrapper.find('[data-id="userInfo"] h4').text()).toBe(user);
    });

    it(`should render review with name "${Review.defaultProps.user}" if prop "name" is not provided`, () => {
        const wrapper = mount(<Review text={text} rating={rating}/>);

        expect(wrapper.find('[data-id="userInfo"] h4').text()).toBe(Review.defaultProps.user);
    });

    it('should render review with text "Not bad" inside p tag', () => {
        const wrapper = mount(<Review user={user} text={text} rating={rating}/>);

        expect(wrapper.find('[data-id="userInfo"] p').text()).toBe(text);
    });

    it('should render empty review text if prop "text" is not provided', () => {
        const wrapper = mount(<Review user={user} rating={rating}/>);

        expect(wrapper.find('[data-id="userInfo"] p').text()).toBe(Review.defaultProps.text);
    });
});