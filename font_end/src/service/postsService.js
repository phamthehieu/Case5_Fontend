import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getPost = createAsyncThunk(
    'posts/getPosts',
    async ()=>{
        const res = await customAxios.get('posts');
        return res.data;
    }
)
export const findByIdPosts = createAsyncThunk(
    'posts/findByIdPosts',
    async (data)=>{
        const res = await customAxios.get('posts/findById/'+data);
        return res.data
    }
)


export const addPost = createAsyncThunk(
    'posts/addPost',
    async (data)=>{
        await customAxios.post('posts',data);
        const res = await customAxios.get('posts');
        return res.data;
    }
)
export const deletePost = createAsyncThunk(
    'posts/removePost',
    async (data)=>{
        const res = await customAxios.delete('posts/'+data);
        return data
    }
)
export const editPost = createAsyncThunk(
    'posts/editPost',
    async (data)=>{
        console.log(data)
        const res = await customAxios.put('posts/'+ data.idPost,data);
        return data
    }
)