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
  const Component = as || "div";
  return (
    <Component className="okno-titlebar" {...rest}>
      {children}
    </Component>
  );
}
