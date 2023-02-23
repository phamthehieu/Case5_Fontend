import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "../../service/usersService";
const initialState = {
    user: JSON.parse(localStorage.getItem('user'))
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.users = action.payload.data;
            localStorage.setItem('users', JSON.stringify(action.payload.data))
        })
    }
})
export default userSlice.reducer;