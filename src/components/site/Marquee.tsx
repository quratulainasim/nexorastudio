import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  speed = 40,
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div className="marquee-mask relative w-full overflow-hidden">
      <div
        className="flex w-max gap-6"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 gap-6">{children}</div>
        <div aria-hidden className="flex shrink-0 gap-6">{children}</div>
      </div>
    </div>
  );
}
