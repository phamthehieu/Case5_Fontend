import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import postsReducer from "./posts/postsSlice"


export const Store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
    }
})