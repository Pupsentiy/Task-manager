import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import styles from './Button.module.scss'
import { cls } from 'utils/helpers'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    disabled,
    type = 'button',
    ...otherProps
  } = props
  return (
      <button
          type={type}
          className={cls([styles.Button, className])}
          disabled={disabled}
          {...otherProps}
      >
        {children}
      </button>
  )
}
