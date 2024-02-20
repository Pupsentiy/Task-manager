import { cls } from '@/utils/helpers';
import { memo } from 'react';
import styles from './Text.module.scss';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'xs' | 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToClass: Record<TextSize, string> = {
  xs: styles.size_xs,
  s: styles.size_s,
  m: styles.size_m,
  l: styles.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  xs: 'h4',
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text = memo(
  ({ className, title, text, align = 'left', size = 'm', bold }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    return (
      <div
        className={cls([styles.Text, styles[align], sizeClass, className], {
          [styles.bold]: Boolean(bold),
        })}
      >
        {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    );
  },
);
