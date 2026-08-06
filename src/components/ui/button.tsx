import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    
    const compClassName = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-primary-foreground hover:bg-primary/90":
          variant === "default",
        "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground":
          variant === "outline",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "text-primary underline-offset-4 hover:underline": variant === "link",
        "h-10 px-6 py-2": size === "default",
        "h-9 rounded-md px-3": size === "sm",
        "h-12 rounded-md px-8 text-base": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    );

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<any>;
      const { children, ...restProps } = props;
      return React.cloneElement(child, {
        className: cn(compClassName, child.props.className),
        ...restProps
      });
    }

    return (
      <button
        ref={ref}
        className={compClassName}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
