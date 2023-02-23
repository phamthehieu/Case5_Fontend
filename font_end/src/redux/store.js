import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
export const Store = configureStore({
    reducer: {
        users: usersReducer
    }
})