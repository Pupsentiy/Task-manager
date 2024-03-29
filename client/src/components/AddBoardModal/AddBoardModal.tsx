import { BackgroundPicker } from '@/components/BackgroundPicker';
import { ModalHeader } from '@/components/ModalHeader';
import { Modal } from '@/components/ui/Modal';
import { Text } from '@/components/ui/Text';
import { resetStateBackgroundListAction } from '@/store/backgroundList/backgroundListActions.ts';
import { resetStateBoardAction } from '@/store/boardCreate/boardCreateActions.ts';
import { setCloseAddBoardModal } from '@/store/modalState/modalStateActions.ts';
import { cls } from '@/utils/helpers';
import { useAppDispatch, useTypedSelector } from '@/utils/hooks';
import { memo, useCallback } from 'react';

import { AddBoardForm } from '../AddBoardForm';
import { PresentationBoard } from '../PresentationBoard';
import styles from './AddBoardModal.module.scss';

interface AddBoardModalProps {
  className?: string;
}

export const AddBoardModal = memo(({ className }: AddBoardModalProps) => {
  const dispatch = useAppDispatch();
  const { addBoardModal } = useTypedSelector(state => state.modalState);

  const onCloseModalAddBoard = useCallback(() => {
    dispatch(setCloseAddBoardModal());
    dispatch(resetStateBoardAction());
    dispatch(resetStateBackgroundListAction());
  }, [dispatch]);

  return (
    <Modal
      className={cls([styles.AddBoardModal, className])}
      isOpen={addBoardModal}
      lazy
      onClose={onCloseModalAddBoard}
    >
      <ModalHeader onClose={onCloseModalAddBoard} title={'Создать доску'} />
      <div className={styles.wrapper}>
        <PresentationBoard />
        <Text bold className={styles.label} size={'xs'} text={'Фон'} />
        <BackgroundPicker />
        <AddBoardForm onClose={onCloseModalAddBoard} />
      </div>
    </Modal>
  );
});
