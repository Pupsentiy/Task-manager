import { cls } from '@/utils/helpers';
import { type ButtonHTMLAttributes, ForwardedRef, type ReactNode, forwardRef } from 'react';

import styles from './Button.module.scss';

export type ButtonColor = 'dark' | 'primary' | 'transparent' | 'white-semi-transparent';
export type ButtonSize = 'l' | 's' | 'xs';
export type ButtonRadius = 'r1' | 'r2' | 'r3';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  children?: ReactNode;
  className?: string;
  color?: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?: ButtonRadius;
  size?: ButtonSize;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    addonLeft,
    addonRight,
    children,
    className,
    color = 'transparent',
    disabled,
    fullWidth,
    radius = 'r1',
    size = 'l',
    type = 'button',
    ...otherProps
  } = props;
  return (
    <button
      className={cls([styles.Button, styles[color], styles[size], styles[radius], className], {
        disabled: Boolean(disabled),
        fullWidth: Boolean(fullWidth),
      })}
      disabled={disabled}
      type={type}
      {...otherProps}
      ref={ref}
    >
      {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
    </button>
  );
});
