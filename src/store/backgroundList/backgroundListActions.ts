import { ActionType, BackgroundColors, SetItemReplacement } from "./types.ts";

export const setBackgroundItemReplacementAction = (
  item: BackgroundColors,
): SetItemReplacement => ({
  type: ActionType.BACKGROUND_ITEM_REPLACEMENT,
  payload: item,
});

export const resetStateBackgroundListAction = () => ({
  type: ActionType.RESET_STATE,
});
