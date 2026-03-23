import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-orange focus:ring-4 focus:ring-orange/10",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
