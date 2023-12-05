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
  ITEM_REPLACEMENT = "ITEM_REPLACEMENT",
}

export interface SetItemReplacement extends Action {
  type: ActionType.ITEM_REPLACEMENT;
  payload: BackgroundColors;
}

export type BackgroundListActionType = SetItemReplacement;
