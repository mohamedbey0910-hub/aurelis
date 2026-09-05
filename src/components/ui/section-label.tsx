import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("section-label", dark && "on-dark", className)}>
      {children}
    </span>
  );
}
