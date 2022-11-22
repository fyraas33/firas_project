import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

//register
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/register",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});
//login
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});

// get all users

export const getUser = createAsyncThunk("getAllUser/", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/");

    return await response.data;
  } catch (error) {
    console.log(error);
  }
});
// get user by id
export const getuserById = createAsyncThunk("user/getbyid/:id", async (id) => {
  try {
    let result = await axios.get(`http://localhost:5000/user/${id}`);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
// update a User

export const updateUser = createAsyncThunk("updateuser", async ({ id, user }) => {
  try {
    let response = await axios.put(`http://localhost:5000/user/update/${id}`, user);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

// delete a User

export const deleteUser = createAsyncThunk("user/delete/:id", async ({ id }) => {
  console.log(id)
  try {
    let response = await axios.delete(`http://localhost:5000/user/delete/${id}`);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
//current
export const userCurrent = createAsyncThunk("user/current",async () => {
  try {
      let response = await axios.get("http://localhost:5000/user/current",{
          headers: { 
              Authorization: localStorage.getItem("token")
                   },
      });
  return await response.data;
  
  } catch (error) {

  }
});


const initialState = {
  user: null,
  status: null,
  users:[],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token")
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },

    [userRegister.fulfilled]: (state, action) => {
      state.status = "successful";
      state.user = action.payload.data.newUser;
      localStorage.setItem("token", action.payload.data.token);

    },
    [userRegister.rejected]: (state) => {
      state.status = "failed";
    },
    //login
    [userLogin.pending]: (state) => {
      state.status = "pending";
    },

    [userLogin.fulfilled]: (state, action) => {
      state.status = "successful";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);

    },
    [userLogin.rejected]: (state) => {
      state.status = "failed";
    },

    // get user 

    [getUser.pending]: (state) => {
      state.status = "pending";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = action.payload.msg;
      state.users = action.payload.user;
    },
    [getUser.rejected]: (state) => {
      state.status = "failed";
    },
    //get user by id
    [getuserById.fulfilled]: (state, action) => {
      state.status = "successe";

      state.user = action.payload?.user;
    },
    [getuserById.rejected]: (state) => {
      state.status = "failed";
    },
    [getuserById.pending]: (state) => {
      state.status = "pending";
    },

    // update extrareducers

    [updateUser.pending]: (state) => {
      state.status = "pending";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.status = "successful";
      state.lastUserUpdated = action.payload.User
    },
    [updateUser.rejected]: (state) => {
      state.status = "failed";
    },

    // delete extrareducers

    [deleteUser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = "successful";
    },
    [deleteUser.rejected]: (state) => {
      state.status = "failed";
    },


    //current
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },

    [userCurrent.fulfilled]: (state, action) => {
      state.status = "successful";
      state.user = action.payload?.user;


    },
    [userCurrent.rejected]: (state) => {
      state.status = "failed";
    },

  },




});


// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer