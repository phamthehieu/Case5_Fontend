import {createSlice} from "@reduxjs/toolkit";
import {friends, getProfileUser, listUser, loginUser, profileUser} from "../../service/usersService";
const initialState = {
    users: JSON.parse(localStorage.getItem('users')),
    profile: {},
    listUser: [],
    profileUser: [],
    friends: []
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
        builder.addCase(getProfileUser.fulfilled, (state, action) => {
            state.profileUser = action.payload
        })
        builder.addCase(friends.fulfilled, (state, action) => {
            state.friends = action.payload
        })
    }
})
export default userSlice.reducer;