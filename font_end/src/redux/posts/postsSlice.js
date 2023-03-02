import {createSlice} from "@reduxjs/toolkit";
import {addPost, deletePost, editPost, findByIdPosts, getPost, searchUser} from "../../service/postsService";


const initialState = {
    posts: [],
    post: {}
}
const postsSlice = createSlice({
        name: 'posts',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getPost.fulfilled, (state, action) => {
                state.posts = action.payload
            });
            builder.addCase(addPost.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            builder.addCase(findByIdPosts.fulfilled, (state, action) => {
                state.post = action.payload
            })

            builder.addCase(deletePost.fulfilled, (state, action) => {
                state.posts.splice(action.payload)
            })
            builder.addCase(editPost.fulfilled, (state, action) => {
                for (let i =0; i<state.posts.length; i++) {
                    if(action.payload.idPost == state.posts[i].idPost) {
                        state.posts[i] = action.payload;
                    }
                }
            })
            builder.addCase(searchUser.fulfilled, (state, action) => {
                state.search = action.payload;
            });



        }
    }
)

export default postsSlice.reducer;