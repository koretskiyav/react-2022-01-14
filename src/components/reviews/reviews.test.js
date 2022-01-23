import Reviews from "./reviews";
import {restaurants} from "../../fixtures";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;
describe('Reviews', () => {
    it('Reviews should render', () => {
        const wrapper = mount(<Reviews reviews={reviews}/>);
        expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
    });
    it('Reviews Items', () => {
        const wrapper = mount(<Reviews reviews={reviews}/>);
        expect(wrapper.find('[data-id="reviews-item"]').length).toBe(2);
    });
});