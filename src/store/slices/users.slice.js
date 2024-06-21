import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../db/users';

const initialState = {
    allUsers: users
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsers: (state) => {
            return state.users;
        }
    }
});

export const { getAllUsers } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
