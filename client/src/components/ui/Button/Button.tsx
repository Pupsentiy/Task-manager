import { cls } from "@/utils/helpers";
import {
  type ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  type ReactNode,
} from "react";
import styles from "./Button.module.scss";

export type ButtonColor =
  | "primary"
  | "transparent"
  | "dark"
  | "white-semi-transparent";
export type ButtonSize = "xs" | "s" | "l";
export type ButtonRadius = "r1" | "r2" | "r3";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  color?: ButtonColor;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: ButtonSize;
  radius?: ButtonRadius;
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
      addonLeft,
      addonRight,
      size = "l",
      radius = "r1",
      ...otherProps
    } = props;
    return (
      <button
        type={type}
        className={cls(
          [
            styles.Button,
            styles[color],
            styles[size],
            styles[radius],
            className,
          ],
          {
            fullWidth: Boolean(fullWidth),
            disabled: Boolean(disabled),
          },
        )}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}
        {children}
        {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
      </button>
    );
  },
);
