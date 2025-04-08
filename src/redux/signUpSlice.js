import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from 'axios';
import { BASE_URL } from "../constant/constant";

export const signUpUser = createAsyncThunk(
  "signup/signUpUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/register`,
        userDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { usertoken, user } = response.data;
      localStorage.setItem("usertoken", JSON.stringify(usertoken));
      localStorage.setItem("user", JSON.stringify(user));
      return { usertoken, user };
    } catch (error) {
      console.error("Error:", error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
      return rejectWithValue(error.response?.data || { message: errorMessage });
    }
  }
);
const signupSlice = createSlice({
  name: "signup",
  initialState: {
    user: null,
    usertoken: null,
    loading: false,
    error: null,
    validationErrors: {}, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        const { user, usertoken } = action.payload;
        state.user = user;
        state.usertoken = usertoken;
        state.loading = false;
        state.error = null;
        toast.success("Registration successful!");  
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "An error occurred. Please try again.";
      });
  },
});

export default signupSlice.reducer;
