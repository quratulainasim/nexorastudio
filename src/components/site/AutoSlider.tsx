import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Single-card auto-sliding carousel.
 * - Shows ONE slide at a time
 * - Auto-advances every `interval` ms
 * - `direction` controls slide animation direction
 */
export function AutoSlider({
  items,
  renderItem,
  interval = 3500,
  direction = "left",
}: {
  items: ReadonlyArray<unknown>;
  renderItem: (item: any, index: number) => ReactNode;
  interval?: number;
  direction?: "left" | "right";
}) {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
      setAnimKey((k) => k + 1);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  const go = (delta: number) => {
    setIndex((i) => (i + delta + items.length) % items.length);
    setAnimKey((k) => k + 1);
  };

  const animClass = direction === "left" ? "animate-slide-in-left" : "animate-slide-in-right";

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl">
        <div key={animKey} className={animClass}>
          {renderItem(items[index], index)}
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => go(-1)}
        className="absolute -left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/80 backdrop-blur transition hover:border-primary hover:text-primary md:-left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => go(1)}
        className="absolute -right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/80 backdrop-blur transition hover:border-primary hover:text-primary md:-right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              setIndex(i);
              setAnimKey((k) => k + 1);
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-gradient-brand" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
