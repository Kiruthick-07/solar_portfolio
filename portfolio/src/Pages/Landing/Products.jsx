import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const products = [
  {
    id: 0,
    name: "Solar Panels",
    tag: "Featured Product",
    description:
      "High-efficiency solar panels designed for maximum energy generation and long-lasting performance.",
    image: "/solar-panel.png",
  },
  {
    id: 1,
    name: "Solar Inverters",
    tag: "High Performance",
    description:
      "Advanced inverters that convert solar energy to usable AC power with industry-leading efficiency ratings.",
    image: "/solar-inverter.png",
  },
  {
    id: 2,
    name: "Solar Batteries",
    tag: "Energy Storage",
    description:
      "Store excess solar energy for use at night or during outages with our long-life battery systems.",
    image: "/solar-battery.png",
  },
  {
    id: 3,
    name: "Mounting Structures",
    tag: "Durable Build",
    description:
      "Engineered aluminum racking systems built to withstand harsh weather while keeping panels optimally angled.",
    image: "/mounting-structure.png",
  },
];

const applications = [
  {
    id: 0,
    name: "Residential",
    tag: "Home Solar",
    description:
      "Power your home with clean solar energy, reduce electricity bills and increase property value with rooftop systems.",
    image: "/app-residential.png",
  },
  {
    id: 1,
    name: "Commercial",
    tag: "Business Solar",
    description:
      "Cut operating costs and meet sustainability goals with large-scale rooftop solar for offices and retail spaces.",
    image: "/app-commercial.png",
  },
  {
    id: 2,
    name: "Agricultural",
    tag: "Farm Solar",
    description:
      "Agrivoltaic systems that let crops thrive below solar panels, reducing water usage while generating clean power.",
    image: "/app-agricultural.png",
  },
  {
    id: 3,
    name: "Industrial",
    tag: "Large Scale",
    description:
      "Utility-grade solar installations for factories and industrial facilities demanding maximum power output.",
    image: "/app-industrial.png",
  },
];

const tabs = ["By Product", "By Application"];

const useWindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
};

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const width = useWindowWidth();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const visibleCount = isMobile ? 1 : isTablet ? 2 : 4;

  const activeData = activeTab === 0 ? products : applications;

  const handleTabChange = (i) => {
    setActiveTab(i);
    setActiveCard(0);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % activeData.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, activeData]);

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
    setActiveCard((prev) => (prev - 1 + activeData.length) % activeData.length);
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
    setActiveCard((prev) => (prev + 1) % activeData.length);
  };

  const featured = activeData[activeCard];

  // Cards visible in the strip — window around activeCard
  const startIndex = Math.min(
    Math.max(activeCard - Math.floor(visibleCount / 2), 0),
    Math.max(activeData.length - visibleCount, 0)
  );
  const visibleCards = activeData.slice(startIndex, startIndex + visibleCount);

  return (
    <section
      id="products"
      style={{
        position: "relative",
        width: "100%",
        padding: isMobile ? "50px 5% 50px" : "80px 5% 70px",
        backgroundColor: "#F5FAF5",
        fontFamily: "Inter, system-ui, sans-serif",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #e8f5e9 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          left: "-40px",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #c8e6c9 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Section Header ── */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            marginBottom: "16px",
            color: "#65716B",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "3px",
          }}
        >
          <span style={{ width: "32px", height: "2px", backgroundColor: "#20A34A" }} />
          OUR PRODUCTS
          <span style={{ width: "32px", height: "2px", backgroundColor: "#20A34A" }} />
        </div>

        <h2
          style={{
            margin: "0 0 14px",
            fontSize: "clamp(22px, 4vw, 44px)",
            fontWeight: 600,
            lineHeight: 1.18,
            letterSpacing: "-0.8px",
            color: "#102D25",
          }}
        >
          Smart Energy Solutions for{" "}
          <span style={{ color: "#199B43" }}>Every Need</span>
        </h2>

        <p
          style={{
            margin: "0 auto 28px",
            maxWidth: "580px",
            color: "#68736D",
            fontSize: isMobile ? "14px" : "15px",
            lineHeight: 1.75,
          }}
        >
          Explore our range of high-performance solar products designed for
          homes, businesses and industries.
        </p>

        {/* Tab switcher */}
        <div
          style={{
            display: "inline-flex",
            backgroundColor: "#E8F5E9",
            borderRadius: "50px",
            padding: "5px",
            gap: "4px",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => handleTabChange(i)}
              style={{
                padding: isMobile ? "8px 18px" : "9px 28px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontSize: isMobile ? "13px" : "13.5px",
                fontWeight: 500,
                transition: "all 0.25s ease",
                backgroundColor: activeTab === i ? "#1A9E47" : "transparent",
                color: activeTab === i ? "#ffffff" : "#68736D",
                boxShadow: activeTab === i ? "0 3px 10px rgba(26,158,71,0.22)" : "none",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main layout ── */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          position: "relative",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ── MOBILE / TABLET: stacked layout ── */}
        {isMobile || isTablet ? (
          <div>
            {/* Featured info card */}
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "20px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                gap: "20px",
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: isMobile ? "100%" : "180px",
                  height: isMobile ? "200px" : "160px",
                  flexShrink: 0,
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#E8F5E9",
                }}
              >
                <img
                  src={featured.image}
                  alt={featured.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                    color: "#1A9E47",
                    textTransform: "uppercase",
                  }}
                >
                  {featured.tag}
                </p>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "clamp(18px, 4vw, 26px)",
                    fontWeight: 700,
                    color: "#102D25",
                    lineHeight: 1.25,
                  }}
                >
                  {featured.name}
                </h3>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#68736D",
                  }}
                >
                  {featured.description}
                </p>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "50px",
                    border: "none",
                    backgroundColor: "#1A2E22",
                    color: "#ffffff",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A9E47")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A2E22")}
                >
                  Learn More <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Cards strip with arrows */}
            <div style={{ position: "relative", padding: "0 44px" }}>
              {/* Prev */}
              <button
                onClick={handlePrev}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid #D8E8D8",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  zIndex: 2,
                }}
              >
                <ChevronLeft size={16} color="#102D25" />
              </button>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
                  gap: "12px",
                }}
              >
                {visibleCards.map((product) => {
                  const isActive = activeCard === product.id;
                  return (
                    <div
                      key={product.id}
                      onClick={() => setActiveCard(product.id)}
                      style={{
                        borderRadius: "14px",
                        border: isActive ? "2px solid #1A9E47" : "2px solid #E5EDE5",
                        backgroundColor: isActive ? "#F0FAF0" : "#ffffff",
                        padding: "14px 12px 12px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        cursor: "pointer",
                        boxShadow: isActive
                          ? "0 4px 16px rgba(26,158,71,0.12)"
                          : "0 2px 8px rgba(0,0,0,0.05)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: isMobile ? "130px" : "150px",
                          borderRadius: "10px",
                          overflow: "hidden",
                          backgroundColor: isActive ? "#E8F5E9" : "#F4F6F4",
                          marginBottom: "12px",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <span style={{ fontSize: "13px", fontWeight: 500, color: "#102D25" }}>
                          {product.name}
                        </span>
                        <ArrowRight size={14} color={isActive ? "#1A9E47" : "#8A9E8A"} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Next */}
              <button
                onClick={handleNext}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid #D8E8D8",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  zIndex: 2,
                }}
              >
                <ChevronRight size={16} color="#102D25" />
              </button>
            </div>
          </div>
        ) : (
          /* ── DESKTOP: original side-by-side layout ── */
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              position: "relative",
              paddingLeft: "60px",
              paddingRight: "60px",
            }}
          >
            {/* Left arrow */}
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #D8E8D8",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "all 0.2s ease",
                zIndex: 2,
              }}
            >
              <ChevronLeft size={18} color="#102D25" />
            </button>

            {/* Featured panel */}
            <div
              style={{
                width: "220px",
                flexShrink: 0,
                paddingRight: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "2.5px",
                  color: "#1A9E47",
                  textTransform: "uppercase",
                }}
              >
                {featured.tag}
              </p>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "clamp(20px, 2vw, 28px)",
                  fontWeight: 700,
                  letterSpacing: "-0.4px",
                  color: "#102D25",
                  lineHeight: 1.25,
                }}
              >
                {featured.name}
              </h3>
              <p
                style={{
                  margin: "0 0 22px",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#68736D",
                }}
              >
                {featured.description}
              </p>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "50px",
                  border: "none",
                  backgroundColor: "#1A2E22",
                  color: "#ffffff",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  cursor: "pointer",
                  width: "fit-content",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A9E47")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A2E22")}
              >
                Learn More <ArrowRight size={15} />
              </button>
            </div>

            {/* 4-column card grid */}
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "14px",
              }}
            >
              {visibleCards.map((product) => {
                const isActive = activeCard === product.id;
                return (
                  <div
                    key={product.id}
                    onClick={() => setActiveCard(product.id)}
                    style={{
                      borderRadius: "16px",
                      border: isActive ? "2px solid #1A9E47" : "2px solid #E5EDE5",
                      backgroundColor: isActive ? "#F0FAF0" : "#ffffff",
                      padding: "20px 16px 16px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      boxShadow: isActive
                        ? "0 6px 24px rgba(26,158,71,0.12)"
                        : "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "#A8D8A8";
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "#E5EDE5";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                      }
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "210px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "18px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        backgroundColor: isActive ? "#E8F5E9" : "#F4F6F4",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ fontSize: "13.5px", fontWeight: 500, color: "#102D25" }}>
                        {product.name}
                      </span>
                      <ArrowRight size={16} color={isActive ? "#1A9E47" : "#8A9E8A"} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #D8E8D8",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "all 0.2s ease",
                zIndex: 2,
              }}
            >
              <ChevronRight size={18} color="#102D25" />
            </button>
          </div>
        )}

        {/* ── Dot indicators ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginTop: "28px",
          }}
        >
          {activeData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              style={{
                width: activeCard === i ? "28px" : "10px",
                height: "10px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                backgroundColor: activeCard === i ? "#1A9E47" : "#C8DCC8",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        #products button { outline: none; }
        #products button:focus-visible { outline: 2px solid #1A9E47; outline-offset: 2px; }
      `}</style>
    </section>
  );
};

export default ProductsSection;
