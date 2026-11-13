// Minimal stand-in for @radix-ui/react-separator (same props the component uses).
import * as React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical"; decorative?: boolean };

export const Root = React.forwardRef<HTMLDivElement, Props>(
  ({ orientation = "horizontal", decorative = true, ...props }, ref) => (
    <div
      ref={ref}
      {...(decorative ? { role: "none" } : { role: "separator", "aria-orientation": orientation })}
      data-orientation={orientation}
      {...props}
    />
  ),
);
Root.displayName = "Separator";
