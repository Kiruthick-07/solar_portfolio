import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  "/PM_Scheme_1.png",
  "/PM_Scheme_2.png",
  "/TN_Scheme_1.png",
  "/TN_Scheme_2.png",
];

const AUTOPLAY_DELAY = 4000;

export default function Schemes() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % IMAGES.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    setProgress(0);
  }, []);

  /* Progress bar + autoplay */
  useEffect(() => {
    if (isPaused) {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
      return;
    }

    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startRef.current;
      setProgress(Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100));
      if (elapsed < AUTOPLAY_DELAY) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    timerRef.current = setTimeout(next, AUTOPLAY_DELAY);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  }, [active, isPaused, next]);

  return (
    <section
      id="schemes"
      style={{ background: "#fff", padding: "60px 0 60px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Label */}
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <span
          style={{
            display: "inline-block",
            padding: "5px 18px",
            background: "#e8f7ee",
            color: "#159447",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "'Poppins', system-ui, sans-serif",
          }}
        >
          Government Schemes
        </span>
        <h2
          style={{
            margin: "12px 0 0",
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 700,
            color: "#0d1f17",
            letterSpacing: "-0.5px",
            fontFamily: "'Poppins', system-ui, sans-serif",
          }}
        >
          Solar <span style={{ color: "#2db84b" }}>Subsidy Schemes</span>
        </h2>
      </div>

      {/* Slideshow wrapper */}
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 8px 32px rgba(13,31,23,0.10)",
        }}
      >
        {/* Fixed-height image track */}
        <div style={{ position: "relative", height: "420px" }}>
          {IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Scheme ${i + 1}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                opacity: i === active ? 1 : 0,
                transition: "opacity 0.6s ease",
              }}
            />
          ))}

          {/* Prev / Next arrows */}
          {[
            { side: "left",  onClick: prev, icon: <ChevronLeft  size={22} color="#fff" /> },
            { side: "right", onClick: next, icon: <ChevronRight size={22} color="#fff" /> },
          ].map((btn) => (
            <button
              key={btn.side}
              onClick={btn.onClick}
              aria-label={btn.side === "left" ? "Previous" : "Next"}
              style={{
                position: "absolute",
                top: "50%",
                [btn.side]: "14px",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.25)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(21,148,71,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.35)")}
            >
              {btn.icon}
            </button>
          ))}
        </div>

        {/* Line progress indicator */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            padding: "10px 14px",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
          }}
        >
          {IMAGES.map((_, i) => (
            <div
              key={i}
              onClick={() => { setActive(i); setProgress(0); }}
              style={{
                flex: 1,
                height: "3px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.2)",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: "999px",
                  background: "#2db84b",
                  width:
                    i < active
                      ? "100%"
                      : i === active
                      ? `${progress}%`
                      : "0%",
                  transition: i === active ? "none" : "width 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        #schemes button { outline: none; }
        #schemes button:focus-visible { outline: 2px solid #2db84b; outline-offset: 2px; }
      `}</style>
    </section>
  );
}
