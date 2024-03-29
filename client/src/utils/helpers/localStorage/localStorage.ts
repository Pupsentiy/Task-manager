import { BoardSchema } from '@/store/board/types.ts';

export const loadState = (stateName: string) => {
  try {
    const serializedState = localStorage.getItem(stateName);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: { board: BoardSchema }, stateName: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (err) {
    throw new Error("Can't save changes in local storage");
  }
};
