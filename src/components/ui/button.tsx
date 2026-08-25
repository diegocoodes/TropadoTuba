import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm border text-sm font-extrabold uppercase tracking-[0.08em] transition-[background-color,color,border-color,transform] duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        default:
          "border-blue bg-blue px-6 text-white hover:border-cyan hover:bg-cyan hover:text-ink",
        outline:
          "border-white/40 bg-transparent px-6 text-white hover:border-white hover:bg-white hover:text-ink",
        ghost:
          "border-transparent bg-transparent px-4 text-white hover:bg-white/10",
        light:
          "border-white bg-white px-6 text-ink hover:border-cyan hover:bg-cyan",
      },
      size: {
        default: "h-12",
        sm: "h-10 min-h-10 px-4 text-xs",
        lg: "h-14 min-h-14 px-7 text-sm",
        icon: "size-12 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
