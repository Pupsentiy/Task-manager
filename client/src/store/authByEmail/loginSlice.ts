import { createSlice } from '@reduxjs/toolkit';

import { loginByEmail } from './loginByEmail.ts';
import { LoginSchema } from './loginSchema.ts';

const initialState: LoginSchema = {
  isLoading: false,
};

export const loginSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(loginByEmail.pending, state => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByEmail.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(loginByEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
  initialState,
  name: 'login',
  reducers: {
    logout: state => {
      localStorage.removeItem('userToken');
      state.isLoading = false;
      state.error = undefined;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
