import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/Icons";
import { Text } from "@/components/ui/Text";
import { cls } from "@/utils/helpers";
import styles from "./ModalHeader.module.scss";

interface ModalHeaderProps {
  className?: string;
  title?: string;
  onClose?: () => void;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { className, title, onClose } = props;
  return (
    <div className={cls([styles.ModalHeader, className])}>
      <Text title={title} bold size={"xs"} className={styles.title_modal} />
      <Button className={styles.button_close} onClick={onClose}>
        <CloseIcon className={styles.icon_close} />
      </Button>
    </div>
  );
};
