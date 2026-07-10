import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border border-navy-900/15 bg-white px-3 py-2 text-sm text-navy-900 shadow-sm transition-colors placeholder:text-navy-900/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sapphire-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15 dark:bg-navy-800 dark:text-white dark:placeholder:text-white/35",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
