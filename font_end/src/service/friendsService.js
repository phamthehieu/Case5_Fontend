import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const listFriends = createAsyncThunk (
    'friends/listFriends',
    async (data) => {
        const res = await customAxios.get('friends/'+ data)
        return res.data;
    }
)
export const friendSuggestion = createAsyncThunk (
    'friends/friendSuggestion',
    async (data) => {
        const res = await customAxios.get('friends/friend-suggestion/'+data)
        return res.data;
    }
)
export const sendFriends = createAsyncThunk (
    'friends/sendFriends',
    async (data) => {
        const res = await customAxios.post('friends/send-friends',data)
        return res.data;
    }
)
export const confirmFriends = createAsyncThunk (
    'friends/confirmFriends',
    async (data) => {
        const res = await customAxios.post('friends/confirm-friends/',data)
        return res.data;
    }
)
export const listSendFriends = createAsyncThunk (
    'friends/listSendFriends',
    async (data) => {
        const res = await customAxios.get('friends/list-send-friends/'+data)
        return res.data;
    }
)
export const listReceiveFriends = createAsyncThunk (
    'friends/listReceiveFriends',
    async (data) => {
        const res = await customAxios.get('friends/list-receive-friends/'+data)
        return res.data;
    }
)
export const removeFriends = createAsyncThunk (
    'friends/removeFriends',
    async (data) => {
        const res = await customAxios.delete('friends?idSender='+data.idSender+'&idReceiver='+data.idReceiver)
        return res.data;
    }
)