interface OknoResizeProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoResize({ as, children, ...rest }: OknoResizeProps) {
  const Component = as || "div";
  return (
    <Component className="okno-resize" {...rest}>
      {children}
    </Component>
  );
}
