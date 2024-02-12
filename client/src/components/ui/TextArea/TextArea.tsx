import { cls } from "@/utils/helpers";
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useState,
} from "react";
import styles from "./TextArea.module.scss";

type HTMLTextAreaProps = Omit<
  InputHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange"
>;

interface TextareaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  maxLength?: number;
}

export const TextArea = memo((props: TextareaProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    autoFocus,
    maxLength,
    ...otherProps
  } = props;
  const [textareaValue, setTextAreaValue] = useState<string>("");

  useEffect(() => {
    // Изменяем размер textarea в зависимости от его содержимого
    adjustTextareaSize();
  }, [textareaValue]);
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
    onChange?.(event.target.value);
  };

  const adjustTextareaSize = () => {
    const textarea = document.getElementById("textArea");

    if (textarea) {
      textarea.style.height = "32px"; // Сначала сбрасываем высоту
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <textarea
      className={cls([styles.TextArea, className])}
      id={"textArea"}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      autoFocus={autoFocus}
      maxLength={maxLength}
      {...otherProps}
    />
  );
});
