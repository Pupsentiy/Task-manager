import { memo } from "react";
import { cls } from "utils/helpers";
import { Button } from "../ui/Button";
import styles from "./BoardList.module.scss";

interface BoardListProps {
  className?: string;
  onShowModal: () => void;
}

export const BoardList = memo(({ className, onShowModal }: BoardListProps) => {
  return (
    <div className={cls([styles.BoardList, className])}>
      <ul>
        <li>
          <Button className={styles.create_board_button} onClick={onShowModal}>
            Создать доску
          </Button>
        </li>
      </ul>
    </div>
  );
});
