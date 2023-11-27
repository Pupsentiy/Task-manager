import { Button } from "@/components/ui/Button";
import { EllipsisIcon } from "@/components/ui/Icons";
import { BackgroundColor } from "@/utils/const/constants";
import { cls } from "@/utils/helpers";
import { BackgroundList } from "../BackgroundList";
import styles from "./BackgroundPicker.module.scss";

interface BackgroundPickerProps {
  className?: string;
  onShowModalBoardBackgroundModal?: () => void;
}

export const BackgroundPicker = ({
  className,
  onShowModalBoardBackgroundModal,
}: BackgroundPickerProps) => {
  // const [backgroundListState, setBackgroundListState] = useState<
  //   BackgroundColors[] | undefined
  // >(BackgroundColor.slice(0, 5));
  //
  // const changeBackgroundList = () => {
  //   setBackgroundListState(
  //     (state) =>
  //       state?.filter((color) => color.color !== BackgroundColor?.[0].color),
  //   );
  // };

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
