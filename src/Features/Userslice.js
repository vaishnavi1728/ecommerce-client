import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import axios from "axios";

export const login = createAsyncThunk(
    "login",
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post("https://ecommerce-server-1-2twm.onrender.com/api/v1/user/login", userData);
        return { userData, responseData: response.data };
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const verify=createAsyncThunk("verify",async(userData,{rejectWithValue})=>{
    try{
      const response=await axios.post("https://ecommerce-server-1-2twm.onrender.com/api/v1/user/login",userData);
      return {userData,responseData: response.data};
    }
    catch(error)
    {
      return rejectWithValue(error.response.data);
    }
  });

  export const signup = createAsyncThunk(
    "signup",
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          "https://ecommerce-server-1-2twm.onrender.com/api/v1/user/register",
          userData,{withCredentials:true,}
        );
        return { userData, responseData: response.data };
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const forgotPassword = createAsyncThunk(
    "user/forgotPassword",
    async (email, { rejectWithValue }) => {
      try {
        const response = await axios.post("https://ecommerce-server-1-2twm.onrender.com/api/v1/user/password/forgot", { email });
        return response.data; // Assuming the response contains a success message
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  
  export const updatePassword = createAsyncThunk(
    "user/updatePassword",
    async ({ id, oldPassword, newPassword }, { rejectWithValue }) => {
      try {
        const response = await axios.put(`https://ecommerce-server-1-2twm.onrender.com/api/v1/user/updatepassword/${id}`, { oldPassword, newPassword });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

export const setuser = createAction("user/setuser"); // Define setuser action

export const User = createSlice({
    name: "user",
    initialState: {
      user: {},
      loading: false,
      error: null,
      login: false,
    },
    reducers: {
      setuser: (state, action) => {
        state.user = action.payload;
      },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
          state.user = action.payload;
          state.loading = false;
          state.error = null;
          state.login = true;
        });
        builder.addCase(verify.fulfilled,(state,action)=>{
          state.user=action.payload;
          state.loading=false;
          state.error=null;
          state.login=true;
        });
        builder.addCase(signup.fulfilled, (state, action) => {
            state.user = action.payload.userData;
            state.loading = false;
            state.error = null;
            state.login = true;
          });
          builder.addCase(forgotPassword.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          builder.addCase(forgotPassword.fulfilled, (state) => {
            state.loading = false;
            // Handle success (if needed)
          })
          builder.addCase(forgotPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
          builder.addCase(updatePassword.pending, (state) => {
            state.loading = true;
            state.error = null;
          });
          builder.addCase(updatePassword.fulfilled, (state) => {
            state.loading = false;
            // Handle success (if needed)
          });
          builder.addCase(updatePassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    },

});

export default User.reducer;
