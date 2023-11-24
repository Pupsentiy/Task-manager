import { TaskIcon } from "@/components/ui/Icons";
import { cls } from "@/utils/helpers";
import { useTypedSelector } from "@/utils/hooks";
import { memo } from "react";
import styles from "./PresentationBoard.module.scss";

interface PresentationBoardProps {
  className?: string;
}

export const PresentationBoard = memo(
  ({ className }: PresentationBoardProps) => {
    const backdrop = useTypedSelector((state) => state.boardCreate.backdrop);
    return (
      <div className={cls([styles.PresentationBoard, className])}>
        <div className={styles.wrapper} style={{ background: backdrop }}>
          <TaskIcon />
        </div>
      </div>
    );
  },
);
