import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  compact = false,
  eager = false,
  className,
}: {
  compact?: boolean;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="Tropa do Tubarão">
      <Image
        src="/images/logo-letra.png.PNG"
        alt=""
        aria-hidden="true"
        width={500}
        height={500}
        sizes="48px"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="size-11 shrink-0 object-contain drop-shadow-[0_0_10px_rgba(217,35,165,0.45)]"
      />
      {!compact && (
        <span className="leading-none">
          <span className="block font-title text-[1.35rem] font-extrabold tracking-[0.045em] text-white">
            TROPA DO
          </span>
          <span className="block font-title text-[1.35rem] font-extrabold tracking-[0.045em] text-cyan">
            TUBARÃO
          </span>
        </span>
      )}
    </div>
  );
}
