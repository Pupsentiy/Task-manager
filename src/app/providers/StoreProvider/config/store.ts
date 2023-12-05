import { backgroundListReducer } from "@/store/backgroundList/backgroundListReducer.ts";
import { boardReducer } from "@/store/board/boardReducer.ts";
import { boardCreateReducer } from "@/store/boardCreate/boardCreateReducer.ts";
import { modalStateReducer } from "@/store/modalState/modalStateReducer.ts";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  Reducer,
} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { StateSchema } from "./StateSchema.ts";

const rootReducer: Reducer<StateSchema> = combineReducers<StateSchema>({
  board: boardReducer,
  boardCreate: boardCreateReducer,
  modalState: modalStateReducer,
  backgroundList: backgroundListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, never, AnyAction>;
