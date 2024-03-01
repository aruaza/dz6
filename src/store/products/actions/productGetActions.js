import productJson from '../../../data/products.json';

export const fetchData = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_DATA', payload: productJson });
        } catch (e) {
            dispatch({ type: 'DATA_ERROR', payload: e });
        }
    };
};
