import { StateSchema, ThunkConfig } from './config/StateSchema.ts';
import { type AppDispatch, createReduxStore } from './config/store.ts';
import { StoreProvider } from './ui/StoreProvider.tsx';

export { StoreProvider, createReduxStore };
export type { AppDispatch, StateSchema, ThunkConfig };
