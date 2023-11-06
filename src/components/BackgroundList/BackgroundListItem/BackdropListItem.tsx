import { Button } from "@/components/ui/Button";
import { setBackdropBoard } from "@/store/boardCreate/boardCreateActions.ts";
import { cls } from "@/utils/helpers/cls/cls.ts";
import { useAppDispatch } from "@/utils/hooks";
import { memo } from "react";
import styles from "./BackdropListItem.module.scss";

interface BackdropListItemProps {
  className?: string;
  color: string;
}

export const BackdropListItem = memo(
  ({ className, color }: BackdropListItemProps) => {
    const dispatch = useAppDispatch();

    const addBackdropBoard = () => {
      dispatch(setBackdropBoard(color));
    };

    return (
      <li className={cls([styles.BackdropListItem, className])}>
        <Button style={{ background: color }} onClick={addBackdropBoard} />
      </li>
    );
  },
);
