import { createSlice } from '@reduxjs/toolkit';
import { bills } from '../../db/bills';

const initialState = {
    allBills: bills,
    selectedBill: {}
};

export const billsSlice = createSlice({
    name: 'bills',
    initialState,
    reducers: {
        getAllBills: (state) => {
            return state.allBills;
        },
        getBillsById: (state, { payload }) => {
            state.selectedBill = state.allBills.find(
                (item) => item.bill_number === payload
            );
        },
        addNewBills: (state, { payload }) => {
            state.allBills = [...state.allBills, payload];
        },
        editBillsById: (state, { payload }) => {
            const selectedBillsIndex = state.allBills.findIndex(
                (item) => item.bill_number === payload.bill_number
            );
            if (selectedBillsIndex !== -1) {
                state.allBills[selectedBillsIndex] = payload;
            }
        },
        deleteBillsById: (state, { payload }) => {
            state.allBills = state.allBills.filter(
                (item) => item.bill_number !== payload
            );
        }
    }
});

export const {
    getAllBills,
    getBillsById,
    addNewBills,
    editBillsById,
    deleteBillsById
} = billsSlice.actions;

export const billsReducer = billsSlice.reducer;
