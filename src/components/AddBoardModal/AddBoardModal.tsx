import { BackdropList } from "@/components/BackgroundList";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/Icons";
import { Modal } from "@/components/ui/Modal";
import { Text } from "@/components/ui/Text";
import { cls } from "@/utils/helpers/cls/cls";
import { memo } from "react";
import { AddBoardForm } from "./AddBoardForm";
import styles from "./AddBoardModal.module.scss";

interface AddBoardModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddBoardModal = memo(
  ({ className, isOpen, onClose }: AddBoardModalProps) => {
    return (
      <Modal
        className={cls([styles.AddBoardModal, className])}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className={styles.header}>
          <Text
            title={"Создать доску"}
            bold
            size={"xs"}
            className={styles.title_modal}
          />
          <Button className={styles.button_close} onClick={onClose}>
            <CloseIcon className={styles.icon_close} />
          </Button>
        </div>
        <BackdropList />
        <AddBoardForm onClose={onClose} />
      </Modal>
    );
  },
);
