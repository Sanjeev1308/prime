import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../db/products';

const initialState = {
    allProducts: products,
    selectedProduct: {}
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts: (state) => {
            return state.allProducts;
        },
        getProductsById: (state, { payload }) => {
            console.log('ll', payload);
            state.selectedProduct = state.allProducts.find(
                (item) => item.id === +payload
            );
        },
        addNewProducts: (state, { payload }) => {
            state.allProducts = [...state.allProducts, payload];
        },
        editProductsById: (state, { payload }) => {
            const selectedProductsIndex = state.allProducts.findIndex(
                (item) => item.id === payload.id
            );
            if (selectedProductsIndex !== -1) {
                state.allProducts[selectedProductsIndex] = payload;
            }
        },
        deleteProductsById: (state, { payload }) => {
            state.allProducts = state.allProducts.filter(
                (item) => item.id !== payload
            );
        }
    }
});

export const {
    getAllProducts,
    getProductsById,
    addNewProducts,
    editProductsById,
    deleteProductsById
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
