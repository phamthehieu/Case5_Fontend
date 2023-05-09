import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data) => {
        const res = await customAxios.post('auth/login', data)
        return res.data;
    }
)
export const registerUser = createAsyncThunk(
    'auth/register',
    async (data) => {
        const res = await customAxios.post('auth/register', data)
        return res;
    }
)
export const profileUser = createAsyncThunk(
    'users/profile',
    async (data) => {
        const res = await customAxios.get('users/profile/' + data)
        return res.data;
    }
)
export const friends = createAsyncThunk(
    'users/profile1',
    async (data) => {
        const res = await customAxios.get('users/profile/' + data)
        return res.data;
    }
)
export const editProfile = createAsyncThunk(
    'users/editProfile',
    async (data) => {
        const res = await customAxios.put('users/' + data.idUser, data)
        return res;
    }
)
export const editPassword = createAsyncThunk(
    "users/editPassword",
    async (data) => {
        const res = await customAxios.put('users/password/' + data.idUser, data)
        return res.data;
    }
)
export const listUser = createAsyncThunk (
    "users/listUser",
    async (data) => {
        const res = await customAxios.get('users/')
        return res.data;
    }
)
export const getProfileUser = createAsyncThunk (
    'user/getProfileUser',
    async (data) => {
        const res = await customAxios.get('users/profileUser?idUser='+data.idUser+'&id='+data.id)
        return res.data
    }
)