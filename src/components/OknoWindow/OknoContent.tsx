interface OknoContentProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoContent({
  as,
  children,
  ...rest
}: OknoContentProps) {
  const Component = as || "div";
  return (
    <Component className="okno-content" {...rest}>
      {children}
    </Component>
  );
}
