import * as React from "react";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({ children, ...props }, ref) {
    return (
      <span ref={ref} {...props}>
        {children}
      </span>
    );
  }
);
