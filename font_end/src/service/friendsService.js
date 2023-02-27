import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const listConfirmFriends = createAsyncThunk (
    'friends/listConfirm',
    async (data) => {
        const res = await customAxios.get('friends/list-confirm-friends/' + data)
        return res.data;
    }
)
export const listFriends = createAsyncThunk (
    'friends/listFriends',
    async (data) => {
        const res = await customAxios.get('friends/'+ data)
        return res.data;
    }
)