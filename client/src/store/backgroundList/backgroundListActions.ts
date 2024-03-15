import { ActionType, BackgroundColors, SetItemReplacement } from './types.ts';

export const setBackgroundItemReplacementAction = (item: BackgroundColors): SetItemReplacement => ({
  payload: item,
  type: ActionType.BACKGROUND_ITEM_REPLACEMENT,
});

export const resetStateBackgroundListAction = () => ({
  type: ActionType.RESET_STATE,
});
