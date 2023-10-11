import { Modal } from "components/ui/Modal/Modal";
import { cls } from "utils/helpers";
import { AddBoardForm } from "./AddBoardForm/AddBoardForm";
import styles from "./AddBoardModal.module.scss";

interface AddBoardModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddBoardModal = ({
  className,
  isOpen,
  onClose,
}: AddBoardModalProps) => {
  return (
    <Modal
      className={cls([styles.AddBoardModal, className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AddBoardForm />
    </Modal>
  );
};
