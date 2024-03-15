import { BackgroundListSchema } from '@/store/backgroundList/types.ts';
import { BoardSchema } from '@/store/board/types';
import { BoardCreateSchema } from '@/store/boardCreate/types.ts';
import { ColumnCreateSchema } from '@/store/columnCreate/types.ts';
import { ModalStateSchema } from '@/store/modalState/types.ts';

export interface StateSchema {
  backgroundList: BackgroundListSchema;
  board: BoardSchema;
  boardCreate: BoardCreateSchema;
  columnCreate: ColumnCreateSchema;
  modalState: ModalStateSchema;
}
