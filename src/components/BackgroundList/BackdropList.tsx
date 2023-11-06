import { Button } from "@/components/ui/Button";
import { Ellipsis } from "@/components/ui/Icons";
import { Text } from "@/components/ui/Text";
import { backgroundColor } from "@/utils/const/constants.ts";
import { cls } from "@/utils/helpers/cls/cls.ts";
import { memo } from "react";
import styles from "./BackdropList.module.scss";
import { BackdropListItem } from "./BackgroundListItem/BackdropListItem";

interface BackdropListProps {
  className?: string;
}

export const BackdropList = memo(({ className }: BackdropListProps) => {
  const backgroundSlice = backgroundColor.slice(0, 5);
  return (
    <div className={cls([styles.BackdropList, className])}>
      <Text text={"Фон"} size={"xs"} bold />
      <ul>
        {Boolean(backgroundColor) &&
          backgroundSlice.map(({ id, color }) => (
            <BackdropListItem key={id} color={color} />
          ))}
        <Button className={styles.more} color={"neutral"}>
          <span>
            <Ellipsis />
          </span>
        </Button>
      </ul>
    </div>
  );
});
