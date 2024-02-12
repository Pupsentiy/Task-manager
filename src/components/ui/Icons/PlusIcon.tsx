import { ReactComponent } from "@/assets/svg/plus.svg";
import { type FC, type HTMLAttributes } from "react";

export const PlusIcon: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return <ReactComponent {...props} />;
};
