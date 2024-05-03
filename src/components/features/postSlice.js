import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    products: [],
    buskets:[],
    counter: 0
}


export const getDataProduct = createAsyncThunk(
    'post/getDataProductSlice',
    async function(info,{dispatch, rejectWithValue}){
        const response = await fetch('https://dummyjson.com/products')
        const responseData = await response.json()
        dispatch(addProduct(responseData))
    }
)

const getDataSlice = createSlice({
    name: 'getDataSlice',
    initialState,
    reducers:{
        addProduct:(state,action) => {
            state.products = action.payload
        },
        addProductBusket:(state, action) => {
            state.buskets.push(action.payload)
        },
        removeBusketProduct:(state,action) => {
            const index = state.buskets.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.buskets.splice(index, 1);
            }
        },
        increment:(state,action) => {
            state.counter += action.payload
        },
        decremenet:(state,action) => {
            state.counter -= action.payload
        }
    }
})

export const {addProduct,addProductBusket,removeBusketProduct, increment, decremenet} = getDataSlice.actions
export default getDataSlice.reducer