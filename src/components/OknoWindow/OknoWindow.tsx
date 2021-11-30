/** @jsxImportSource @emotion/react */
import React, { createContext } from "react";
import { css } from "@emotion/react";

import Okno from "lib/Okno";

interface OknoWindowContext {
  okno: Okno;
}

export const oknoWindowContext = createContext({} as OknoWindowContext);

interface OknoWindowProps {
  okno: Okno;
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

const OknoWindowCss = (okno: Okno) => css`
  position: absolute;
  transform: translate3d(${okno.position.x}px, ${okno.position.y}px, 0);
  width: ${okno.dimensions.width}px;
  height: ${okno.dimensions.height}px;
`;

export default function OknoWindow({
  okno,
  as,
  children,
  ...rest
}: OknoWindowProps) {
  const Component = as || "div";
  return (
    <oknoWindowContext.Provider value={{ okno }}>
      <Component className="okno-window" css={OknoWindowCss(okno)} {...rest}>
        {children}
      </Component>
    </oknoWindowContext.Provider>
  );
}
