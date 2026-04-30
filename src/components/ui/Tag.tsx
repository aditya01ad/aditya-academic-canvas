import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Tag = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border px-3 py-1.5 text-xs text-foreground transition-colors duration-200 hover:border-foreground hover:bg-secondary",
        className,
      )}
      {...props}
    />
  );
};

export default Tag;
