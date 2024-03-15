import { memo } from 'react';

import styles from './LogoIcon.module.scss';

export const LogoIcon = memo(() => (
  <div className={styles.square_logo}>
    <span className={styles.logo_line_one}></span>
    <span className={styles.logo_line_two}></span>
  </div>
));
