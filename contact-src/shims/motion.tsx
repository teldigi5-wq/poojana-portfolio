// A small `motion/react` stand-in: initial -> whileInView with a CSS transition (the `motion` package is not installable offline).
// Supports exactly what the section uses: opacity, x, y, viewport.once and transition { duration, delay, ease }.
import * as React from "react";

type Vals = { opacity?: number; x?: number; y?: number };
type MotionProps = {
  initial?: Vals;
  whileInView?: Vals;
  viewport?: { once?: boolean };
  transition?: { duration?: number; delay?: number; ease?: readonly number[] };
};

const tf = (v: Vals) => `translate3d(${v.x ?? 0}px, ${v.y ?? 0}px, 0)`;

function make<K extends "div" | "h2" | "p" | "a">(tag: K) {
  const C = React.forwardRef<HTMLElement, MotionProps & React.HTMLAttributes<HTMLElement> & Record<string, unknown>>(
    ({ initial, whileInView, viewport, transition, style, ...rest }, fwd) => {
      const inner = React.useRef<HTMLElement | null>(null);
      const [shown, setShown] = React.useState(false);
      const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
      React.useEffect(() => {
        const el = inner.current;
        if (!el || reduce || typeof IntersectionObserver === "undefined") { setShown(true); return; }
        const io = new IntersectionObserver(([e]) => {
          if (e.isIntersecting) { setShown(true); if (viewport?.once) io.disconnect(); }
          else if (!viewport?.once) setShown(false);
        }, { threshold: 0.15 });
        io.observe(el);
        return () => io.disconnect();
      }, [reduce, viewport?.once]);
      const from = initial ?? {}, to = whileInView ?? {};
      const cur = shown || reduce ? to : from;
      const t = transition ?? {};
      const e = t.ease ?? [0.25, 0.1, 0.25, 1];
      const ease = `cubic-bezier(${e.join(",")})`;
      const st: React.CSSProperties = {
        ...style,
        opacity: cur.opacity ?? 1,
        transform: tf(cur),
        transition: `opacity ${t.duration ?? 0.5}s ${ease} ${t.delay ?? 0}s, transform ${t.duration ?? 0.5}s ${ease} ${t.delay ?? 0}s`,
      };
      return React.createElement(tag, {
        ...rest,
        style: st,
        ref: (n: HTMLElement | null) => {
          inner.current = n;
          if (typeof fwd === "function") fwd(n); else if (fwd) (fwd as React.MutableRefObject<HTMLElement | null>).current = n;
        },
      });
    },
  );
  return C;
}

export const motion = { div: make("div"), h2: make("h2"), p: make("p"), a: make("a") };
