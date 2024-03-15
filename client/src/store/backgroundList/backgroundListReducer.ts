import { BackgroundColor } from '@/utils/const/constants.ts';

import { ActionType, BackgroundListActionType, BackgroundListSchema } from './types.ts';

const initialState: BackgroundListSchema = {
  backgroundModalList: [...BackgroundColor.slice(0, 9)],
  backgroundMoreModalLIst: [...BackgroundColor.slice(9, 18)],
  backgroundPickerList: [...BackgroundColor.slice(0, 5)],
};

export const backgroundListReducer = (
  state = initialState,
  action: BackgroundListActionType,
): BackgroundListSchema => {
  switch (action.type) {
    case ActionType.BACKGROUND_ITEM_REPLACEMENT: {
      const list = [...state.backgroundPickerList];
      state.backgroundPickerList.indexOf(action.payload) === -1 && list.shift();
      return {
        ...state,
        backgroundPickerList:
          state.backgroundPickerList.indexOf(action.payload) === -1
            ? [action.payload, ...list]
            : state.backgroundPickerList,
      };
    }
    case ActionType.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
