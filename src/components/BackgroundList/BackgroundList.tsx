import { Text } from "@/components/ui/Text";
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
      <div className={cls([styles.BackdropList, className])}>
        <Text text={"Фон"} size={"xs"} bold />
        <ul>
          {Boolean(backgroundColor) &&
            backgroundColor?.map(({ id, color }) => (
              <BackgroundListItem key={id} color={color} />
            ))}
        </ul>
      </div>
    );
  },
);
