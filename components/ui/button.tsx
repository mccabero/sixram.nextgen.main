import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-slate-900 bg-slate-950 text-white shadow-glow hover:border-cyan-800 hover:bg-cyan-800",
  secondary:
    "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-cyan-300 hover:bg-cyan-50",
  ghost: "border-transparent bg-transparent text-slate-700 hover:bg-slate-100",
  gold:
    "border-amber-600 bg-amber-500 text-white shadow-gold-glow hover:bg-amber-600"
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base"
};

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className
}: Omit<ButtonBaseProps, "children">) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> &
  ButtonBaseProps & {
    ariaLabel?: string;
  };

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ariaLabel,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className={buttonClassName({ variant, size, className })}
      {...props}
    >
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonBaseProps;

export function Button({
  variant,
  size,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName({ variant, size, className })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
