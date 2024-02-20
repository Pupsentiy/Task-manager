import ReactComponent from '@/assets/svg/tasks.svg';
import { type FC, type HTMLAttributes } from 'react';

export const TaskIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};
