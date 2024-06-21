import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../db/products';

const initialState = {
    allProducts: products
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts: (state) => {
            return state.allProducts;
        }
    }
});

export const { getAllProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
