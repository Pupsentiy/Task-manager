import { Action } from "redux";
import { BoardCreateSchema } from "../boardCreate/types";

export interface BoardSchema {
  board: BoardCreateSchema[];
}

// export type BoardAction

export enum ActionType {
  ADD_BOARD = "ADD_BOARD",
  ADD_COLUMN = "ADD_COLUMN",
}

export interface SetAddBoard extends Action {
  type: ActionType.ADD_BOARD;
  payload: { title: string; backdrop: string };
}

export interface SetAddColumn extends Action {
  type: ActionType.ADD_COLUMN;
  payload: { boardId: string; title: string };
}

export type BoardActionType = SetAddBoard | SetAddColumn;
