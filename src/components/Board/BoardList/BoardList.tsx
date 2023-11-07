import { BoardListItem } from "@/components/Board/BoardList/BoardListItem/BoardListItem.tsx";
import { Button } from "@/components/ui/Button";
import { cls } from "@/utils/helpers/cls/cls.ts";
import { useTypedSelector } from "@/utils/hooks";
import { memo } from "react";
import styles from "./BoardList.module.scss";

interface BoardListProps {
  className?: string;
  onShowModal: () => void;
}

export const BoardList = memo(({ className, onShowModal }: BoardListProps) => {
  const { boards } = useTypedSelector((state) => state.board);
  console.log(boards);
  return (
    <ul className={cls([styles.BoardList, className])}>
      <li>
        <Button className={styles.create_board_button} onClick={onShowModal}>
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
