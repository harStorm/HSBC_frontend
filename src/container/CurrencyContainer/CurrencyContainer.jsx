//@flow
import React, { Component } from 'react';
import Currency from '../../components/Currency';
import {
    UP,
    DOWN,
    REGEX,
    DEFAULT,
    REPLACER,
} from './constants';

type CurrencyContainerProps = {
    currency: Array<Object>,
}

type CurrencyContainerState = {
    currencies: Array<Object>,
}

class CurrencyContainer extends Component<CurrencyContainerProps, CurrencyContainerState> {
    constructor(props: CurrencyContainerProps) {
        super(props);

        this.state = {
            currencies: [],
        }
    }

    static getDerivedStateFromProps(props: CurrencyContainerProps, state: CurrencyContainerState) {
        const {
            currency,
        } = props;

        const {
            currencies,
        } = state;

        let tempCurrencies;

        if (currencies.length) {
            tempCurrencies = currency.map<Object>(({buy, sell, pair}: Object, i) => {
                const {
                    buy: oldBuy,
                } = currencies[i];
                let arrow;

                if (parseFloat(buy) > parseFloat(oldBuy)) {
                    arrow = UP;
                } else if (parseFloat(buy) < parseFloat(oldBuy)) {
                    arrow = DOWN;
                } else {
                    arrow = DEFAULT;
                }

                return {
                    buy,
                    sell,
                    currencyBuyValue: buy.toString().replace(REGEX, REPLACER),
                    currencySellValue: sell.toString().replace(REGEX, REPLACER),
                    title: pair,
                    currencyName: pair.split(/\s/)[0],
                    arrow,
                }
            });
        } else {
            tempCurrencies = currency.map<Object>(({buy, sell, pair}: Object) => ({
                buy,
                sell,
                currencyBuyValue: buy.toString().replace(REGEX, REPLACER),
                currencySellValue: sell.toString().replace(REGEX, REPLACER),
                title: pair,
                currencyName: pair.split(/\s/)[0],
                arrow: DEFAULT,
            }));
        }
        
        return {
            currencies: tempCurrencies
        }
    }

    render() {
        const {
            currencies,
        } = this.state;

        return (
            <div className="currency--wrapper">
                {currencies.map(({
                    currencySellValue,
                    currencyBuyValue,
                    currencyName,
                    title,
                    arrow,
                }: Object) => (
                    <Currency
                        currencySellValue={currencySellValue}
                        currencyBuyValue={currencyBuyValue}
                        currencyName={currencyName}
                        title={title}
                        arrow={arrow}
                        key={title}
                    />
                ))}
            </div>
        )
    }
}

export default CurrencyContainer;
