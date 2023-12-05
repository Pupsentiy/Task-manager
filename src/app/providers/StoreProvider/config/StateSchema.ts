import { BackgroundListSchema } from "@/store/backgroundList/types.ts";
import { BoardSchema } from "@/store/board/types";
import { BoardCreateSchema } from "@/store/boardCreate/types.ts";
import { ModalStateSchema } from "@/store/modalState/types.ts";

export interface StateSchema {
  board: BoardSchema;
  boardCreate: BoardCreateSchema;
  modalState: ModalStateSchema;
  backgroundList: BackgroundListSchema;
}
