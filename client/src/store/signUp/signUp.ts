import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { User } from '../user/userSchema';

export interface SignUpProps {
  confirmPassword: string;
  email: string;
  fullName: string;
  password: string;
}

export const signUp = createAsyncThunk<User, SignUpProps, ThunkConfig<string>>(
  'signUp/signUp',
  async (userData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>('/auth/register', userData);
      if (!response?.data) {
        throw new Error();
      }
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
