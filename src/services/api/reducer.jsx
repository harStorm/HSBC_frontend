//@flow
//$FlowFixMe
import { combineReducers } from 'redux';
import { currencies } from '../currency/reducer';

const rootReducer = combineReducers({
  currencies,
})

export default rootReducer