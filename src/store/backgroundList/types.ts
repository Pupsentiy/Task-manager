import { Action } from "redux";

export interface BackgroundColors {
  id: number;
  color: string;
}

export interface BackgroundListSchema {
  backgroundPickerList: BackgroundColors[];
  backgroundModalList: BackgroundColors[];
  backgroundMoreModalLIst: BackgroundColors[];
}

export enum ActionType {
  BACKGROUND_ITEM_REPLACEMENT = "BACKGROUND_ITEM_REPLACEMENT",
  RESET_STATE = "RESET_STATE",
}

export interface SetItemReplacement extends Action {
  type: ActionType.BACKGROUND_ITEM_REPLACEMENT;
  payload: BackgroundColors;
}

export interface ResetStateBackgroundList extends Action {
  type: ActionType.RESET_STATE;
}

export type BackgroundListActionType =
  | SetItemReplacement
  | ResetStateBackgroundList;
