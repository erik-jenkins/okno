import { useContext } from "react";
import { useDraggable } from "@dnd-kit/core";
import { oknoWindowContext } from "./OknoWindow";

interface OknoTitlebarProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoTitlebar({
  as,
  children,
  ...rest
}: OknoTitlebarProps) {
  const { okno } = useContext(oknoWindowContext);
  const { attributes, listeners } = useDraggable({
    id: okno.id,
  });

  const Component = as || "div";
  return (
    <Component
      className="okno-titlebar"
      {...listeners}
      {...attributes}
      {...rest}
    >
      {children}
    </Component>
  );
}
