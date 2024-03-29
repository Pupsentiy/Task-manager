import { ThunkConfig } from '@/app/providers/StoreProvider';
import { userAction } from '@/store/user/userSlice.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { User } from '../user/userSchema';

interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, ThunkConfig<string>>(
  'login/loginByEmail',
  async (authData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>('/auth/login', authData);

      if (!response) {
        throw new Error();
      }
      thunkAPI.dispatch(userAction.setUserData(response.data));
      localStorage.setItem('userToken', response.data.token);
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
