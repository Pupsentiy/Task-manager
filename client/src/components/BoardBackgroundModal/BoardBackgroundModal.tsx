import { BackgroundList } from '@/components/BackgroundList';
import { ModalHeader } from '@/components/ModalHeader';
import { Button } from '@/components/ui/Button';
import { ArrowLeftIcon } from '@/components/ui/Icons';
import { Modal } from '@/components/ui/Modal';
import { Text } from '@/components/ui/Text';
import { setCloseBackgroundModal } from '@/store/modalState/modalStateActions';
import { cls } from '@/utils/helpers';
import { useAppDispatch, useTypedSelector } from '@/utils/hooks';
import { Fragment, memo, useCallback, useState } from 'react';

import styles from './BoardBackgroundModal.module.scss';

interface BoardBackgroundModalProps {
  className?: string;
}

export const BoardBackgroundModal = memo(({ className }: BoardBackgroundModalProps) => {
  const dispatch = useAppDispatch();
  const { boardBackgroundModal } = useTypedSelector(state => state.modalState);
  const { backgroundModalList, backgroundMoreModalLIst } = useTypedSelector(
    state => state.backgroundList,
  );

  const [isVisibleMoreColor, setIsVisibleMoreColor] = useState<boolean>(false);

  const onShowMoreColor = () => {
    setIsVisibleMoreColor(true);
  };

  const hideColors = useCallback(() => {
    setIsVisibleMoreColor(false);
  }, []);

  const onCloseBoardBackgroundModal = useCallback(() => {
    dispatch(setCloseBackgroundModal());
    setIsVisibleMoreColor(false);
  }, [dispatch]);

  return (
    <Modal
      className={cls([styles.BoardBackgroundModal, className])}
      isOpen={boardBackgroundModal}
      lazy
      onClose={onCloseBoardBackgroundModal}
      right={500}
      top={325}
    >
      <ModalHeader
        addonLeft={<ArrowLeftIcon />}
        isVisibleMoreColor={isVisibleMoreColor}
        onClose={onCloseBoardBackgroundModal}
        onHide={hideColors}
        title={'Фон доски'}
      />
      <div className={styles.wrapper}>
        <div className={styles.wrapper_label}>
          {!isVisibleMoreColor && (
            <Fragment>
              <Text bold className={styles.title} size={'xs'} text={'Цвета'} />

              <Button className={styles.detailed} color={'dark'} onClick={onShowMoreColor}>
                Подробнее
              </Button>
            </Fragment>
          )}
        </div>
        <BackgroundList backgroundColor={backgroundModalList} className={styles.backgroundList} />
        {isVisibleMoreColor && (
          <Fragment>
            <hr />
            <BackgroundList
              backgroundColor={backgroundMoreModalLIst}
              className={styles.backgroundList}
            />
          </Fragment>
        )}
      </div>
    </Modal>
  );
});
