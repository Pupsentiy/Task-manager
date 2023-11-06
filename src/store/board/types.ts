import { BoardCreateSchema } from "@/store/boardCreate/types";
import { Action } from "@reduxjs/toolkit";

export interface BoardSchema {
  boards: BoardCreateSchema[];
}

// export type BoardAction

export enum ActionType {
  ADD_BOARD = "ADD_BOARD",
}

export interface SetAddBoard extends Action {
  type: ActionType.ADD_BOARD;
  payload: { title: string; backdrop: string };
}

export type AllActionType = SetAddBoard;