import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Modules/Cart/reducers";
import { productReducer } from "./Modules/Products/reducers";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;