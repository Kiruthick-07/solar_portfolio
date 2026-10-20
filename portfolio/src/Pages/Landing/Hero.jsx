import {
  ArrowRight,
  Leaf,
  Play,
  PiggyBank,
  Globe,
} from "lucide-react";
import Navbar from "./Navbar";

/* ── Google Font ── */
if (!document.getElementById("poppins-font")) {
  const link = document.createElement("link");
  link.id = "poppins-font";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const FONT = "'Poppins', system-ui, sans-serif";

function GreenSwoosh() {
  return (
    <svg
      viewBox="0 0 320 18"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        bottom: "-10px",
        left: 0,
        width: "100%",
        height: "14px",
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      <path
        d="M 4 12 Q 160 2 316 12"
        stroke="#2db84b"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <div style={{ fontFamily: FONT, backgroundColor: "#fff", overflowX: "hidden" }}>
      {/* SHARED NAVBAR COMPONENT */}
      <Navbar />

      <section
        style={{
          position: "relative",
          height: "100svh",
          overflow: "hidden",
          backgroundImage: "url('/solar-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* White left gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(245,252,248,1) 0%, rgba(245,252,248,0.97) 18%, rgba(245,252,248,0.88) 32%, rgba(245,252,248,0.55) 48%, rgba(245,252,248,0.10) 65%, transparent 80%)",
            pointerEvents: "none",
          }}
        />

        {/* HERO CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "90%",
            maxWidth: "1400px",
            margin: "0 auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "76px",
            paddingBottom: "70px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ maxWidth: "560px", display: "flex", flexDirection: "column", gap: "0px" }}>
            {/* EYEBROW */}
            <p
              style={{
                margin: "0 0 14px 0",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#2db84b",
                fontFamily: FONT,
              }}
            >
              Clean Energy. Brighter Tomorrow.
            </p>

            {/* HEADING */}
            <h1
              style={{
                margin: 0,
                fontFamily: FONT,
                fontWeight: 600,
                lineHeight: 1.06,
                letterSpacing: "-1.5px",
                color: "#0d1f17",
              }}
            >
              <span style={{ display: "block", fontSize: "clamp(40px, 4.8vw, 68px)" }}>
                Powering
              </span>
              <span style={{ display: "block", fontSize: "clamp(40px, 4.8vw, 68px)", whiteSpace: "nowrap" }}>
                <span style={{ position: "relative", display: "inline-block", color: "#2db84b", paddingBottom: "4px" }}>
                  a Greener
                  <GreenSwoosh />
                </span>
                <span style={{ color: "#0d1f17" }}> Future</span>
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              style={{
                marginTop: "20px",
                marginBottom: "24px",
                maxWidth: "420px",
                fontSize: "14.5px",
                lineHeight: 1.65,
                color: "#3d5446",
                fontFamily: FONT,
                fontWeight: 400,
              }}
            >
              High-performance solar energy solutions for homes,
              businesses and industries. Reduce your electricity bills
              and make a positive impact on the planet.
            </p>

            {/* CTA BUTTONS */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <button
                style={{
                  border: "none",
                  background: "#159447",
                  color: "#fff",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontFamily: FONT,
                  boxShadow: "0 4px 14px rgba(21,148,71,0.25)",
                }}
              >
                Get a Solar Quote <ArrowRight size={17} />
              </button>

              <button
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#0d1f17",
                  padding: "10px 20px 10px 10px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontFamily: FONT,
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    border: "1px solid rgba(0,0,0,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.9)",
                  }}
                >
                  <Play size={13} color="#0d1f17" fill="#0d1f17" />
                </span>
                Watch How It Works
              </button>
            </div>

            {/* FEATURE HIGHLIGHTS */}
            <div
              style={{
                marginTop: "28px",
                display: "flex",
                alignItems: "center",
                gap: "0px",
                maxWidth: "560px",
              }}
            >
              {/* Feature 1 */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  paddingRight: "16px",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "#e2f5e8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <PiggyBank size={22} color="#159447" strokeWidth={1.8} />
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0d1f17",
                    lineHeight: 1.3,
                    fontFamily: FONT,
                  }}
                >
                  Lower<br />Electricity Bills
                </div>
              </div>

              {/* Separator 1 */}
              <div
                style={{
                  width: "1px",
                  height: "70px",
                  background: "rgba(0, 0, 0, 0.12)",
                  margin: "0 12px",
                  flexShrink: 0,
                }}
              />

              {/* Feature 2 */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  paddingLeft: "8px",
                  paddingRight: "16px",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "#e2f5e8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Leaf size={22} color="#159447" strokeWidth={1.8} />
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0d1f17",
                    lineHeight: 1.3,
                    fontFamily: FONT,
                  }}
                >
                  Clean &<br />Renewable Energy
                </div>
              </div>

              {/* Separator 2 */}
              <div
                style={{
                  width: "1px",
                  height: "70px",
                  background: "rgba(0,0,0,0.12)",
                  margin: "0 12px",
                  flexShrink: 0,
                }}
              />

              {/* Feature 3 */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  paddingLeft: "8px",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "#e2f5e8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Globe size={22} color="#159447" strokeWidth={1.8} />
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0d1f17",
                    lineHeight: 1.3,
                    fontFamily: FONT,
                  }}
                >
                  A Greener<br />Planet for Future
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div
          className="scroll-indicator"
          style={{
            position: "absolute",
            zIndex: 15,
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "22px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "#1a3825",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "40px",
              border: "2px solid rgba(26,56,37,0.5)",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "7px",
                borderRadius: "4px",
                background: "#2db84b",
                animation: "scrollDot 1.5s ease-in-out infinite",
              }}
            />
          </div>
          <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", fontFamily: FONT }}>
            SCROLL
          </span>
        </div>

      </section>

      {/* STYLES FOR ANIMATIONS & RESPONSIVENESS */}
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0);    opacity: 1;   }
          50%  { transform: translateY(10px); opacity: 0.3; }
          100% { transform: translateY(0);    opacity: 1;   }
        }
        @media (max-width: 768px) {
          section { background-position: 68% center !important; }
          .scroll-indicator { display: none !important; }
        }
        @media (max-width: 480px) {
          section { background-position: 72% center !important; }
          h1 span { font-size: 44px !important; }
        }
      `}</style>
    </div>
  );
}
