import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Exchange from './Exchange';

const props = {
    currency: {
        isLoaded: true,
        currencies: [
            {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
            {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
            {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
            {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
            {"pair":"USD JPY", "buy":110.467, "sell":110.417},
            {"pair":"EUR JPY", "buy":120.589, "sell":120.491}
        ],
    },
    initAPI: jest.fn(),
    updateAPI: jest.fn(),
}

describe('<Exchange />', () => {
    it('renders Exchange screen', () => {
        const wrapper = shallow(<Exchange {...props} />);
        expect(wrapper.find('#exchangeForm').length).toEqual(1);
    });
    it('not renders Exchange screen', () => {
        const wrapper = shallow(<Exchange {...props} />);
        wrapper.setProps({
            currency: {
                isLoaded: false,
            },
        })

        expect(wrapper.find('#exchangeForm').length).toEqual(0);
    });
    it('call initAPI only once', () => {
        const spy = sinon.spy(props, 'initAPI');

        expect(spy.calledOnce);
    });
    it('call updateAPI with correnct params', () => {
        const spy = sinon.spy(props, 'updateAPI');

        expect(spy.calledOnce);
    });
});
