import { BackgroundPicker } from "@/components/BackgroundPicker";
import { ModalHeader } from "@/components/ModalHeader";
import { Modal } from "@/components/ui/Modal";
import { Text } from "@/components/ui/Text";
import { cls } from "@/utils/helpers";
import { memo } from "react";
import { AddBoardForm } from "../AddBoardForm";
import { PresentationBoard } from "../PresentationBoard";
import styles from "./AddBoardModal.module.scss";

interface AddBoardModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  onShowModalBoardBackgroundModal: () => void;
}

export const AddBoardModal = memo(
  ({
    className,
    isOpen,
    onClose,
    onShowModalBoardBackgroundModal,
  }: AddBoardModalProps) => {
    return (
      <Modal
        className={cls([styles.AddBoardModal, className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
      >
        <ModalHeader title={"Создать доску"} onClose={onClose} />
        <div className={styles.wrapper}>
          <PresentationBoard />
          <Text className={styles.label} text={"Фон"} size={"xs"} bold />
          <BackgroundPicker
            onShowModalBoardBackgroundModal={onShowModalBoardBackgroundModal}
          />
          <AddBoardForm onClose={onClose} />
        </div>
      </Modal>
    );
  },
);
