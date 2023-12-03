import { BackgroundList } from "@/components/BackgroundList";
import { ModalHeader } from "@/components/ModalHeader";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import { Modal } from "@/components/ui/Modal";
import { Text } from "@/components/ui/Text";
import { setCloseBackgroundModal } from "@/store/modalState/modalStateActions";
import { BackgroundColor } from "@/utils/const/constants";
import { cls } from "@/utils/helpers";
import { useAppDispatch, useTypedSelector } from "@/utils/hooks";
import { Fragment, memo, useCallback, useState } from "react";
import styles from "./BoardBackgroundModal.module.scss";

interface BoardBackgroundModalProps {
  className?: string;
}

export const BoardBackgroundModal = memo(
  ({ className }: BoardBackgroundModalProps) => {
    const dispatch = useAppDispatch();
    const { boardBackgroundModal } = useTypedSelector(
      (state) => state.modalState,
    );
    const [isVisibleMoreColor, setIsVisibleMoreColor] =
      useState<boolean>(false);

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
        onClose={onCloseBoardBackgroundModal}
        lazy
        top={325}
        right={500}
      >
        <ModalHeader
          title={"Фон доски"}
          onClose={onCloseBoardBackgroundModal}
          onHide={hideColors}
          addonLeft={<ArrowLeftIcon />}
          isVisibleMoreColor={isVisibleMoreColor}
        />
        <div className={styles.wrapper}>
          <div className={styles.wrapper_label}>
            {!isVisibleMoreColor && (
              <Fragment>
                <Text
                  className={styles.title}
                  text={"Цвета"}
                  size={"xs"}
                  bold
                />

                <Button
                  className={styles.detailed}
                  color={"dark"}
                  onClick={onShowMoreColor}
                >
                  Подробнее
                </Button>
              </Fragment>
            )}
          </div>
          <BackgroundList
            className={styles.backgroundList}
            backgroundColor={BackgroundColor.slice(0, 9)}
          />
          {isVisibleMoreColor && (
            <Fragment>
              <hr />
              <BackgroundList
                className={styles.backgroundList}
                backgroundColor={BackgroundColor.slice(9, 18)}
              />
            </Fragment>
          )}
        </div>
      </Modal>
    );
  },
);
