import { Button } from '@/components/ui/Button';
import { setOpenAddBoardModal } from '@/store/modalState/modalStateActions.ts';
import { cls } from '@/utils/helpers';
import { useAppDispatch, useTypedSelector } from '@/utils/hooks';
import { memo, useCallback } from 'react';

import styles from './BoardList.module.scss';
import { BoardListItem } from './BoardListItem/BoardListItem.tsx';

interface BoardListProps {
  className?: string;
}

export const BoardList = memo(({ className }: BoardListProps) => {
  const dispatch = useAppDispatch();
  const board = useTypedSelector(state => state.board.board);

  const onShowModalAddBoard = useCallback(() => {
    dispatch(setOpenAddBoardModal());
  }, [dispatch]);

  return (
    <ul className={cls([styles.BoardList, className])}>
      <li>
        <Button className={styles.create_board_button} onClick={onShowModalAddBoard}>
          Создать доску
        </Button>
      </li>
      {Boolean(board) &&
        board.map((board, index) => <BoardListItem board={board} boardId={board.id} key={index} />)}
    </ul>
  );
});
