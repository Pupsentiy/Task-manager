import { BackgroundList } from "@/components/BackgroundList";
import { ModalHeader } from "@/components/ModalHeader";
import { Modal } from "@/components/ui/Modal";
import { BackgroundColor } from "@/utils/const/constants.ts";
import { cls } from "@/utils/helpers";
import { memo } from "react";
import styles from "./BoardBackgroundModal.module.scss";

interface BoardBackgroundModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const BoardBackgroundModal = memo(
  ({ className, isOpen, onClose }: BoardBackgroundModalProps) => {
    return (
      <Modal
        className={cls([styles.BoardBackgroundModal, className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
        left={200}
        top={300}
      >
        <ModalHeader title={"Фон доски"} onClose={onClose} />
        <BackgroundList backgroundColor={BackgroundColor.slice(0, 9)} />
      </Modal>
    );
  },
);
