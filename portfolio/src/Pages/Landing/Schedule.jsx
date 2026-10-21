import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

/* ── Load Poppins from Google Fonts ── */
if (!document.getElementById("poppins-font")) {
  const link = document.createElement("link");
  link.id = "poppins-font";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
  document.head.appendChild(link);
}

const FONT = "'Poppins', system-ui, sans-serif";

export default function Schedule() {
  const [quoteHovered, setQuoteHovered] = useState(false);
  const [callHovered, setCallHovered] = useState(false);

  return (
    <section
      id="schedule"
      style={{
        width: "100%",
        padding: "60px 2%",
        boxSizing: "border-box",
        fontFamily: FONT,
        backgroundColor: "#f5fcf8",
      }}
    >
      {/* ── Card wrapper ── */}
      <div
        style={{
          position: "relative",
          maxWidth: "1400px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 12px 48px rgba(0,0,0,0.22)",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/schedule_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark overlay — matches the screenshot's semi-opaque blue-grey tint */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,25,50,0.72) 0%, rgba(20,35,60,0.65) 50%, rgba(10,20,40,0.58) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "56px 32px 52px",
          }}
        >
          {/* Heading */}
          <h2
            className="schedule-heading"
            style={{
              margin: "0 0 18px",
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: "clamp(26px, 3.8vw, 44px)",
              letterSpacing: "-0.8px",
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            Schedule a&nbsp;
            <span style={{ color: "#ffffff" }}>Free consultation</span>
          </h2>

          {/* Description */}
          <p
            style={{
              margin: "0 0 36px",
              maxWidth: "520px",
              fontSize: "clamp(13px, 1.4vw, 15.5px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.78)",
              fontFamily: FONT,
              fontWeight: 400,
            }}
          >
            Connect with our solar experts for personalized guidance and advice,
            tailored to your specific energy needs. No pressure—book your
            consultation today,
          </p>

          {/* CTA buttons */}
          <div
            className="schedule-btns"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Get a quote */}
            <button
              id="schedule-get-quote"
              onMouseEnter={() => setQuoteHovered(true)}
              onMouseLeave={() => setQuoteHovered(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "13px 28px",
                borderRadius: "50px",
                border: "none",
                background: quoteHovered ? "#1a40b0" : "#2a4fd6",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: FONT,
                cursor: "pointer",
                letterSpacing: "0.1px",
                transition:
                  "background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
                transform: quoteHovered ? "translateY(-2px)" : "translateY(0)",
                boxShadow: quoteHovered
                  ? "0 8px 28px rgba(42,79,214,0.50)"
                  : "0 4px 16px rgba(42,79,214,0.35)",
              }}
            >
              Get a quote
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>

            {/* Call us Now */}
            <button
              id="schedule-call-now"
              onMouseEnter={() => setCallHovered(true)}
              onMouseLeave={() => setCallHovered(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "13px 28px",
                borderRadius: "50px",
                border: "none",
                background: callHovered ? "#d4620a" : "#f07520",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: FONT,
                cursor: "pointer",
                letterSpacing: "0.1px",
                transition:
                  "background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
                transform: callHovered ? "translateY(-2px)" : "translateY(0)",
                boxShadow: callHovered
                  ? "0 8px 28px rgba(240,117,32,0.55)"
                  : "0 4px 16px rgba(240,117,32,0.38)",
              }}
            >
              Call us Now
              <Phone size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 600px) {
          #schedule {
            padding: 36px 4% !important;
          }
          .schedule-heading {
            font-size: 24px !important;
          }
          .schedule-btns {
            flex-direction: column !important;
            width: 100%;
          }
          .schedule-btns button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
