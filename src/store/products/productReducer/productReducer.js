const initialState = {
    data:[],
    error: null
}

const dataReducer = (state=initialState, action) => {
    switch (action.type){
        case 'FETCH_DATA':
        return {
            ...state,
            data: action.payload,
            error: null
        }
        case 'DATA_ERROR':
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default dataReducer