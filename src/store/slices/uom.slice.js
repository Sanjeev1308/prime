import { createSlice } from '@reduxjs/toolkit';
import { uom } from '../../db/uom';

const initialState = {
    allUom: uom
};

export const uomSlice = createSlice({
    name: 'uom',
    initialState,
    reducers: {
        getAllUom: (state) => {
            return state.allUom;
        }
    }
});

export const {} = uomSlice.actions;

export const uomReducer = uomSlice.reducer;
