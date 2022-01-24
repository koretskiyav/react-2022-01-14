import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from '../../fixtures';
import Reviews from './reviews';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews

describe('Reviews', ()=>{
  it('test h4', ()=>{
    const wrapper = mount(<Reviews reviews={reviews}/>)
    expect(wrapper.find('[data-id="h4"]').length).toBe(2)
  })
  it('test rate', ()=>{
    const wrapper = mount(<Reviews reviews={reviews}/>)
    expect(wrapper.find('[data-id="rate"]').length).toBe(3)
  })
})