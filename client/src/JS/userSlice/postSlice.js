import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

//add post
export const addPost = createAsyncThunk("post/add", async (post) => {
    try {
        let response = await axios.post("http://localhost:5000/post/add",
            post
        );
        return response;
    } catch (error) {
        console.log(error);
    }
});
//get post
export const getPost = createAsyncThunk("post/getall", async (post) => {
    try {
        let response = await axios.get("http://localhost:5000/post/",
            post
        );
        return response;
    } catch (error) {
        console.log(error);
    }
});




const initialState = {
    post: null,
    status: null,
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [addPost.pending]: (state) => {
            state.status = "pending";
        },

        [addPost.fulfilled]: (state, action) => {
            state.status = "successful";
            // state.post = action.payload.data.newpost;


        },
        [addPost.rejected]: (state) => {
            state.status = "failed";
        },[getPost.pending]: (state) => {
            state.status = "pending";
        },

        [getPost.fulfilled]: (state, action) => {
            state.status = "successful";
            state.post = action.payload.data.Posts;


        },
        [getPost.rejected]: (state) => {
            state.status = "failed";
        },

    },



});


// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = postSlice.actions

export default postSlice.reducer