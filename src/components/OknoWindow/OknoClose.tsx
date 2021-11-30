import { useContext } from "react";
import { oknoWindowContext } from "./OknoWindow";

interface OknoCloseProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoClose({ as, children, ...rest }: OknoCloseProps) {
  const { okno } = useContext(oknoWindowContext);
  const Component = as || "button";

  function handleClick() {
    console.log(`Closing window ${okno.id}`);
  }

  return (
    <Component className="okno-close" onClick={handleClick} {...rest}>
      {children}
    </Component>
  );
}
