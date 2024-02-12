import { getRouteBoardDetails } from "@/app/providers/router/config/router.ts";
import { Text } from "@/components/ui/Text";
import { BoardCreateSchema } from "@/store/boardCreate/types.ts";
import { cls } from "@/utils/helpers";
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./BoardListItem.module.scss";

interface BoardListItemProps {
  className?: string;
  board: BoardCreateSchema;
  boardId: string | null;
}

export const BoardListItem = memo(
  ({ className, board, boardId }: BoardListItemProps) => {
    if (!boardId) return;

    return (
      <li>
        <Link
          className={cls([styles.BoardListItem, className])}
          style={{ background: board.backdrop }}
          to={getRouteBoardDetails(boardId)}
        >
          <span className={styles.hover} />
          <div className={styles.inner_container_link}>
            <Text title={`${board.title.slice(0, 70)}...`} size={"xs"} bold />
          </div>
        </Link>
      </li>
    );
  },
);
