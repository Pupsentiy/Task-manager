import { BackgroundColors } from '@/store/backgroundList/types';
import { cls } from '@/utils/helpers';
import { memo } from 'react';

import styles from './BackgroundList.module.scss';
import { BackgroundListItem } from './BackgroundListItem/BackgroundListItem';

interface BackdropListProps {
  backgroundColor?: BackgroundColors[];
  className?: string;
}

export const BackgroundList = memo(({ backgroundColor, className }: BackdropListProps) => {
  return (
    <div className={cls([styles.BackgroundList, className])}>
      <ul>
        {Boolean(backgroundColor) &&
          backgroundColor?.map(color => <BackgroundListItem item={color} key={color.color} />)}
      </ul>
    </div>
  );
});
