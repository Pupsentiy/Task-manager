import { initAuthData } from '@/store/user/initAuthData.ts';
import { User, UserSchema } from '@/store/user/userSchema.ts';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(initAuthData.fulfilled, (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
      state._inited = true;
    });
    builder.addCase(initAuthData.rejected, state => {
      state._inited = true;
    });
  },
  initialState,
  name: 'user',
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
  },
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
