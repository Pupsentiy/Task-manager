import { cls } from '@/utils/helpers';
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
export type InputColor = 'primary' | 'secondary' | 'tertiary';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  color?: InputColor;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Input = memo((props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const {
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    autofocus,
    color = 'primary',
    addonLeft,
    addonRight,
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
    <div className={cls([styles.Input, className])}>
      {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}
      <input
        className={cls([styles[color]])}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        {...otherProps}
      />
      {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
    </div>
  );
});
