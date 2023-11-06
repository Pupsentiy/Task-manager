import { ActionTypes, SetBackdropBoard, SetTitleBoard } from "./types";

export const setTitleBoard = (title: string): SetTitleBoard => ({
  type: ActionTypes.SET_TITLE_BOARD,
  payload: title,
});

export const setBackdropBoard = (backdrop: string): SetBackdropBoard => ({
  type: ActionTypes.SET_BACKDROP_BOARD,
  payload: backdrop,
});
