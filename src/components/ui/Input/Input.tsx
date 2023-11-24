import { cls } from "@/utils/helpers";
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from "react";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const {
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      className={cls([styles.Input, className])}
      ref={ref}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
});
