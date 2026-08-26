import { cn } from "@/lib/utils";

export function WaterAtmosphere({ className }: { className?: string }) {
  return (
    <div className={cn("water-atmosphere", className)} aria-hidden="true">
      <div className="water-caustics" />
      <span className="water-ring water-ring-one" />
      <span className="water-ring water-ring-two" />
      <span className="water-bubble water-bubble-one" />
      <span className="water-bubble water-bubble-two" />
      <span className="water-bubble water-bubble-three" />
      <span className="water-bubble water-bubble-four" />
      <span className="water-drop water-drop-one" />
      <span className="water-drop water-drop-two" />
      <span className="water-drop water-drop-three" />
    </div>
  );
}
