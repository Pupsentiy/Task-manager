import { cls } from '@/utils/helpers';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useState } from 'react';

import styles from './TextArea.module.scss';

type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'>;

interface TextareaProps extends HTMLTextAreaProps {
  autoFocus?: boolean;
  className?: string;
  maxLength?: number;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

export const TextArea = memo((props: TextareaProps) => {
  const { autoFocus, className, maxLength, onChange, placeholder, value, ...otherProps } = props;
  const [textareaValue, setTextAreaValue] = useState<string>('');

  useEffect(() => {
    // Изменяем размер textarea в зависимости от его содержимого
    adjustTextareaSize();
  }, [textareaValue]);
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
    onChange?.(event.target.value);
  };

  const adjustTextareaSize = () => {
    const textarea = document.getElementById('textArea');

    if (textarea) {
      textarea.style.height = '32px'; // Сначала сбрасываем высоту
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  return (
    <textarea
      autoFocus={autoFocus}
      className={cls([styles.TextArea, className])}
      id={'textArea'}
      maxLength={maxLength}
      onChange={onChangeHandler}
      placeholder={placeholder}
      value={value}
      {...otherProps}
    />
  );
});
