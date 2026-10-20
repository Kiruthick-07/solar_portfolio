import { useEffect, useRef, useState } from "react";
import {
  Award,
  Users,
  Zap,
  Leaf,
} from "lucide-react";

// Parses "25,000+" → { target: 25000, suffix: "+", format }
// Parses "100K+"   → { target: 100,   suffix: "K+", format }
function parseValue(str) {
  const match = str.match(/^([\d,]+)(K?)(\+?)$/);
  if (!match) return { target: 0, suffix: str, format: (n) => n };

  const raw = parseInt(match[1].replace(/,/g, ""), 10);
  const kSuffix = match[2];
  const plusSuffix = match[3];
  const suffix = kSuffix + plusSuffix;

  const hasCommas = match[1].includes(",");
  const format = (n) =>
    hasCommas ? n.toLocaleString("en-US") : n.toString();

  return { target: raw, suffix, format };
}

// Counts from 0 → target over `duration` ms with ease-out cubic
function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = null;
    let raf;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

// Individual animated stat card
function StatCard({ stat, isLast, active }) {
  const { target, suffix, format } = parseValue(stat.value);
  const count = useCountUp(target, 1800, active);
  const Icon = stat.icon;

  return (
    <div
      className="status-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "15px 20px",
        borderRight: !isLast ? "1px solid #E1EAE1" : "none",
        transition: "transform 0.3s ease",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "72px",
          height: "72px",
          marginBottom: "18px",
          borderRadius: "50%",
          backgroundColor: "rgba(32, 163, 74, 0.09)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={34} strokeWidth={1.8} color="#199B43" />
      </div>

      {/* Animated number */}
      <h3
        style={{
          margin: "0 0 10px",
          color: "#102D25",
          fontSize: "clamp(25px, 2.5vw, 38px)",
          fontWeight: 600,
          letterSpacing: "-1.2px",
          lineHeight: 1.2,
        }}
      >
        {format(count)}{suffix}
      </h3>

      {/* Label */}
      <p
        style={{
          margin: 0,
          color: "#65716B",
          fontSize: "15px",
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

const StatusSection = () => {
  const stats = [
    { icon: Award, value: "10+",     label: "Years of Experience"    },
    { icon: Users, value: "25,000+", label: "Happy Customers"        },
    { icon: Zap,   value: "100K+",   label: "kWh Generated Annually" },
    { icon: Leaf,  value: "500+",    label: "Projects Completed"     },
  ];

  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  // Fire animation once when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        padding: "28px 5% 28px",
        backgroundColor: "#FBFDF9",
        backgroundImage: "url('/Status_Bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Inter, system-ui, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Section heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "20px",
              color: "#65716B",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
            }}
          >
            <span
              style={{
                width: "35px",
                height: "2px",
                backgroundColor: "#20A34A",
              }}
            />
            OUR IMPACT
            <span
              style={{
                width: "35px",
                height: "2px",
                backgroundColor: "#20A34A",
              }}
            />
          </div>

        </div>

        {/* Statistics grid */}
        <div
          className="status-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            alignItems: "stretch",
          }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isLast={index === stats.length - 1}
              active={animated}
            />
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          .status-card:hover {
            transform: translateY(-5px);
          }

          @media (max-width: 900px) {
            .status-grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr)) !important;
              row-gap: 35px;
            }

            .status-card:nth-child(2) {
              border-right: none !important;
            }

            .status-card:nth-child(3) {
              border-right: 1px solid #E1EAE1 !important;
            }
          }

          @media (max-width: 600px) {
            #impact {
              padding: 20px 5% 20px !important;
              background-position: center !important;
            }

            .status-heading {
              letter-spacing: -1px !important;
            }

            .status-grid {
              row-gap: 28px !important;
            }

            .status-card {
              padding: 12px 8px !important;
            }

            .status-card > div:first-child {
              width: 58px !important;
              height: 58px !important;
              margin-bottom: 14px !important;
            }

            .status-card > div:first-child svg {
              width: 27px !important;
              height: 27px !important;
            }

            .status-card h3 {
              font-size: 27px !important;
              letter-spacing: -0.8px !important;
            }

            .status-card p {
              font-size: 12px !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .status-card {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default StatusSection;