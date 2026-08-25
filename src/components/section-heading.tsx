import { MotionReveal } from "@/components/motion-reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  outline,
  description,
  className,
  inverted = false,
}: {
  kicker: string;
  title: string;
  outline?: string;
  description?: string;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <MotionReveal className={cn("mb-12 md:mb-16", className)}>
      <span className="section-kicker">{kicker}</span>
      <h2 className={cn("display-title", inverted && "text-ink")}>
        {title}
        {outline && (
          <>
            <br />
            <span className={cn("outline-text", inverted && "outline-text-dark")}>{outline}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={cn("mt-6 max-w-2xl text-base leading-7 md:text-lg md:leading-8", inverted ? "text-[#526078]" : "text-muted")}>
          {description}
        </p>
      )}
    </MotionReveal>
  );
}
