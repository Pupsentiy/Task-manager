import { LoginSchema } from '@/store/authByEmail/loginSchema.ts';
import { SignUpSchema } from '@/store/signUp/signUpSchema.ts';
import { UserSchema } from '@/store/user/userSchema.ts';
import { AxiosInstance } from 'axios';

export interface StateSchema {
  loginForm: LoginSchema;
  signUp: SignUpSchema;
  user: UserSchema;
  // backgroundList: BackgroundListSchema;
  // board: BoardSchema;
  // boardCreate: BoardCreateSchema;
  // columnCreate: ColumnCreateSchema;
  // modalState: ModalStateSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  extra: ThunkExtraArg;
  rejectValue: T;
  state: StateSchema;
}
