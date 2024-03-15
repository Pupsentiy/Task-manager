import { cls } from '@/utils/helpers';
import { memo } from 'react';

import styles from './Text.module.scss';

export type TextAlign = 'center' | 'left' | 'right';

export type TextSize = 'l' | 'm' | 's' | 'xs';

interface TextProps {
  align?: TextAlign;
  bold?: boolean;
  className?: string;
  size?: TextSize;
  text?: string;
  title?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToClass: Record<TextSize, string> = {
  l: styles.size_l,
  m: styles.size_m,
  s: styles.size_s,
  xs: styles.size_xs,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  l: 'h1',
  m: 'h2',
  s: 'h3',
  xs: 'h4',
};

export const Text = memo(
  ({ align = 'left', bold, className, size = 'm', text, title }: TextProps) => {
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
