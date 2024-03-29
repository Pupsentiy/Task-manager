import { createSlice } from '@reduxjs/toolkit';

import { signUp } from './signUp';
import { SignUpSchema } from './signUpSchema';

const initialState: SignUpSchema = {
  error: '',
  isLoading: false,
  success: false,
};

export const signUpSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.error = undefined;
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(signUp.fulfilled, state => {
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    });
  },
  initialState,
  name: 'signUp',
  reducers: {
    resetSuccess: state => {
      state.success = false;
    },
  },
});

export const { actions: singUpActions } = signUpSlice;
export const { reducer: signUpReducer } = signUpSlice;
