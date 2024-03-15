import { ActionType, ModalStateActionType, ModalStateSchema } from './types';

const initialState: ModalStateSchema = {
  addBoardModal: false,
  boardBackgroundModal: false,
};

export const modalStateReducer = (
  state = initialState,
  action: ModalStateActionType,
): ModalStateSchema => {
  switch (action.type) {
    case ActionType.SET_OPEN_ADD_BOARD_MODAL:
      return {
        ...state,
        addBoardModal: true,
      };
    case ActionType.SET_CLOSE_ADD_BOARD_MODAL:
      return {
        ...state,
        addBoardModal: false,
      };
    case ActionType.SET_OPEN_BOARD_BACKGROUND_MODAL:
      return {
        ...state,
        boardBackgroundModal: true,
      };
    case ActionType.SET_CLOSE_BOARD_BACKGROUND_MODAL:
      return {
        ...state,
        boardBackgroundModal: false,
      };
    default:
      return state;
  }
};
