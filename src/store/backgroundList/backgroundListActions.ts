import { ActionType, BackgroundColors, SetItemReplacement } from "./types.ts";

export const setItemReplacement = (
  item: BackgroundColors,
): SetItemReplacement => ({
  type: ActionType.ITEM_REPLACEMENT,
  payload: item,
});
