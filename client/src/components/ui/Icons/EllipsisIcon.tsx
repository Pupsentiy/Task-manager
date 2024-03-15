import ReactComponent from '@/assets/svg/ellipsis.svg';
import { type FC, type HTMLAttributes } from 'react';

export const EllipsisIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};
