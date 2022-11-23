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
// update a POST

export const editPost = createAsyncThunk("post/editPost/:id", async ({ id, status }) => {
    try {
      let response = await axios.put(`http://localhost:5000/post/editPost/${id}`, status);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  });
  
// delete a post

export const delPost = createAsyncThunk("post/delete/:id", async ({ id }) => {
    console.log(id)
    try {
      let response = await axios.delete(`http://localhost:5000/post/delete/${id}`);
      return await response;
    } catch (error) {
      console.log(error);
    }
  });
//all feeds
export const allFeeds = createAsyncThunk("post/allfeeds", async () => {
  try {
    let result = await axios.get("http://localhost:5000/post/allfeeds");
    return result;
  } catch (error) {
    console.log(error);
  }
});
//add feeds
export const addFeed = createAsyncThunk(
  "/files/feedback/:id",
  async ({ id, feed }) => {
    try {
      console.log(feed);
      console.log(id);
      let result = await axios.put(
        `http://localhost:5000/post/feedback/${id}`,
        feed
      );

      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);


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
        // delete extrareducers

    [delPost.pending]: (state) => {
        state.status = "pending";
      },
      [delPost.fulfilled]: (state, action) => {
        state.status = "successful";
      },
      [delPost  .rejected]: (state) => {
        state.status = "failed";
      },
        // update extrareducers

    [editPost.pending]: (state) => {
        state.status = "pending";
      },
      [editPost.fulfilled]: (state, action) => {
        state.status = "successful";
        state.lastPostUpdated = action.payload.Post
      },
      [editPost.rejected]: (state) => {
        state.status = "failed";
      },
     //all feeds
     [allFeeds.pending]: (state) => {
      state.status = "pending";
      state.isLoading = true;
    },
    [allFeeds.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.feeds = action.payload?.data?.allfeeds;
      state.isLoading = false;
    },
    [allFeeds.failed]: (state) => {
      state.status = "failed";
      state.isLoading = false;
    },
  // add feeds
  [addFeed.pending]: (state) => {
    state.status = "pending";
    state.isLoading = true;
  },
  [addFeed.rejected]: (state) => {
    state.status = "fail";
    state.isLoading = false;
  },
  [addFeed.fulfilled]: (state, action) => {
    state.status = "success";
    state.isLoading = false;
    state.feeds = action.payload?.result;
  },

    },
   



});


// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = postSlice.actions

export default postSlice.reducer