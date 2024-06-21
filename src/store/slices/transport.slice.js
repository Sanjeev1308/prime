import { createSlice } from '@reduxjs/toolkit';
import { transports } from '../../db/transports';

const initialState = {
    allTransports: transports
};

export const transportSlice = createSlice({
    name: 'transport',
    initialState,
    reducers: {
        getAllTransports: (state) => {
            return state.allTransports;
        }
    }
});

export const { getAllTransports } = transportSlice.actions;

export const transportReducer = transportSlice.reducer;
