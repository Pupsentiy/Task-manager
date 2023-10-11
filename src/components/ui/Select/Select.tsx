import { type ChangeEvent, type SelectHTMLAttributes } from "react";
import { cls } from "utils/helpers";
import styles from "./Select.module.scss";

type HTMLInputProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "value" | "onChange"
>;

interface SelectProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  const { className, children, value, onChange, ...otherProps } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <select
      className={cls([styles.Select, className])}
      onChange={onChangeHandler}
      value={value}
      {...otherProps}
    >
      {children}
    </select>
  );
};
