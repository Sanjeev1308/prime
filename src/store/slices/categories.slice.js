import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../db/categories';

const initialState = {
    allCategories: categories
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getAllCategories: (state) => {
            return state.allCategories;
        }
    }
});

export const { getAllCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
