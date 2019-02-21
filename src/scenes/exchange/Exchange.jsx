//@flow
import React, { Component } from 'react';
import CurrencyContainer from '../../container/CurrencyContainer';
import { TIMEOUT } from '../../services/constants';

type ExchangeProps = {
  currency: Object,
  initAPI: Function,
  updateAPI: Function,
}

type ExchangeState = {
  interval: any,
}

class Exchange extends Component<ExchangeProps, ExchangeState> {
  constructor(props: ExchangeProps) {
    super(props);

    this.state = {
      interval: '',
    }
  }

  componentDidMount() {
    const {
      initAPI,
      updateAPI,
    } = this.props;

    initAPI();
    const interval = setInterval(() => {
      updateAPI();
      //Just for showing requests ^_^
      console.warn('get new data');
      
    }, TIMEOUT);
    this.setState(() => ({
      interval,
    }));
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const {
      currency,
    } = this.props;

    return currency.isLoaded ? (
      <form id="exchangeForm">
          <CurrencyContainer
            currency={currency.items}
          />
      </form>
    ) : (
      <div>Loading</div>
    )
  }
}

export default Exchange;