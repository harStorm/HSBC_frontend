//@flow
import {
    REQUEST_DATA,
    RECEIVE_DATA,
} from '../actions';

function fetching(
    state,
    action
) {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                currency: {
                    isLoaded: false,
                    items: [],
                }
            }
        case RECEIVE_DATA:
            return {
                ...state,
                currency : {
                    isLoaded: true,
                    items: action.data,
                }
            }
        default:
            return state
    }
}
  
export function currencies(state: Object = {}, action: Object) {
    switch (action.type) {
        case RECEIVE_DATA:
        case REQUEST_DATA:
            const currency = fetching(state, action)
            return {
                ...currency,
            }
        default:
            return state
    }
}