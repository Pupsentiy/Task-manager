import { cls } from "@/utils/helpers/cls/cls.ts";
import { memo } from "react";
import styles from "./BoardListItem.module.scss";

interface BoardListItemProps {
  className?: string;
}

export const BoardListItem = memo(({ className }: BoardListItemProps) => {
  return <div className={cls([styles.BoardCardItem, className])}></div>;
});
