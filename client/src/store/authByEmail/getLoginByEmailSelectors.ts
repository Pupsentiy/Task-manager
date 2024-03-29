import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginByEmailError = (state: StateSchema) => state.loginForm.error;
export const getLoginByEmailIsLoading = (state: StateSchema) => state.loginForm.isLoading;
