import {createSlice} from "@reduxjs/toolkit";
import {loginUser, profileUser} from "../../service/usersService";
const initialState = {
    users: JSON.parse(localStorage.getItem('users')),
    profile: {}
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.users = action.payload;
            localStorage.setItem('users', JSON.stringify(action.payload))
            localStorage.setItem('token', JSON.stringify(action.payload.token))
        })
        builder.addCase(profileUser.fulfilled,(state, action) => {
            state.profile = action.payload
        })
    }
})
export default userSlice.reducer;