import { useId } from "react";

/** Decorative mathematical illustration. No runtime dependencies or canvas APIs. */
export default function MathVisual() {
  const id = useId().replace(/:/g, "");
  const points = Array.from({ length: 13 }, (_, i) => i);
  return (
    <div className="math-visual relative isolate overflow-hidden" aria-hidden="true">
      <div className="math-visual-grid absolute inset-0" />
      <svg viewBox="0 0 560 520" className="relative z-10 h-full w-full" fill="none" role="presentation">
        <defs>
          <linearGradient id={`line-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4A6A63" stopOpacity=".22"/>
            <stop offset=".55" stopColor="#4A6A63" stopOpacity=".9"/>
            <stop offset="1" stopColor="#CB875E" stopOpacity=".5"/>
          </linearGradient>
        </defs>
        <circle cx="280" cy="260" r="168" stroke="currentColor" strokeOpacity=".13" />
        <circle cx="280" cy="260" r="124" stroke="currentColor" strokeOpacity=".12" strokeDasharray="3 8" />
        <circle cx="280" cy="260" r="82" stroke="currentColor" strokeOpacity=".12" />
        <path d="M112 260h336M280 92v336" stroke="currentColor" strokeOpacity=".1" />
        {points.map((i) => {
          const angle = i * Math.PI * 2 / points.length - Math.PI / 2;
          const x = 280 + Math.cos(angle) * 168;
          const y = 260 + Math.sin(angle) * 168;
          return (
            <g key={i}>
              <line x1="280" y1="260" x2={x} y2={y} stroke={`url(#line-${id})`} strokeWidth=".9" opacity={i % 3 === 0 ? ".78" : ".24"}/>
              <circle cx={x} cy={y} r={i % 4 === 0 ? 5 : 3} fill={i % 4 === 0 ? "#C58660" : "#61827A"}/>
              <line x1={x} y1={y} x2={280 + Math.cos(angle + 2 * Math.PI / 13 * 5) * 168} y2={260 + Math.sin(angle + 2 * Math.PI / 13 * 5) * 168} stroke={`url(#line-${id})`} strokeWidth=".85" opacity=".38"/>
            </g>
          );
        })}
        <circle cx="280" cy="260" r="12" fill="#4B6D65" />
        <circle cx="280" cy="260" r="4" fill="#F4F0E8" />
        <text x="55" y="68" className="visual-label">G = (V, E)</text>
        <text x="365" y="463" className="visual-label">λ₁ ≥ λ₂ ≥ ⋯ ≥ λₙ</text>
        <text x="48" y="463" className="visual-label">A(G)</text>
      </svg>
      <span className="math-visual-caption">STRUCTURE / SPECTRUM / SYSTEMS</span>
    </div>
  );
}
