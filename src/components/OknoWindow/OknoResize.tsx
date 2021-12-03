import { useContext } from "react";
import { useDraggable } from "@dnd-kit/core";
import { oknoWindowContext } from "./OknoWindow";

interface OknoResizeProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoResize({ as, children, ...rest }: OknoResizeProps) {
  const { okno } = useContext(oknoWindowContext);
  const { attributes, listeners } = useDraggable({
    id: `okno.resize.${okno.id}`,
  });

  const Component = as || "div";
  return (
    <Component className="okno-resize" {...listeners} {...attributes} {...rest}>
      {children}
    </Component>
  );
}
