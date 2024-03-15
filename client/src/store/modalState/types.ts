import { Action } from 'redux';

export interface ModalStateSchema {
  addBoardModal: boolean;
  boardBackgroundModal: boolean;
}

export enum ActionType {
  SET_CLOSE_ADD_BOARD_MODAL = 'SET_CLOSE_ADD_BOARD_MODAL',
  SET_CLOSE_BOARD_BACKGROUND_MODAL = 'SET_CLOSE_BOARD_BACKGROUND_MODAL',
  SET_OPEN_ADD_BOARD_MODAL = 'SET_OPEN_ADD_BOARD_MODAL',
  SET_OPEN_BOARD_BACKGROUND_MODAL = 'SET_OPEN_BOARD_BACKGROUND_MODAL',
}

export interface SetOpenAddBoardModal extends Action {
  type: ActionType.SET_OPEN_ADD_BOARD_MODAL;
}

export interface SetCloseAddBoardModal extends Action {
  type: ActionType.SET_CLOSE_ADD_BOARD_MODAL;
}

export interface SetOpenBackgroundModal extends Action {
  type: ActionType.SET_OPEN_BOARD_BACKGROUND_MODAL;
}

export interface SetCloseBackgroundModal extends Action {
  type: ActionType.SET_CLOSE_BOARD_BACKGROUND_MODAL;
}

export type ModalStateActionType =
  | SetCloseAddBoardModal
  | SetCloseBackgroundModal
  | SetOpenAddBoardModal
  | SetOpenBackgroundModal;
