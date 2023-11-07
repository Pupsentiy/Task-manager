import { Text } from "@/components/ui/Text";
import { BoardCreateSchema } from "@/store/boardCreate/types.ts";
import { cls } from "@/utils/helpers/cls/cls.ts";
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./BoardListItem.module.scss";

interface BoardListItemProps {
  className?: string;
  board: BoardCreateSchema;
}

export const BoardListItem = memo(
  ({ className, board }: BoardListItemProps) => {
    return (
      <li>
        <Link
          className={cls([styles.BoardCardItem, className])}
          style={{ background: board.backdrop }}
          to={""}
        >
          <span className={styles.hover} />
          <div className={styles.inner_container_link}>
            <Text title={board.title} size={"xs"} bold />
          </div>
        </Link>
      </li>
    );
  },
);
