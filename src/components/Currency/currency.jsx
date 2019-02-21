//@flow
import React from 'react';
import CurrencyType from './CurrencyType';
//$FlowFixMe
import './currencies.scss';

type CurrencyProps = {
    currencyName: string,
    currencySellValue: string,
    currencyBuyValue: string,
    title: string,
    arrow: string,
}

const Currency = ({ 
    currencySellValue,
    currencyBuyValue,
    currencyName,
    title,
    arrow,
}: CurrencyProps) => (
    <div className="currency">
        <div className={`currency__arrow-${arrow}`} />
        <div className="currency__title">{title}</div>
        <CurrencyType
            name={`Sell ${currencyName}`}
            value={currencySellValue}
            type="sell"
        />
        <CurrencyType
            name={`Buy ${currencyName}`}
            value={currencyBuyValue}
            type="buy"
        />
    </div>
);

export default Currency;