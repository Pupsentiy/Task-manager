import { ActionType, SetBackdropBoard, SetTitleBoard } from "./types";

export const addTitleBoardAction = (title: string): SetTitleBoard => ({
  type: ActionType.SET_TITLE_BOARD,
  payload: title,
});

export const setBackdropBoardAction = (backdrop: string): SetBackdropBoard => ({
  type: ActionType.SET_BACKDROP_BOARD,
  payload: backdrop,
});

export const resetStateAction = () => ({
  type: ActionType.RESET_STATE,
});
