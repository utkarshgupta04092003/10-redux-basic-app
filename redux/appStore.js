import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './storeSlice';


const appStore = configureStore({
    // this is big reducer for app
    reducer: {
        // these are reducer for slice
        cart: cartReducer
    }
});
export default appStore;