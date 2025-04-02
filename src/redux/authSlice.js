import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await fetch('http://192.168.68.107:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log(data);
      toast.success("Login successful!");
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message || 'Network error. Please try again.' });
      // return rejectWithValue({ message: error.message });
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    emailError: null,
    passwordError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        if (action.payload.email) {
          state.emailError = action.payload.email; 
        }
        if (action.payload.password) {
          state.passwordError = action.payload.password; 
        }
        state.error = action.payload.message || 'An error occurred. Please try again.';
      });
  },
});
export default authSlice.reducer;
