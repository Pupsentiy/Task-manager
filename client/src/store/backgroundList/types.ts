import { Action } from 'redux';

export interface BackgroundColors {
  color: string;
  id: number;
}

export interface BackgroundListSchema {
  backgroundModalList: BackgroundColors[];
  backgroundMoreModalLIst: BackgroundColors[];
  backgroundPickerList: BackgroundColors[];
}

export enum ActionType {
  BACKGROUND_ITEM_REPLACEMENT = 'BACKGROUND_ITEM_REPLACEMENT',
  RESET_STATE = 'RESET_STATE',
}

export interface SetItemReplacement extends Action {
  payload: BackgroundColors;
  type: ActionType.BACKGROUND_ITEM_REPLACEMENT;
}

export interface ResetStateBackgroundList extends Action {
  type: ActionType.RESET_STATE;
}

export type BackgroundListActionType = ResetStateBackgroundList | SetItemReplacement;
