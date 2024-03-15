import ReactComponent from '@/assets/svg/close.svg';
import { type FC, type HTMLAttributes } from 'react';

export const CloseIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};
