import { Action } from 'redux';

import { BoardCreateSchema } from '../boardCreate/types';

export interface BoardSchema {
  board: BoardCreateSchema[];
}

// export type BoardAction

export enum ActionType {
  ADD_BOARD = 'ADD_BOARD',
  ADD_COLUMN = 'ADD_COLUMN',
}

export interface SetAddBoard extends Action {
  payload: { backdrop: string; title: string };
  type: ActionType.ADD_BOARD;
}

export interface SetAddColumn extends Action {
  payload: { boardId: string; title: string };
  type: ActionType.ADD_COLUMN;
}

export type BoardActionType = SetAddBoard | SetAddColumn;
