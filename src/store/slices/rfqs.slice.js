import { createSlice } from '@reduxjs/toolkit';
import { rfqs } from '../../db/rfqs';

const initialState = {
    allRfqs: rfqs,
    selectedRfq: {}
};

export const rfqsSlice = createSlice({
    name: 'rfqs',
    initialState,
    reducers: {
        getAllRfqs: (state) => {
            return state.allRfqs;
        },
        getRfqById: (state, { payload }) => {
            state.selectedRfq = state.allRfqs.find(
                (item) => item.rfq_number === payload
            );
        },
        addNewRfq: (state, { payload }) => {
            state.allRfqs = [...state.allRfqs, payload];
        },
        editRfqById: (state, { payload }) => {
            const selectedRfqIndex = state.allRfqs.findIndex(
                (item) => item.rfq_number === payload.rfq_number
            );
            if (selectedRfqIndex !== -1) {
                state.allRfqs[selectedRfqIndex] = payload;
            }
        },
        deleteRfqById: (state, { payload }) => {
            state.allRfqs = state.allRfqs.filter(
                (item) => item.rfq_number !== payload
            );
        }
    }
});

export const { getAllRfqs, getRfqById, addNewRfq, editRfqById, deleteRfqById } =
    rfqsSlice.actions;

export const rfqsReducer = rfqsSlice.reducer;
