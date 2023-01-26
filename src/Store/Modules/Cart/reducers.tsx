import { createSlice } from "@reduxjs/toolkit";
import { Product } from "Models/product";

export const initialState: Array<Product> = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductCart: (state, { payload }) => {
            state.push(payload);
        },
        resetCart: (state) => {
            state = [];
            return state;
        },
        removeOneProductCart: (state, { payload }) => {
            let removed = false;
            state = state.filter(product => {
                if(!removed) {
                    if(product.id === payload.id) {
                        removed = true;
                        return false;
                    }
                }
                return true;
            });
            console.log(state);
            return state;
        },
        removeAllOfProductCart: (state, { payload }) => {
            state = state.filter(product => product.id !== payload.id);
            return state;
        }
    }
});

export const { addProductCart, resetCart, removeOneProductCart, removeAllOfProductCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;