import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/Icons";
import { Text } from "@/components/ui/Text";
import { cls } from "@/utils/helpers";
import { memo, ReactNode } from "react";
import styles from "./ModalHeader.module.scss";

interface ModalHeaderProps {
  className?: string;
  title?: string;
  addonLeft?: ReactNode;
  onClose?: () => void;
  onHide?: () => void;
}

export const ModalHeader = memo((props: ModalHeaderProps) => {
  const { className, title, addonLeft, onClose, onHide } = props;
  return (
    <div className={cls([styles.ModalHeader, className])}>
      {addonLeft && (
        <Button className={styles.button_back} onClick={onHide}>
          {addonLeft}
        </Button>
      )}
      <Text title={title} bold size={"xs"} className={styles.title_modal} />
      <Button className={styles.button_close} onClick={onClose}>
        <CloseIcon className={styles.icon_close} />
      </Button>
    </div>
  );
});
