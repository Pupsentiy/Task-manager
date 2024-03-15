import { Button } from '@/components/ui/Button';
import { EllipsisIcon } from '@/components/ui/Icons';
import { Text } from '@/components/ui/Text';
import { ColumnCreateSchema } from '@/store/columnCreate/types.ts';
import { cls } from '@/utils/helpers';
import { memo } from 'react';

import styles from './ColumnListItem.module.scss';

interface ColumnListItemProps {
  className?: string;
  column: ColumnCreateSchema;
}

export const ColumnListItem = memo(({ className, column }: ColumnListItemProps) => {
  return (
    <li className={cls([styles.ColumnListItem, className])}>
      <div className={styles.column}>
        <div className={styles.column_header}>
          <div className={styles.wrapper_title}>
            <Text bold className={styles.title} size={'xs'} title={column.title} />
          </div>
          <Button radius={'r2'} size={'xs'}>
            <span>
              <EllipsisIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
});
