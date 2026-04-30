import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "muted" | "accent";
}

const Badge = ({ tone = "muted", className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border px-2 py-1 text-[10px] uppercase tracking-widest",
        tone === "accent" ? "text-accent" : "text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
};

export default Badge;
