import {createSlice} from "@reduxjs/toolkit";
import {getAllPosts, getPost, getPostUser} from "../../service/postService";
const initialState = {
    listPostsUser: [],
    listAllPosts: [],
    post: []
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: builder => {
        builder.addCase(getPostUser.fulfilled, (state, action) => {
            state.listPostsUser = action.payload;
        })
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.listAllPosts = action.payload
        })
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.post = action.payload
        })
    }
})
export default postSlice.reducer;