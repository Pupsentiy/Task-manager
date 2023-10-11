import { Input } from "components/ui/Input";
import { Text } from "components/ui/Text";
import { memo } from "react";
import { cls } from "utils/helpers";
import styles from "./AddBoardForm.module.scss";

interface AddBoardFormProps {
  className?: string;
}

export const AddBoardForm = memo(({ className }: AddBoardFormProps) => {
  return (
    <div className={cls([styles.AddBoardForm, className])}>
      <Text text={"Создать доску"} bold size={"s"} />
      <Input />
    </div>
  );
});
