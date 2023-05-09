import {createSlice} from "@reduxjs/toolkit";
import {
    friendSuggestion,
    listFriends,
    listReceiveFriends,
    listSendFriends
} from "../../service/friendsService";

const initialState = {
    listFriends: [],
    friendSuggestion: [],
    listSendFriends: [],
    listReceiveFriends: []

}
const friendsSlice = createSlice( {
    name: 'friends',
    initialState,
    extraReducers: builder => {
        builder.addCase(listFriends.fulfilled, (state, action) => {
            state.listFriends = action.payload;
        })
        builder.addCase(friendSuggestion.fulfilled, (state, action) => {
            state.friendSuggestion = action.payload;
        })
        builder.addCase(listSendFriends.fulfilled, (state, action) => {
            state.listSendFriends = action.payload;
        })
        builder.addCase(listReceiveFriends.fulfilled, (state, action) => {
            state.listReceiveFriends = action.payload;
        })
    }
})
export default friendsSlice.reducer;