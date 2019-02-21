import React from 'react';
import { shallow } from 'enzyme';
import Currency from './currency';

describe('<Currency />', () => {
    it('renders Currency component', () => {
        const currency = shallow(<Currency />);
        
        expect(currency.find('.currency').length).toEqual(1);
    });
    it('renders Currency with up arrow', () => {
        const arrow = 'up';
        const currency = shallow(<Currency arrow={arrow} />);

        expect(currency.find('.currency__arrow-up').length).toEqual(1);
    });
    it('renders Currency with down arrow', () => {
        const arrow = 'down';
        const currency = shallow(<Currency arrow={arrow} />);

        expect(currency.find('.currency__arrow-down').length).toEqual(1);
    });
    it('renders Currency with default arrow', () => {
        const arrow = 'default';
        const currency = shallow(<Currency arrow={arrow} />);

        expect(currency.find('.currency__arrow-default').length).toEqual(1);
    });
});
