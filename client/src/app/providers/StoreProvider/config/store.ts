import { loginReducer } from '@/store/authByEmail/loginSlice.ts';
import { signUpReducer } from '@/store/signUp/signUpSlice.ts';
import { userReducer } from '@/store/user/userSlice.ts';
import { $api } from '@/utils/api/api.ts';
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { StateSchema, ThunkExtraArg } from './StateSchema.ts';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    loginForm: loginReducer,
    signUp: signUpReducer,
    user: userReducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
    preloadedState: initialState,
    reducer: rootReducers,
  });
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
