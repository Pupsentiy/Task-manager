import { memo } from "react";
import { cls } from "utils/helpers";
import styles from "./BoardCardItem.module.scss";

interface BoardCardItemProps {
  className?: string;
}

export const BoardCardItem = memo(({ className }: BoardCardItemProps) => {
  return <div className={cls([styles.BoardCardItem, className])}></div>;
});
