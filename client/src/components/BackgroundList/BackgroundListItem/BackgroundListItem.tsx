import { Button } from '@/components/ui/Button';
import { CheckIcon } from '@/components/ui/Icons';
import { setBackgroundItemReplacementAction } from '@/store/backgroundList/backgroundListActions.ts';
import { BackgroundColors } from '@/store/backgroundList/types';
import { setBackdropBoardAction } from '@/store/boardCreate/boardCreateActions';
import { cls } from '@/utils/helpers';
import { useAppDispatch, useTypedSelector } from '@/utils/hooks';
import { memo } from 'react';

import styles from './BackgroundListItem.module.scss';

interface BackgroundListItemProps {
  className?: string;
  item: BackgroundColors;
}

export const BackgroundListItem = memo(({ className, item }: BackgroundListItemProps) => {
  const dispatch = useAppDispatch();
  const { backdrop } = useTypedSelector(state => state.boardCreate);

  const addBackdropBoard = () => {
    dispatch(setBackdropBoardAction(item.color));
    dispatch(setBackgroundItemReplacementAction(item));
  };

  return (
    <li className={cls([styles.BackgroundListItem, className])}>
      <Button onClick={addBackdropBoard} style={{ background: item.color }}>
        {backdrop === item.color && <CheckIcon className={styles.iconCheck} />}
      </Button>
    </li>
  );
});
