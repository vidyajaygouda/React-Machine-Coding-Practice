import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    initialState: {
        users: {
            name: 'vidya',
            age: 29,
            
        }
    },
    name: 'user',
    reducers: {
        addUser: (state, actions) => {
            state.users = actions.payload
        }
    }
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;