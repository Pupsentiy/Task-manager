import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { setBackdropBoardAction } from "@/store/boardCreate/boardCreateActions.ts";
import { cls } from "@/utils/helpers";
import { useAppDispatch, useTypedSelector } from "@/utils/hooks";
import { memo } from "react";
import { BackgroundColors } from "../BackgroundList.tsx";
import styles from "./BackgroundListItem.module.scss";

interface BackdropListItemProps {
  className?: string;
  item: BackgroundColors;
}

export const BackgroundListItem = memo(
  ({ className, item }: BackdropListItemProps) => {
    const dispatch = useAppDispatch();
    const { backdrop } = useTypedSelector((state) => state.boardCreate);

    const addBackdropBoard = () => {
      dispatch(setBackdropBoardAction(item.color));
    };

    return (
      <li className={cls([styles.BackgroundListItem, className])}>
        <Button style={{ background: item.color }} onClick={addBackdropBoard}>
          {backdrop === item.color && (
            <CheckIcon className={styles.iconCheck} />
          )}
        </Button>
      </li>
    );
  },
);
