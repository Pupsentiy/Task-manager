import { Button } from "@/components/ui/Button";
import { EllipsisIcon } from "@/components/ui/Icons";
import { setOpenBackgroundModal } from "@/store/modalState/modalStateActions";
import { BackgroundColor } from "@/utils/const/constants";
import { cls } from "@/utils/helpers";
import { useAppDispatch } from "@/utils/hooks";
import { useCallback } from "react";
import { BackgroundList } from "../BackgroundList";
import styles from "./BackgroundPicker.module.scss";

interface BackgroundPickerProps {
  className?: string;
}

export const BackgroundPicker = ({ className }: BackgroundPickerProps) => {
  const dispatch = useAppDispatch();

  const onShowModalBoardBackgroundModal = useCallback(() => {
    dispatch(setOpenBackgroundModal());
  }, [dispatch]);

  return (
    <div className={cls([styles.BackgroundPicker, className])}>
      <div className={styles.wrapper}>
        <BackgroundList backgroundColor={BackgroundColor.slice(0, 5)} />
        <Button
          className={styles.more}
          color={"dark"}
          onClick={onShowModalBoardBackgroundModal}
        >
          <span>
            <EllipsisIcon />
          </span>
        </Button>
      </div>
    </div>
  );
};
