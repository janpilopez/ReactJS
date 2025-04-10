import cartReducer from "./Components/CartSlice";
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store;