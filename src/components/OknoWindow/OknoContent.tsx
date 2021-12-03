/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { css } from "@emotion/react";

import { oknoWindowContext } from "./OknoWindow";
import { Dimensions } from "types";
interface OknoContentProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

const OknoContentCss = (tempDimensions: Dimensions) => css`
  height: ${tempDimensions.height}px;
  overflow-y: scroll;
`;

export default function OknoContent({
  as,
  children,
  ...rest
}: OknoContentProps) {
  const { tempDimensions } = useContext(oknoWindowContext);
  const Component = as || "div";
  return (
    <Component
      className="okno-content"
      css={OknoContentCss(tempDimensions)}
      {...rest}
    >
      {children}
    </Component>
  );
}
