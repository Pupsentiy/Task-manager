import { cls } from "@/utils/helpers/cls/cls.ts";
import {
  type ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  type ReactNode,
} from "react";
import styles from "./Button.module.scss";

export type ButtonColor = "normal" | "neutral" | "filled";

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
      fullWidth,
      color = "normal",
      ...otherProps
    } = props;
    return (
      <button
        type={type}
        className={cls([styles.Button, className, styles[color]], {
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
