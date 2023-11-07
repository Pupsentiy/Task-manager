import { BoardSchema } from "@/store/board/types";
import { BoardCreateSchema } from "@/store/boardCreate/types.ts";

export interface StateSchema {
  board: BoardSchema;
  boardCreate: BoardCreateSchema;
}
