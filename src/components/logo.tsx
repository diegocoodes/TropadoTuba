import { cn } from "@/lib/utils";

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="Tropa do Tubarão">
      <svg
        aria-hidden="true"
        className="h-10 w-12 shrink-0"
        viewBox="0 0 52 42"
        fill="none"
      >
        <path d="M4 29C14 26 19 17 24 4c8 7 12 15 11 23 5-3 9-4 13-4-4 9-13 14-24 14C15 37 8 34 4 29Z" fill="#00CFFF" />
        <path d="M6 31c14-2 26-2 40 0" stroke="#F5F7FB" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 32c7-1 15-1 22 0" stroke="#D923A5" strokeWidth="2" strokeLinecap="round" />
      </svg>
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
