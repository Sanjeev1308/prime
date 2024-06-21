import { createSlice } from '@reduxjs/toolkit';
import { transports } from '../../db/transports';

const initialState = {
    allTransports: transports,
    selectedTransport: {}
};

export const transportSlice = createSlice({
    name: 'transport',
    initialState,
    reducers: {
        getAllTransports: (state) => {
            return state.allTransports;
        },
        getTransportsById: (state, { payload }) => {
            state.selectedTransport = state.allTransports.find(
                (item) => item.bill_number === payload
            );
        },
        addNewTransports: (state, { payload }) => {
            state.allTransports = [...state.allTransports, payload];
        },
        editTransportsById: (state, { payload }) => {
            const selectedTransportsIndex = state.allTransports.findIndex(
                (item) => item.bill_number === payload.bill_number
            );
            if (selectedTransportsIndex !== -1) {
                state.allTransports[selectedTransportsIndex] = payload;
            }
        },
        deleteTransportsById: (state, { payload }) => {
            state.allTransports = state.allTransports.filter(
                (item) => item.bill_number !== payload
            );
        }
    }
});

export const {
    getAllTransports,
    getTransportsById,
    addNewTransports,
    editTransportsById,
    deleteTransportsById
} = transportSlice.actions;

export const transportReducer = transportSlice.reducer;
