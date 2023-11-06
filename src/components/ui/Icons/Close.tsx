import { ReactComponent } from "@/assets/svg/close.svg";
import { type FC, type HTMLAttributes } from "react";

export const Close: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return <ReactComponent {...props} />;
};
