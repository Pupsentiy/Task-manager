import { memo } from "react";
import { cls } from "utils/helpers";
import styles from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
  return (
    <div className={cls([styles.Header, className])}>
      {/*<Text title={"Доски"} bold />*/}
    </div>
  );
});
