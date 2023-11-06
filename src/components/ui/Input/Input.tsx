import { cls } from "@/utils/helpers/cls/cls.ts";
import { type ChangeEvent, type InputHTMLAttributes, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const { className, type = "text", value, onChange, ...otherProps } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      className={cls([className])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
});
