import { cls } from "@/utils/helpers";
import { memo } from "react";
import styles from "./BackgroundList.module.scss";
import { BackgroundListItem } from "./BackgroundListItem/BackgroundListItem.tsx";

export interface BackgroundColors {
  id: number;
  color: string;
}

interface BackdropListProps {
  className?: string;
  backgroundColor?: BackgroundColors[];
}

export const BackgroundList = memo(
  ({ className, backgroundColor }: BackdropListProps) => {
    return (
      <div className={cls([styles.BackgroundList, className])}>
        <ul>
          {Boolean(backgroundColor) &&
            backgroundColor?.map((color) => (
              <BackgroundListItem key={color.color} item={color} />
            ))}
        </ul>
      </div>
    );
  },
);
