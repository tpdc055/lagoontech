import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional visual size; accepted by our design, not forwarded to DOM */
  size?: "sm" | "md" | "lg";
  /** Optional visual variant; accepted by our design, not forwarded to DOM */
  variant?: "default" | "outline" | "ghost" | "link" | "secondary" | "destructive";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, size = "md", variant = "default", className = "", ...rest },
    ref
  ) {
    // We’re not enforcing styles here; we just accept the props so TS is happy.
    // If you want to map `size`/`variant` to classes, do it here.
    return (
      <button ref={ref} className={className} {...rest}>
        {children}
      </button>
    );
  }
);
