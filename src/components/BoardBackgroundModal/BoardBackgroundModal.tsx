import { BackgroundList } from "@/components/BackgroundList";
import { ModalHeader } from "@/components/ModalHeader";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon } from "@/components/ui/Icons/ArrowLeftIcon.tsx";
import { Modal } from "@/components/ui/Modal";
import { Text } from "@/components/ui/Text";
import { BackgroundColor } from "@/utils/const/constants.ts";
import { cls } from "@/utils/helpers";
import { Fragment, memo, useCallback, useState } from "react";
import styles from "./BoardBackgroundModal.module.scss";

interface BoardBackgroundModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const BoardBackgroundModal = memo(
  ({ className, isOpen, onClose }: BoardBackgroundModalProps) => {
    const [isVisibleMoreColor, setIsVisibleMoreColor] =
      useState<boolean>(false);

    const onShowMoreColor = () => {
      setIsVisibleMoreColor(true);
    };

    const hideColors = useCallback(() => {
      setIsVisibleMoreColor(false);
    }, []);

    return (
      <Modal
        className={cls([styles.BoardBackgroundModal, className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
        top={325}
        right={500}
      >
        <ModalHeader
          title={"Фон доски"}
          onClose={onClose}
          onHide={hideColors}
          addonLeft={<ArrowLeftIcon />}
        />
        <div className={styles.wrapper}>
          <div className={styles.wrapper_label}>
            <Text className={styles.title} text={"Цвета"} size={"xs"} bold />
            <Button
              className={styles.detailed}
              color={"dark"}
              onClick={onShowMoreColor}
            >
              Подробнее
            </Button>
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
