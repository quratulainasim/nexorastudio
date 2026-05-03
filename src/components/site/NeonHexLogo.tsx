/**
 * NeonHexLogo – A glowing neon hexagon with a bold "N" letter.
 * Animated drop-shadow pulses to create the neon-sign effect.
 */
export function NeonHexLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  const hex = size;
  const stroke = Math.max(1.6, size * 0.05);
  const innerPad = size * 0.12;

  return (
    <svg
      width={hex}
      height={hex}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-neon-pulse ${className}`}
      aria-label="Nexora Studio logo"
      role="img"
    >
      {/* Outer glow hex */}
      <polygon
        points="50,3 93,25 93,75 50,97 7,75 7,25"
        fill="none"
        stroke="var(--brand)"
        strokeWidth={stroke}
        strokeLinejoin="round"
        opacity="0.35"
        filter="url(#neon-blur)"
      />
      {/* Main hexagon */}
      <polygon
        points="50,8 88,28 88,72 50,92 12,72 12,28"
        fill="color-mix(in oklab, var(--brand) 8%, transparent)"
        stroke="var(--brand)"
        strokeWidth={stroke * 1.2}
        strokeLinejoin="round"
      />
      {/* Inner subtle hex line */}
      <polygon
        points="50,18 78,33 78,67 50,82 22,67 22,33"
        fill="none"
        stroke="var(--brand)"
        strokeWidth={stroke * 0.5}
        strokeLinejoin="round"
        opacity="0.25"
      />
      {/* "N" letter */}
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif"
        fontWeight="800"
        fontSize="42"
        fill="var(--brand)"
        style={{
          filter: "drop-shadow(0 0 6px var(--brand))",
        }}
      >
        N
      </text>
      {/* Filter definitions for glow */}
      <defs>
        <filter id="neon-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
    </svg>
  );
}
