import { Button } from '@/components/ui/Button';
import { CloseIcon } from '@/components/ui/Icons';
import { TextArea } from '@/components/ui/TextArea';
import { addColumnAction } from '@/store/board/boardActions.ts';
import {
  addTitleColumnAction,
  resetStateColumnAction,
} from '@/store/columnCreate/columnCreateAction.ts';
import { cls } from '@/utils/helpers';
import { useAppDispatch, useTypedSelector } from '@/utils/hooks';
import { FormEvent, memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import styles from './AddColumnForm.module.scss';

interface AddColumnFormProps {
  className?: string;
  onHideForm: () => void;
}

export const AddColumnForm = memo(({ className, onHideForm }: AddColumnFormProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { title } = useTypedSelector(state => state.columnCreate);

  const addTitleColumn = useCallback(
    (text: string) => {
      dispatch(addTitleColumnAction(text));
    },
    [dispatch],
  );

  const addColumn = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim().length || !id) return;
    dispatch(addColumnAction(id, title.trim()));
    dispatch(resetStateColumnAction());
    onHideForm();
  };

  return (
    <div className={cls([styles.AddColumnForm, className])}>
      <form action={'?'}>
        <TextArea
          autoFocus
          className={styles.textarea}
          maxLength={512}
          onChange={addTitleColumn}
          placeholder={'Ввести заголовок списка'}
        />
        <div className={styles.wrapper_nav}>
          <Button color={'primary'} onClick={addColumn}>
            Добавить список
          </Button>
          <Button onClick={onHideForm} size={'s'}>
            <CloseIcon className={styles.close_icon} />
          </Button>
        </div>
      </form>
    </div>
  );
});
