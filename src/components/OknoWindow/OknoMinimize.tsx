import { useContext } from "react";
import { oknoWindowContext } from "./OknoWindow";

interface OknoMinimizeProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoMinimize({
  as,
  children,
  ...rest
}: OknoMinimizeProps) {
  const { okno } = useContext(oknoWindowContext);
  const Component = as || "button";

  function handleClick() {
    console.log(`Minimizing window ${okno.id}`);
  }

  return (
    <Component className="okno-minimize" onClick={handleClick} {...rest}>
      {children}
    </Component>
  );
}
