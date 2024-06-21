import { createSlice } from '@reduxjs/toolkit';
import { stocks } from '../../db/stocks';

const initialState = {
    allStocks: stocks
};

export const stocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        getAllStocks: (state) => {
            return state.getAllStocks;
        }
    }
});

export const { getAllStocks } = stocksSlice.actions;

export const stocksReducer = stocksSlice.reducer;
