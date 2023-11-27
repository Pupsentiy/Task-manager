import { cls } from "@/utils/helpers";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal";
import styles from "./Modal.module.scss";

export type ModalSize = "big" | "small";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size?: ModalSize;
}

const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
    top,
    bottom,
    left,
    right,
    size = "small",
  } = props;
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clearTimeout(timeRef.current as NodeJS.Timeout);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <section
        className={cls([styles.Modal, className], {
          [styles.opened]: Boolean(isOpen),
          [styles.isClosing]: Boolean(isClosing),
        })}
      >
        <div className={styles.overlay} onClick={closeHandler}>
          <div
            className={cls([styles.content, styles[size]])}
            onClick={onContentClick}
            style={{ top: top, bottom: bottom, left: left, right: right }}
          >
            {children}
          </div>
        </div>
      </section>
    </Portal>
  );
};
