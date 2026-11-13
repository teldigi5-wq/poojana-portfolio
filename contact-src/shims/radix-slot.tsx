// Minimal stand-in for @radix-ui/react-slot (the sandbox has no npm access). Same API for `asChild`.
import * as React from "react";

export const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }>(
  ({ children, ...props }, ref) => {
    if (!React.isValidElement(children)) return null;
    const child = children as React.ReactElement<Record<string, unknown>>;
    return React.cloneElement(child, {
      ...props,
      ...(child.props as object),
      className: [props.className, (child.props as { className?: string }).className].filter(Boolean).join(" "),
      ref,
    } as never);
  },
);
Slot.displayName = "Slot";
