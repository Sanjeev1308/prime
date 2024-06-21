import { createSlice } from '@reduxjs/toolkit';
import { uom } from '../../db/uom';

const initialState = {
    allUom: uom,
    selectedUom: {}
};

export const uomSlice = createSlice({
    name: 'uom',
    initialState,
    reducers: {
        getAllUom: (state) => {
            return state.allUom;
        },
        getUomById: (state, { payload }) => {
            state.selectedUom = state.allUom.find(
                (item) => +item.id === +payload
            );
        },
        addNewUom: (state, { payload }) => {
            state.allUom = [...state.allUom, payload];
        },
        editUomById: (state, { payload }) => {
            const selectedUomIndex = state.allUom.findIndex(
                (item) => item.id === payload.id
            );
            if (selectedUomIndex !== -1) {
                state.allUom[selectedUomIndex] = payload;
            }
        },
        deleteUomById: (state, { payload }) => {
            state.allUom = state.allUom.filter((item) => item.id !== payload);
        }
    }
});

export const { getAllUom, getUomById, addNewUom, editUomById, deleteUomById } =
    uomSlice.actions;

export const uomReducer = uomSlice.reducer;
