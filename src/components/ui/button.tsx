import Link from "next/link";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/animations/magnetic";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  dark?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300";

function variantClasses(variant: Variant, dark: boolean) {
  if (variant === "primary") {
    return dark
      ? "bg-accent text-dark-bg hover:bg-accent-light"
      : "bg-text text-bg hover:bg-accent-dim";
  }
  if (variant === "secondary") {
    return dark
      ? "border border-dark-line text-dark-text hover:border-accent-light"
      : "border border-line text-text hover:border-accent";
  }
  return dark
    ? "text-dark-text hover:text-accent-light"
    : "text-text hover:text-accent-dim";
}

// Internal navigation uses <Link>, which must never be wrapped in <Magnetic>
// (Magnetic's mouse handlers conflict with Link's own click handling) — so
// internal CTAs get a CSS-only hover lift instead of the JS magnetic effect.
export function Button({
  children,
  href,
  variant = "primary",
  dark = false,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    base,
    variantClasses(variant, dark),
    "hover:scale-[1.02] active:scale-[0.98]",
    className
  );

  if (href && href.startsWith("http")) {
    return (
      <Magnetic>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={classes}
        >
          {children}
        </a>
      </Magnetic>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <Magnetic>
      <button type={type} onClick={onClick} className={classes}>
        {children}
      </button>
    </Magnetic>
  );
}
