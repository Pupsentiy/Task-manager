import { Button } from '@/components/ui/Button';
import { CloseIcon } from '@/components/ui/Icons';
import { Text } from '@/components/ui/Text';
import { cls } from '@/utils/helpers';
import { ReactNode, memo } from 'react';

import styles from './ModalHeader.module.scss';

interface ModalHeaderProps {
  addonLeft?: ReactNode;
  className?: string;
  isVisibleMoreColor?: boolean;
  onClose?: () => void;
  onHide?: () => void;
  title?: string;
}

export const ModalHeader = memo((props: ModalHeaderProps) => {
  const { addonLeft, className, isVisibleMoreColor, onClose, onHide, title } = props;
  return (
    <div className={cls([styles.ModalHeader, className])}>
      {addonLeft && isVisibleMoreColor && (
        <Button className={styles.button_back} onClick={onHide}>
          {addonLeft}
        </Button>
      )}
      <Text bold className={styles.title_modal} size={'xs'} title={title} />
      <Button className={styles.button_close} onClick={onClose} radius={'r2'} size={'xs'}>
        <CloseIcon className={styles.icon_close} />
      </Button>
    </div>
  );
});
