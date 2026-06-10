import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-cyan-300/40 bg-cyan-300 text-slate-950 shadow-glow hover:bg-cyan-200",
  secondary:
    "border-white/15 bg-white/8 text-white hover:border-cyan-200/40 hover:bg-white/12",
  ghost: "border-transparent bg-transparent text-slate-200 hover:bg-white/8",
  gold:
    "border-amber-200/40 bg-amber-300 text-slate-950 shadow-gold-glow hover:bg-amber-200"
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
