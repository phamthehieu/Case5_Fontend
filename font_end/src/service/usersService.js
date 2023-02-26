import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";
import {date} from "yup";

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
        return res;
    }
)