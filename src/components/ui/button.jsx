// src/components/ui/button.jsx
import * as React from "react";
import { Link } from "react-router-dom";

// simple class combiner (keeps your style props intact)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Usage:
 *  <Button to="/dashboard">Go to Dashboard</Button>   // renders <Link>
 *  <Button href="/privacy">Privacy</Button>           // renders <a>
 *  <Button onClick={...}>Click</Button>               // renders <button>
 *  <Button variant="outline" />
 *  <Button variant="ghost" />
 */
export const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      to,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-xl px-5 py-5 text-base font-medium transition " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 " +
      "disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-indigo-600 text-white hover:bg-indigo-700",
      outline: "border border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50",
      ghost: "text-indigo-700 hover:bg-indigo-50",
    };

    const classes = cn(base, variants[variant] || variants.default, className);

    if (to) {
      return (
        <Link ref={ref} to={to} className={classes} {...props}>
          {children}
        </Link>
      );
    }
    if (href) {
      return (
        <a ref={ref} href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
