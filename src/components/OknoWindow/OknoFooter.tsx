interface OknoFooterProps {
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

export default function OknoFooter({ as, children, ...rest }: OknoFooterProps) {
  const Component = as || "footer";
  return (
    <Component className="okno-footer" {...rest}>
      {children}
    </Component>
  );
}
