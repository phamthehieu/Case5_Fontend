import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";

export const loginUser = createAsyncThunk (
'auth/login',
    async (data) => {
    const res = await customAxios.post('auth/login',data)
        return res.data;
    }
)
export const registerUser = createAsyncThunk (
    'auth/register',
    async (data) => {
        const res = await customAxios.post('auth/register',data)
        return res;
    }
)