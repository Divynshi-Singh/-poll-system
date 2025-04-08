import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import roleReducer from './roleSlice';  
import signupReducer from './signUpSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
    roles: roleReducer, 
  },
});

export default store;