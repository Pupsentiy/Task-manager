import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Text } from '@/components/ui/Text';
import { resetStateBackgroundListAction } from '@/store/backgroundList/backgroundListActions.ts';
import { addBoardAction } from '@/store/board/boardActions.ts';
import {
  addTitleBoardAction,
  resetStateBoardAction,
} from '@/store/boardCreate/boardCreateActions.ts';
import { cls } from '@/utils/helpers';
import { useAppDispatch, useTypedSelector } from '@/utils/hooks';
import { FormEvent, memo, useCallback } from 'react';

import styles from './AddBoardForm.module.scss';

interface AddBoardFormProps {
  className?: string;
  onClose: () => void;
}

export const AddBoardForm = memo(({ className, onClose }: AddBoardFormProps) => {
  const dispatch = useAppDispatch();
  const { backdrop, title } = useTypedSelector(state => state.boardCreate);

  const addTitleBoard = useCallback(
    (text: string) => {
      dispatch(addTitleBoardAction(text));
    },
    [dispatch],
  );

  const addBoard = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim().length) return;
    dispatch(addBoardAction(title.trim(), backdrop));
    dispatch(resetStateBoardAction());
    dispatch(resetStateBackgroundListAction());
    onClose?.();
  };
  return (
    <div className={cls([styles.AddBoardForm, className])}>
      <form action={'?'} className={styles.form}>
        <label>
          <div className={styles.wrapper_label}>
            <Text bold size={'xs'} text={'Заголовок доски'} />
            <span>*</span>
          </div>
          <Input
            autofocus={!title}
            className={styles.input_name_board}
            id={'Board title'}
            onChange={addTitleBoard}
            value={title}
          />
        </label>
        <Button
          className={cls([styles.create])}
          color={'primary'}
          disabled={!title}
          fullWidth
          onClick={addBoard}
          type={'submit'}
        >
          Создать
        </Button>
      </form>
    </div>
  );
});
