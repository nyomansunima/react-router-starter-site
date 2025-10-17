import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { mergeClass } from "@shared/libs";
import type * as React from "react";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = ({
  ref,
  className,
  sideOffset = 4,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof TooltipPrimitive.Content
  > | null>;
}) => (
  <TooltipPrimitive.Content
    className={mergeClass(
      "z-50 overflow-hidden rounded-2xl bg-surface p-2 px-1 text-foreground/70 text-xs",
      className
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  >
    <span className="rounded-xl border-2 border-border border-dashed px-3 py-1.5">
      {children}
    </span>
  </TooltipPrimitive.Content>
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
