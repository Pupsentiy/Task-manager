import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { setBackdropBoardAction } from "@/store/boardCreate/boardCreateActions.ts";
import { cls } from "@/utils/helpers";
import { useAppDispatch, useTypedSelector } from "@/utils/hooks";
import { memo } from "react";
import styles from "./BackgroundListItem.module.scss";

interface BackdropListItemProps {
  className?: string;
  color: string;
}

export const BackgroundListItem = memo(
  ({ className, color }: BackdropListItemProps) => {
    const { backdrop } = useTypedSelector((state) => state.boardCreate);
    const dispatch = useAppDispatch();

    const addBackdropBoard = () => {
      dispatch(setBackdropBoardAction(color));
    };

    return (
      <li className={cls([styles.BackgroundListItem, className])}>
        <Button style={{ background: color }} onClick={addBackdropBoard}>
          {backdrop === color && <CheckIcon />}
        </Button>
      </li>
    );
  },
);
