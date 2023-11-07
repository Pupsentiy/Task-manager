import { Button } from "@/components/ui/Button";
import { EllipsisIcon } from "@/components/ui/Icons";
import { Text } from "@/components/ui/Text";
import { BackgroundColor } from "@/utils/const/constants.ts";
import { cls } from "@/utils/helpers/cls/cls.ts";
import { memo } from "react";
import styles from "./BackdropList.module.scss";
import { BackdropListItem } from "./BackgroundListItem/BackdropListItem";

interface BackdropListProps {
  className?: string;
}

export const BackdropList = memo(({ className }: BackdropListProps) => {
  const backgroundSlice = BackgroundColor.slice(0, 5);
  return (
    <div className={cls([styles.BackdropList, className])}>
      <Text text={"Фон"} size={"xs"} bold />
      <ul>
        {Boolean(BackgroundColor) &&
          backgroundSlice.map(({ id, color }) => (
            <BackdropListItem key={id} color={color} />
          ))}
        <Button className={styles.more} color={"neutral"}>
          <span>
            <EllipsisIcon />
          </span>
        </Button>
      </ul>
    </div>
  );
});
