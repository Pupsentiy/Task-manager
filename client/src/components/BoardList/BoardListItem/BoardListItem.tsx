import { routes } from '@/app/providers/router';
import { Text } from '@/components/ui/Text';
import { BoardCreateSchema } from '@/store/boardCreate/types.ts';
import { cls } from '@/utils/helpers';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './BoardListItem.module.scss';

interface BoardListItemProps {
  board: BoardCreateSchema;
  boardId: null | string;
  className?: string;
}

export const BoardListItem = memo(({ board, boardId, className }: BoardListItemProps) => {
  if (!boardId) return;

  return (
    <li>
      <Link
        className={cls([styles.BoardListItem, className])}
        style={{ background: board.backdrop }}
        to={routes.getRouteBoardDetails(boardId)}
      >
        <span className={styles.hover} />
        <div className={styles.inner_container_link}>
          <Text bold size={'xs'} title={`${board.title.slice(0, 70)}...`} />
        </div>
      </Link>
    </li>
  );
});
