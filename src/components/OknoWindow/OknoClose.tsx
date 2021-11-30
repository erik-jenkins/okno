import { useContext } from "react";

import useOknoManager from "hooks/useOknoManager";
import { oknoWindowContext } from "./OknoWindow";

interface OknoCloseProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoClose({ as, children, ...rest }: OknoCloseProps) {
  const { okno } = useContext(oknoWindowContext);
  const { remove } = useOknoManager();

  function handleClick() {
    remove(okno.id);
  }

  const Component = as || "button";
  return (
    <Component className="okno-close" onClick={handleClick} {...rest}>
      {children}
    </Component>
  );
}
