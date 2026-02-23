import * as React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | "sun";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-sky-medium text-white hover:bg-sky-dark shadow-md shadow-sky-100",
      outline: "border-2 border-sky-100 bg-white hover:bg-sky-50 text-sky-dark",
      ghost: "hover:bg-sky-50 text-sky-dark",
      secondary: "bg-sky-light/20 text-sky-dark hover:bg-sky-light/30",
      destructive: "bg-rose-400 text-white hover:bg-rose-500 shadow-md shadow-rose-100",
      sun: "bg-sun-yellow text-slate-800 hover:bg-[#F9C93C] shadow-md shadow-amber-100 font-bold",
    };

    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-2xl px-4 text-xs",
      lg: "h-14 rounded-[2rem] px-10 text-lg",
      icon: "h-11 w-11",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 disabled:pointer-events-none disabled:opacity-50",
          variants[variant as keyof typeof variants],
          sizes[size as keyof typeof sizes],
          className
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
