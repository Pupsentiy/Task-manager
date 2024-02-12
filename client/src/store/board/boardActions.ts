import { ActionType, SetAddBoard, SetAddColumn } from "./types.ts";

export const addBoardAction = (
  title: string,
  backdrop: string,
): SetAddBoard => ({
  type: ActionType.ADD_BOARD,
  payload: { title, backdrop },
});

export const addColumnAction = (
  boardId: string,
  title: string,
): SetAddColumn => ({
  type: ActionType.ADD_COLUMN,
  payload: { boardId, title },
});
