import { Button } from "@/components/ui/Button";
import { setOpenAddBoardModal } from "@/store/modalState/modalStateActions.ts";
import { cls } from "@/utils/helpers";
import { useAppDispatch, useTypedSelector } from "@/utils/hooks";
import { memo, useCallback } from "react";
import styles from "./BoardList.module.scss";
import { BoardListItem } from "./BoardListItem/BoardListItem.tsx";

interface BoardListProps {
  className?: string;
}

export const BoardList = memo(({ className }: BoardListProps) => {
  const dispatch = useAppDispatch();
  const { boards } = useTypedSelector((state) => state.board);

  const onShowModalAddBoard = useCallback(() => {
    dispatch(setOpenAddBoardModal());
  }, [dispatch]);

  return (
    <ul className={cls([styles.BoardList, className])}>
      <li>
        <Button
          className={styles.create_board_button}
          onClick={onShowModalAddBoard}
        >
          Создать доску
        </Button>
      </li>
      {Boolean(boards) &&
        boards.map((board, index) => (
          <BoardListItem key={index} board={board} />
        ))}
    </ul>
  );
});
