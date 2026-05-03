import { useState } from "react";

export function HangingSign({ text = "Open for Projects" }: { text?: string }) {
  const [bumped, setBumped] = useState(0);
  return (
    <div className="relative mx-auto flex w-fit flex-col items-center select-none">
      {/* Mounting bar */}
      <div className="relative h-2 w-48 rounded-full bg-gradient-to-b from-primary/40 to-primary/10 shadow-inner" />
      {/* Swinging assembly */}
      <div
        onMouseEnter={() => setBumped((n) => n + 1)}
        key={bumped}
        className="swing-origin animate-swing hover:animate-swing-strong"
      >
        {/* Two ropes */}
        <div className="relative mx-auto h-12 w-44">
          <span className="absolute left-3 top-0 h-12 w-px bg-primary/40" />
          <span className="absolute right-3 top-0 h-12 w-px bg-primary/40" />
          <span className="absolute left-2 top-0 grid h-2 w-2 place-items-center rounded-full bg-primary/60" />
          <span className="absolute right-2 top-0 grid h-2 w-2 place-items-center rounded-full bg-primary/60" />
        </div>
        {/* Sign board */}
        <div className="relative -mt-2 rounded-2xl border border-primary/30 bg-gradient-brand px-8 py-4 shadow-neon">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
          <p className="relative text-center font-display text-base font-bold tracking-wide text-primary-foreground">
            ✦ {text} ✦
          </p>
        </div>
      </div>
    </div>
  );
}
