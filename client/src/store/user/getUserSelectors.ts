import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserData = (state: StateSchema) => state.user.userData;
export const getUserInited = (state: StateSchema) => state.user._inited;
