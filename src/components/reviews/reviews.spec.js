import Enzyme, {mount,} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import {restaurants,} from '../../fixtures';

Enzyme.configure({adapter: new Adapter(),});

describe('Reviews', () => {
    it('should render list of 2 reviews', () => {
        const wrapper = mount(<Reviews reviews={restaurants[0].reviews}/>);

        expect(wrapper.find('div').first().children().length).toBe(2);
    });

    it('shouldn\'t render any child element if no reviews are provided', () => {
        const wrapper = mount(<Reviews reviews={[]}/>);

        expect(wrapper.find('div').first().children().length).toBe(0);
    });

    // OR

    it('should render empty div if no reviews are provided', () => {
        const wrapper = mount(<Reviews reviews={[]}/>);

        expect(wrapper.first().text()).toBeFalsy();
    });
});