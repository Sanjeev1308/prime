import { createSlice } from '@reduxjs/toolkit';
import { bills } from '../../db/bills';

const initialState = {
    allBills: bills
};

export const billsSlice = createSlice({
    name: 'bills',
    initialState,
    reducers: {
        getAllBills: (state) => {
            return state.allBills;
        }
    }
});

export const { getAllBills } = billsSlice.actions;

export const billsReducer = billsSlice.reducer;
