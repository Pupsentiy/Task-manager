import { ActionType, SetAddBoard } from "./types.ts";

export const addBoardAction = (
  title: string,
  backdrop: string,
): SetAddBoard => ({
  type: ActionType.ADD_BOARD,
  payload: { title, backdrop },
});
