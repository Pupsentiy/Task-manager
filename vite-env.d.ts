/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import {compose} from "redux";

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
