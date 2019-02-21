//@flow
import { requestData, fetchFX, applyNewData } from '../currency/actions';

export const initAPI = () => (
    async (dispatch: Function) => {
        dispatch(requestData());
        const { currenciesList } = await dispatch(fetchFX());
        dispatch(applyNewData(currenciesList));
    }
);

export const updateAPI = () => (
    async (dispatch: Function) => {
        const { currenciesList } = await dispatch(fetchFX());
        dispatch(applyNewData(currenciesList));
    }
);