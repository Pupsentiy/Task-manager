import React, { useCallback, useEffect, useRef, useState } from "react";
import { cls } from "utils/helpers";
import { Portal } from "../Portal";
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler],
  );

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timeRef.current as NodeJS.Timeout);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        className={cls([styles.Modal, className], {
          [styles.opened]: Boolean(isOpen),
          [styles.isClosing]: Boolean(isClosing),
        })}
      >
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
