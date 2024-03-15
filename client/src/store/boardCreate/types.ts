import { ColumnCreateSchema } from '@/store/columnCreate/types.ts';
import { Action } from 'redux';

export interface BoardCreateSchema {
  backdrop: string;
  column: ColumnCreateSchema[];
  id: null | string;
  title: string;
}

export enum ActionType {
  RESET_STATE = 'RESET_STATE',
  SET_BACKDROP_BOARD = 'SET_BACKDROP_BOARD',
  SET_TITLE_BOARD = 'SET_TITLE_BOARD',
}

export interface SetTitleBoard extends Action {
  payload: string;
  type: ActionType.SET_TITLE_BOARD;
}

export interface SetBackdropBoard extends Action {
  payload: string;
  type: ActionType.SET_BACKDROP_BOARD;
}

export interface ResetStateBoard extends Action {
  type: ActionType.RESET_STATE;
}

export type BoardCreateActionType = ResetStateBoard | SetBackdropBoard | SetTitleBoard;
