import Enzyme, {mount,} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import useAmount from './use-amount';

Enzyme.configure({adapter: new Adapter(),});

describe('UseAmount', () => {
    const TestDecrementButton = ({amount, decrement}) => <button onClick={decrement}>{amount}</button>
    const TestIncrementButton = ({amount, increment}) => <button onClick={increment}>{amount}</button>
    const useAmountHOC = WrappedComponent => ({initialAmount,}) => <WrappedComponent {...useAmount(initialAmount)} />;
    const createWrapperAndGetButtonElement = (Component, initialAmount) => {
        const ComponentHOCed = useAmountHOC(Component);
        const wrapper = mount(<ComponentHOCed initialAmount={initialAmount}/>);

        return wrapper.find('button');
    };

    it('should increments products amount', () => {
        const initialAmount = 0;
        const buttonEl = createWrapperAndGetButtonElement(TestIncrementButton, initialAmount);

        buttonEl.simulate('click');

        expect(buttonEl.text()).toBe((initialAmount + 1).toString());
    });

    it('should decrements products amount', () => {
        const initialAmount = 2;
        const buttonEl = createWrapperAndGetButtonElement(TestDecrementButton, initialAmount);

        buttonEl.simulate('click');

        expect(buttonEl.text()).toBe((initialAmount - 1).toString());
    });

    it('should stop to decrement when the amount reaches 0', () => {
        const initialAmount = 2;
        const buttonEl = createWrapperAndGetButtonElement(TestDecrementButton, initialAmount);

        for (let idx = 0; idx < initialAmount + 1; idx++) {
            buttonEl.simulate('click');
        }

        expect(buttonEl.text()).toBe('0');
    });
});