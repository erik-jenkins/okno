import { useContext } from "react";
import { oknoWindowContext } from "./OknoWindow";

interface OknoMaximizeProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoMaximize({
  as,
  children,
  ...rest
}: OknoMaximizeProps) {
  const { okno } = useContext(oknoWindowContext);
  const Component = as || "button";

  function handleClick() {
    console.log(`Maximizing window ${okno.id}`);
  }

  return (
    <Component className="okno-maximize" onClick={handleClick} {...rest}>
      {children}
    </Component>
  );
}
