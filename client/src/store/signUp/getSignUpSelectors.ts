import { StateSchema } from '@/app/providers/StoreProvider';

export const getSignUpError = (state: StateSchema) => state.signUp.error;
export const getSignUpSuccess = (state: StateSchema) => state.signUp.success;
export const getSingUpIsLoading = (state: StateSchema) => state.signUp.isLoading;
