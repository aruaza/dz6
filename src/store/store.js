import {applyMiddleware, combineReducers, createStore} from "redux";
import productReducer from "./products/productReducer/productReducer";
import busketReducer from "./products/busketReducer/busketReducer";
import {thunk} from "redux-thunk";

const rootReduer = combineReducers({
    productReducer,
    busketReducer
})

const store = createStore(rootReduer, applyMiddleware(thunk));
export default store;
