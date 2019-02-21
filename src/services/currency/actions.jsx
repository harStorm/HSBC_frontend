//@flow
import {
    REQUEST_DATA,
    RECEIVE_DATA,
} from '../actions';

export const requestData = () => ({
    type: REQUEST_DATA,
});

const receiveData = (data: Object) => ({
    type: RECEIVE_DATA,
    data,
});

export const applyNewData = (
    currenciesList: Array<Object>,
) => (
    (dispatch: Function) => {
        dispatch(receiveData(currenciesList));
    }
);

export const fetchFX = () => (
    async () => {
        const promise = await fetch('http://localhost:3001/currencies');
        const response = await promise.json();

        return {
            currenciesList: response,
        }
    }
);