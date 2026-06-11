import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-slate-950 bg-slate-950 text-white shadow-none hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950",
  secondary:
    "border-slate-300 bg-transparent text-slate-950 shadow-none hover:border-slate-950 hover:bg-slate-950 hover:text-white",
  ghost: "border-transparent bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-950",
  gold:
    "border-cyan-300 bg-cyan-300 text-slate-950 shadow-none hover:border-cyan-200 hover:bg-cyan-200"
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
    "inline-flex items-center justify-center gap-2 border font-black uppercase tracking-[0.04em] transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-60",
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
