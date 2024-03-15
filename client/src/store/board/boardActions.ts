import { ActionType, SetAddBoard, SetAddColumn } from './types.ts';

export const addBoardAction = (title: string, backdrop: string): SetAddBoard => ({
  payload: { backdrop, title },
  type: ActionType.ADD_BOARD,
});

export const addColumnAction = (boardId: string, title: string): SetAddColumn => ({
  payload: { boardId, title },
  type: ActionType.ADD_COLUMN,
});
