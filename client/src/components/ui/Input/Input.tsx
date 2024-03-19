import { Text } from '@/components/ui/Text';
import { cls } from '@/utils/helpers';
import { type ChangeEvent, type InputHTMLAttributes, ReactNode, forwardRef } from 'react';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;
export type InputColor = 'primary' | 'secondary' | 'tertiary';

interface InputProps extends HTMLInputProps {
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  autofocus?: boolean;
  className?: string;
  color?: InputColor;
  error?: string;
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  // const inputRef = useRef<HTMLInputElement>(null);
  const {
    addonLeft,
    addonRight,
    className,
    color = 'primary',
    error,
    label,
    onChange,
    placeholder,
    type = 'text',
    value,
    ...otherProps
  } = props;

  // useEffect(() => {
  //   if (autofocus) {
  //     inputRef.current?.focus();
  //   }
  // }, [autofocus]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };
  const input = (
    <div className={cls([styles.Input, className])}>
      {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}
      <input
        className={cls([styles[color]])}
        onChange={onChangeHandler}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
        {...otherProps}
      />
      {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
    </div>
  );

  if (error || label) {
    return (
      <div className={styles.wrapper}>
        <Text size={'m'} text={label} />
        {input}
        <Text className={styles.input_error} size={'xs'} text={error} />
      </div>
    );
  }

  return <div className={styles.wrapper}>{input}</div>;
});
