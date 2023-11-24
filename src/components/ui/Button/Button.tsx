import { cls } from "@/utils/helpers";
import {
  type ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  type ReactNode,
} from "react";
import styles from "./Button.module.scss";

export type ButtonColor = "primary" | "transparent" | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  color?: ButtonColor;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      disabled,
      type = "button",
      color = "transparent",
      fullWidth,
      ...otherProps
    } = props;
    return (
      <button
        type={type}
        className={cls([styles.Button, styles[color], className], {
          fullWidth: Boolean(fullWidth),
          disabled: Boolean(disabled),
        })}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
