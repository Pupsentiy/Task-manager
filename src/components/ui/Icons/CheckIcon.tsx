import { ReactComponent } from "@/assets/svg/check.svg";
import { type FC, type HTMLAttributes } from "react";

export const CheckIcon: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return <ReactComponent {...props} />;
};
