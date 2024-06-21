import { createSlice } from '@reduxjs/toolkit';
import { locations } from '../../db/locations';

const initialState = {
    allLocations: locations,
    selectedLocation: {}
};

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        getAllLocations: (state) => {
            return state.allLocations;
        },
        getLocationsById: (state, { payload }) => {
            state.selectedLocation = state.allLocations.find(
                (item) => item.bill_number === payload
            );
        },
        addNewLocations: (state, { payload }) => {
            state.allLocations = [...state.allLocations, payload];
        },
        editLocationsById: (state, { payload }) => {
            const selectedLocationsIndex = state.allLocations.findIndex(
                (item) => item.bill_number === payload.bill_number
            );
            if (selectedLocationsIndex !== -1) {
                state.allLocations[selectedLocationsIndex] = payload;
            }
        },
        deleteLocationsById: (state, { payload }) => {
            state.allLocations = state.allLocations.filter(
                (item) => item.bill_number !== payload
            );
        }
    }
});

export const {
    getAllLocations,
    getLocationsById,
    addNewLocations,
    editLocationsById,
    deleteLocationsById
} = locationsSlice.actions;

export const locationsReducer = locationsSlice.reducer;
