import { backgroundListReducer } from "@/store/backgroundList/backgroundListReducer.ts";
import { boardReducer } from "@/store/board/boardReducer.ts";
import { boardCreateReducer } from "@/store/boardCreate/boardCreateReducer.ts";
import { columnCreateReducer } from "@/store/columnCreate/columnCreateReducer.ts";
import { modalStateReducer } from "@/store/modalState/modalStateReducer.ts";
import { loadState, saveState } from "@/utils/helpers";
import throttle from "lodash.throttle";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
  Reducer,
} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { StateSchema } from "./StateSchema.ts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer: Reducer<StateSchema> = combineReducers<StateSchema>({
  board: boardReducer,
  boardCreate: boardCreateReducer,
  columnCreate: columnCreateReducer,
  backgroundList: backgroundListReducer,
  modalState: modalStateReducer,
});

const persistedState = loadState("state");
export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(
  throttle(() => {
    saveState(
      {
        board: store.getState().board,
      },
      "state",
    );
  }, 1000),
);

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, never, AnyAction>;
