import { cls } from '@/utils/helpers';
import { type ChangeEvent, type SelectHTMLAttributes } from 'react';

import styles from './Select.module.scss';

type HTMLInputProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>;

interface SelectProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const Select = (props: SelectProps) => {
  const { children, className, onChange, value, ...otherProps } = props;

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
