import { createSlice } from '@reduxjs/toolkit';
import { orders } from '../../db/orders';

const initialState = {
    allOrders: orders
};

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        getAllOrders: (state) => {
            return state.allOrders;
        }
    }
});

export const { getAllOrders } = ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;
