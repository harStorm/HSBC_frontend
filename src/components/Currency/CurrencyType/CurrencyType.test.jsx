import React from 'react';
import { shallow } from 'enzyme';
import CurrencyType from './CurrencyType';

describe('<CurrencyType />', () => {
    it('renders CurrencyType component', () => {
        const currencyType = shallow(<CurrencyType />);
        expect(currencyType.find('.currency__type').length).toEqual(1);
    });
});
