
import {configureStore} from "@reduxjs/toolkit";
import postSlice from "../components/features/postSlice";

const store = configureStore({
    reducer:{
        postSlice
    }
})
export default store;
