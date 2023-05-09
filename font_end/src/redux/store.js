import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import friendsReducer from './friends/friendsSlice'
import postsReducer from './posts/postSlice'
export const Store = configureStore({
    reducer: {
        users: usersReducer,
        friends: friendsReducer,
        posts: postsReducer
    }
})