import {createSlice} from "@reduxjs/toolkit";
import {listUser, loginUser, profileUser} from "../../service/usersService";
const initialState = {
    users: JSON.parse(localStorage.getItem('users')),
    profile: {},
    listUser: []
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
        builder.addCase(listUser.fulfilled, (state, action) => {
            state.listUser = action.payload
        })
    }
})
export default userSlice.reducer;