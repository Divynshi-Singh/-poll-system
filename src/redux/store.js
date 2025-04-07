import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import roleReducer from './roleSlice';  // Import the roleSlice

const store = configureStore({
  reducer: {
    auth: authReducer,
    roles: roleReducer,  // Add the roleSlice to the store
  },
});

export default store;