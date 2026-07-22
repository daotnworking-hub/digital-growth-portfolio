import { useEffect, useRef } from 'react';

/**
 * FractureLineSVG — Signature element from wireframe-framework-v3 (Part 3.3)
 *
 * A single SVG lightning-crack path (irregular zigzag) that "draws itself"
 * as the user scrolls into view, via IntersectionObserver.
 *
 * Color gradient: --fl-fire-2 (#FFB020) at top → --fl-bolt-1 (#7CF5FF) at bottom
 * This is the ONLY element intended to be continuously visible — everything
 * else (hover glow, ember particles) is kinetic/transient per the v3 spec.
 *
 * @param {number}  height     Vertical span of the fracture in px (default 180)
 * @param {string}  id         Unique gradient id (must be unique per page instance)
 * @param {number}  segments   Number of zigzag segments (default 7)
 */
export default function FractureLineSVG({ height = 180, id = 'fl-frac', segments = 7 }) {
  const pathRef = useRef(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fl-drawn');
          observer.disconnect(); // draw once
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Build a deterministic zigzag path within a 100-wide viewBox
  const W = 100;
  const H = height;
  const mid = W / 2;

  let d = `M ${mid} 0`;
  for (let i = 1; i <= segments; i++) {
    const y = (i / (segments + 1)) * H;
    // Alternate left/right, amplitude varies to look organic
    const side = i % 2 === 0 ? 1 : -1;
    const amp  = 12 + ((i * 13) % 16); // 12–27px
    const x    = Math.max(6, Math.min(W - 6, mid + side * amp));
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  d += ` L ${mid} ${H}`;

  const gradId = `${id}-grad`;

  return (
    <div
      className="fl-fracture-wrap"
      style={{ height: `${H}px`, width: '100%' }}
      aria-hidden="true"
    >
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FFB020" stopOpacity="1"   />
            <stop offset="45%"  stopColor="#FF5A1F" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7CF5FF" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d={d}
          className="fl-fracture-path"
          stroke={`url(#${gradId})`}
        />
      </svg>
    </div>
  );
}
