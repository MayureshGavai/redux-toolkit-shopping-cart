import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.jsx'
import productSlice from "./productSlice.jsx";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product : productSlice
    }
})


export default store