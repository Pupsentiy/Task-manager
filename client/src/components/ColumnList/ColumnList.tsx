import { AddColumnForm } from '@/components/AddColumnForm';
import { ColumnListItem } from '@/components/ColumnList/ColumnListItem/ColumnListItem.tsx';
import { Button } from '@/components/ui/Button';
import { PlusIcon } from '@/components/ui/Icons';
import { ColumnCreateSchema } from '@/store/columnCreate/types.ts';
import { cls } from '@/utils/helpers';
import { memo, useState } from 'react';

import styles from './ColumnList.module.scss';

interface ColumnListProps {
  className?: string;
  columns: ColumnCreateSchema[] | undefined;
}

export const ColumnList = memo(({ className, columns }: ColumnListProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const onShowForm = () => setShowForm(true);
  const onHideForm = () => setShowForm(false);

  return (
    <ol className={cls([styles.ColumnList, className])}>
      {Boolean(columns) &&
        columns?.map(column => <ColumnListItem column={column} key={column.title} />)}
      <div className={styles.wrapper_button}>
        {!showForm ? (
          <Button
            addonLeft={<PlusIcon className={styles.button_plus} />}
            className={styles.create_column_button}
            color={'white-semi-transparent'}
            onClick={onShowForm}
            radius={'r3'}
          >
            Добавить список
          </Button>
        ) : (
          <AddColumnForm onHideForm={onHideForm} />
        )}
      </div>
    </ol>
  );
});
