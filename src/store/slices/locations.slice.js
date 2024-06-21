import { createSlice } from '@reduxjs/toolkit';
import { locations } from '../../db/locations';

const initialState = {
    allLocations: locations
};

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        getAllLocations: (state) => {
            return state.allLocations;
        }
    }
});

export const { getAllLocations } = locationsSlice.actions;

export const locationsReducer = locationsSlice.reducer;
