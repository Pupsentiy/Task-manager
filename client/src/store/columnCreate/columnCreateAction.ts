import { ActionType, SetTitleColumn } from './types';

export const addTitleColumnAction = (title: string): SetTitleColumn => ({
  payload: title,
  type: ActionType.SET_TITLE_COLUMN,
});

export const resetStateColumnAction = () => ({
  type: ActionType.RESET_STATE,
});
