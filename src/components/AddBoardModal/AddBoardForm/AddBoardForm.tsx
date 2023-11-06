import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { setTitleBoard } from "@/store/boardCreate/boardCreateActions.ts";
import { cls } from "@/utils/helpers/cls/cls.ts";
import { useAppDispatch } from "@/utils/hooks";
import { memo } from "react";
import styles from "./AddBoardForm.module.scss";

interface AddBoardFormProps {
  className?: string;
  onClose: () => void;
}

export const AddBoardForm = memo(({ className }: AddBoardFormProps) => {
  const dispatch = useAppDispatch();
  const addTitleBoard = (text: string) => {
    dispatch(setTitleBoard(text));
  };

  return (
    <div className={cls([styles.AddBoardForm, className])}>
      <form action="" className={styles.form}>
        <label>
          <div className={styles.wrapper_label}>
            <Text text={"Заголовок доски"} size={"xs"} bold />
            <span>*</span>
          </div>
          <Input
            id={"Board title"}
            className={styles.input_name_board}
            onChange={addTitleBoard}
          />
        </label>
        <Button
          type={"submit"}
          fullWidth
          className={styles.create}
          color={"filled"}
        >
          Создать
        </Button>
      </form>
    </div>
  );
});
