import { createSlice } from "@reduxjs/toolkit";
import { Product } from "Models/product";

const initialState: Array<Product> = [];

const productsSlice = createSlice({
    name: "getProducts",
    initialState,
    reducers: {
        getProducts: (state, { payload }) => {
            state = payload;
            return state;
        }
    }
});

export const { getProducts } = productsSlice.actions;
export const productReducer = productsSlice.reducer;