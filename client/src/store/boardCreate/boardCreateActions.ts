import { ActionType, SetBackdropBoard, SetTitleBoard } from './types';

export const addTitleBoardAction = (title: string): SetTitleBoard => ({
  payload: title,
  type: ActionType.SET_TITLE_BOARD,
});

export const setBackdropBoardAction = (backdrop: string): SetBackdropBoard => ({
  payload: backdrop,
  type: ActionType.SET_BACKDROP_BOARD,
});

export const resetStateBoardAction = () => ({
  type: ActionType.RESET_STATE,
});
