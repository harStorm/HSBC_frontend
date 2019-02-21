//@flow
//$FlowFixMe
import { connect } from 'react-redux';
import Exchange from './Exchange';
import { 
    getCurrentValueForCurrency,
} from '../../services/currency/selectors';
import {
    initAPI,
    updateAPI,
} from '../../services/api/actions';

const mapDispatchToProps = (dispatch) => ({
    initAPI: () => dispatch(initAPI()),
    updateAPI: () => dispatch(updateAPI(),)
})

const mapStateToProps = (state) => ({
    currency: getCurrentValueForCurrency(state),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Exchange);