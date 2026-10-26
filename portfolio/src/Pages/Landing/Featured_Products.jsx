import { useState } from "react";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";

const FONT = "Inter, system-ui, sans-serif";
const GREEN = "#1A9E47";
const GREEN_DARK = "#102D25";
const GREEN_LIGHT = "#2db84b";
const GREEN_BORDER = "#E5EDE5";

/* ── Product Data ── */
const FEATURED = [
  {
    id: 1,
    name: "Monocrystalline Solar Panel",
    model: "SunPro 550W",
    rating: 4.9,
    reviews: 1284,
    price: "₹18,500",
    oldPrice: "₹22,000",
    image: "/solar-panel.png",
    highlights: ["22.8% efficiency", "25-year warranty", "Anti-reflective coating"],
    category: "Solar Panels",
  },
  {
    id: 2,
    name: "Hybrid Solar Inverter",
    model: "PowerMax 5kW",
    rating: 4.8,
    reviews: 876,
    price: "₹42,000",
    oldPrice: "₹50,000",
    image: "/solar-inverter.png",
    highlights: ["Grid + off-grid mode", "MPPT technology", "Wi-Fi monitoring"],
    category: "Inverters",
  },
  {
    id: 3,
    name: "LiFePO4 Solar Battery",
    model: "StorePlus 200Ah",
    rating: 4.7,
    reviews: 652,
    price: "₹55,000",
    oldPrice: "₹65,000",
    image: "/solar-battery.png",
    highlights: ["6000+ charge cycles", "BMS protection", "10-year warranty"],
    category: "Batteries",
  },
  {
    id: 4,
    name: "Galvanised Mounting Structure",
    model: "FixPro 4-Panel",
    rating: 4.6,
    reviews: 430,
    price: "₹8,200",
    oldPrice: "₹10,500",
    image: "/mounting-structure.png",
    highlights: ["Wind load: 150 km/h", "Hot-dip galvanised", "Tool-free assembly"],
    category: "Structures",
  },
];

const useWindowWidth = () => {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => setW(window.innerWidth));
  }
  return w;
};

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          fill={s <= Math.round(rating) ? "#f59e0b" : "none"}
          color={s <= Math.round(rating) ? "#f59e0b" : "#d1d5db"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ProductCard({ product, isMobile }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "18px",
        border: `2px solid ${hovered ? GREEN : GREEN_BORDER}`,
        boxShadow: hovered
          ? "0 12px 36px rgba(26,158,71,0.14)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.28s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          background: hovered ? "#E8F5E9" : "#F4F8F4",
          height: isMobile ? "180px" : "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "background 0.28s ease",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "85%",
            height: "85%",
            objectFit: "contain",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "18px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Category */}
        <span
          style={{
            fontSize: "10.5px",
            fontWeight: 600,
            color: GREEN,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "5px",
          }}
        >
          {product.category}
        </span>

        {/* Name + model */}
        <h3
          style={{
            margin: "0 0 4px",
            fontSize: isMobile ? "15px" : "16px",
            fontWeight: 700,
            color: GREEN_DARK,
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>
        <span
          style={{
            fontSize: "12px",
            color: "#6b8877",
            marginBottom: "10px",
            fontWeight: 500,
          }}
        >
          {product.model}
        </span>

        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
          <StarRating rating={product.rating} />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#374151" }}>
            {product.rating}
          </span>
          <span style={{ fontSize: "11.5px", color: "#9ca3af" }}>
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Highlights */}
        <ul style={{ margin: "0 0 16px", padding: 0, listStyle: "none", flex: 1 }}>
          {product.highlights.map((h) => (
            <li
              key={h}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "12.5px",
                color: "#3d5446",
                marginBottom: "5px",
              }}
            >
              <ShieldCheck size={13} color={GREEN} strokeWidth={2} style={{ flexShrink: 0 }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Price row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "14px",
            borderTop: `1px solid ${GREEN_BORDER}`,
          }}
        >
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: GREEN_DARK,
                lineHeight: 1.1,
                letterSpacing: "-0.4px",
              }}
            >
              {product.price}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                textDecoration: "line-through",
                marginTop: "1px",
              }}
            >
              {product.oldPrice}
            </div>
          </div>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "9px 16px",
              borderRadius: "10px",
              border: "none",
              background: GREEN,
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT,
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = GREEN_DARK;
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = GREEN;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get Quote <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const cols = isMobile ? 1 : isTablet ? 2 : 4;

  return (
    <section
      id="featured-products"
      style={{
        background: "#fff",
        padding: isMobile ? "50px 5% 60px" : "80px 5% 80px",
        fontFamily: FONT,
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "320px",
          background: "linear-gradient(180deg, #F5FAF5 0%, #fff 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "14px",
                color: "#65716B",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "3px",
              }}
            >
              <span style={{ width: "28px", height: "2px", background: GREEN }} />
              FEATURED PRODUCTS
              <span style={{ width: "28px", height: "2px", background: GREEN }} />
            </div>

            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "clamp(24px, 3.5vw, 42px)",
                fontWeight: 700,
                color: GREEN_DARK,
                letterSpacing: "-0.6px",
                lineHeight: 1.18,
              }}
            >
              Our Best-Selling{" "}
              <span style={{ color: GREEN_LIGHT }}>Solar Products</span>
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: "480px",
                color: "#68736D",
                fontSize: isMobile ? "14px" : "15px",
                lineHeight: 1.75,
              }}
            >
              Handpicked top-rated solar equipment trusted by thousands of
              homeowners and businesses across India.
            </p>
          </div>

        </div>

        {/* ── Product Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: isMobile ? "16px" : "20px",
          }}
        >
          {FEATURED.map((product) => (
            <ProductCard key={product.id} product={product} isMobile={isMobile} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            marginTop: "44px",
            textAlign: "center",
          }}
        >
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "13px 32px",
              borderRadius: "50px",
              border: `2px solid ${GREEN}`,
              background: "transparent",
              color: GREEN,
              fontSize: "14.5px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT,
              transition: "all 0.22s ease",
              letterSpacing: "0.2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = GREEN;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = GREEN;
            }}
          >
            View All Products <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        #featured-products button { outline: none; }
        #featured-products button:focus-visible {
          outline: 2px solid ${GREEN_LIGHT};
          outline-offset: 3px;
        }
      `}</style>
    </section>
  );
}
