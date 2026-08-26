import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative isolate inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-none border text-sm font-extrabold uppercase tracking-[0.1em] shadow-[0_0_0_transparent] outline-none transition-[background-color,color,border-color,box-shadow,transform] duration-300 before:pointer-events-none before:absolute before:inset-y-0 before:-left-10 before:w-5 before:-skew-x-12 before:bg-white/60 before:opacity-70 before:blur-[1px] before:transition-transform before:duration-500 hover:before:translate-x-[280px] focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&>svg]:relative [&>svg]:z-10 [&>svg]:shrink-0 [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-0.5",
  {
    variants: {
      variant: {
        default:
          "border-cyan bg-cyan px-6 text-ink shadow-[4px_4px_0_#d923a5] hover:-translate-y-0.5 hover:border-white hover:bg-white hover:shadow-[6px_6px_0_#d923a5]",
        outline:
          "border-white/45 bg-ink/20 px-6 text-white shadow-[4px_4px_0_rgba(0,207,255,0.28)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan hover:text-ink hover:shadow-[6px_6px_0_#d923a5]",
        ghost:
          "border-transparent bg-transparent px-4 text-white before:hidden hover:border-white/15 hover:bg-white/10 hover:text-cyan",
        light:
          "border-white bg-white px-6 text-ink shadow-[4px_4px_0_#00cfff] hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan hover:shadow-[6px_6px_0_#d923a5]",
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
