import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { User } from '../user/userSchema';
import { userAction } from './userSlice';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('userToken');
    if (!token) return thunkAPI.rejectWithValue('нет токена');
    try {
      const response = await thunkAPI.extra.api.get<User>('/auth/me');
      if (!response?.data) {
        throw new Error();
      }
      thunkAPI.dispatch(userAction.setUserData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        return thunkAPI.rejectWithValue(e?.response?.data?.message);
      } else {
        console.log('catch - else', e);
        return thunkAPI.rejectWithValue('Произошла ошибка при выполнении запроса');
      }
    }
  },
);
