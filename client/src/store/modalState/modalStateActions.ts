import { ActionType } from './types.ts';

export const setOpenAddBoardModal = () => ({
  type: ActionType.SET_OPEN_ADD_BOARD_MODAL,
});

export const setCloseAddBoardModal = () => ({
  type: ActionType.SET_CLOSE_ADD_BOARD_MODAL,
});
export const setOpenBackgroundModal = () => ({
  type: ActionType.SET_OPEN_BOARD_BACKGROUND_MODAL,
});

export const setCloseBackgroundModal = () => ({
  type: ActionType.SET_CLOSE_BOARD_BACKGROUND_MODAL,
});
