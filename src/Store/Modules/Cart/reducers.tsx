import { createSlice } from "@reduxjs/toolkit";
import { Product } from "Models/product";

const initialState: Array<Product> = [];

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
                    removed = true;
                    if(product.id === payload.id) {
                        return false;
                    }
                }
                return true;
            });
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