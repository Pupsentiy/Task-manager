import { ColumnCreateSchema } from "@/store/columnCreate/types.ts";
import { Action } from "redux";

export interface BoardCreateSchema {
  id: string | null;
  title: string;
  backdrop: string;
  column: ColumnCreateSchema[];
}

export enum ActionType {
  SET_TITLE_BOARD = "SET_TITLE_BOARD",
  SET_BACKDROP_BOARD = "SET_BACKDROP_BOARD",
  RESET_STATE = "RESET_STATE",
}

export interface SetTitleBoard extends Action {
  type: ActionType.SET_TITLE_BOARD;
  payload: string;
}

export interface SetBackdropBoard extends Action {
  type: ActionType.SET_BACKDROP_BOARD;
  payload: string;
}

export interface ResetStateBoard extends Action {
  type: ActionType.RESET_STATE;
}

export type BoardCreateActionType =
  | SetTitleBoard
  | SetBackdropBoard
  | ResetStateBoard;
