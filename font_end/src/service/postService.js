import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const addPosts = createAsyncThunk(
    'posts/add',
    async (data) => {
        const res = await customAxios.post('posts/', data)
        return res.data;
    }
)
export const getPostUser = createAsyncThunk (
    'posts/findPosts',
    async (data) => {
        const res = await customAxios.get('posts/'+data)
        return res.data;
    }
)
export const getAllPosts = createAsyncThunk (
    'posts/findAllPosts',
    async (data) => {
        const res = await customAxios.get('posts/')
        return res.data;
    }
)
export const deletePosts = createAsyncThunk (
    'posts/findAllPosts',
    async (data) => {
        const res = await customAxios.delete('posts/'+data)
        return res.data;
    }
)
export const getPost = createAsyncThunk (
    'posts/findByIdPost',
    async (data) => {
        const res = await customAxios.get('posts/find-by-id/'+data)
        return res.data;
    }
)
export const editPost = createAsyncThunk (
    'post/editPost',
    async (data) => {
        const res = await customAxios.put('posts/'+data.idPost, data)
        return res.data;
    }
)
