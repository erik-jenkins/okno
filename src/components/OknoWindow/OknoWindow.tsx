import React, { createContext } from "react";

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

export default function OknoWindow({
  okno,
  as,
  children,
  ...rest
}: OknoWindowProps) {
  const Component = as || "div";
  return (
    <oknoWindowContext.Provider value={{ okno }}>
      <Component className="okno-window" {...rest}>
        {children}
      </Component>
    </oknoWindowContext.Provider>
  );
}
