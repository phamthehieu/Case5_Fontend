import {createSlice} from "@reduxjs/toolkit";
import {listConfirmFriends, listFriends} from "../../service/friendsService";

const initialState = {
    listConfirmFriends: [],
    listFriends: []
}
const friendsSlice = createSlice( {
    name: 'friends',
    initialState,
    extraReducers: builder => {
        builder.addCase(listConfirmFriends.fulfilled, (state, action) => {
            state.listConfirmFriends = action.payload
        })
        builder.addCase(listFriends.fulfilled, (state, action) => {
            state.listFriends = action.payload
        })
    }
})
export default friendsSlice.reducer;