import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import friendsReducer from './friends/friendsSlice'
export const Store = configureStore({
    reducer: {
        users: usersReducer,
        friends: friendsReducer
    }
})