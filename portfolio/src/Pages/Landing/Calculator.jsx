import { useState, useMemo } from "react";
import { Zap, IndianRupee, Sun, Leaf, ChevronDown } from "lucide-react";

/* ── Poppins font ── */
if (!document.getElementById("poppins-font")) {
  const link = document.createElement("link");
  link.id = "poppins-font";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
  document.head.appendChild(link);
}

const FONT = "'Poppins', system-ui, sans-serif";

/* ── Constants ── */
const RATE_PER_UNIT      = 8;
const SOLAR_COVERAGE     = 0.85;
const SYSTEM_COST_PER_KW = 65000;
const PEAK_SUN_HOURS     = 5;
const PANEL_WATT         = 400;

const STATE_OPTIONS = [
  "Andhra Pradesh","Bihar","Delhi","Gujarat","Haryana",
  "Karnataka","Kerala","Madhya Pradesh","Maharashtra",
  "Punjab","Rajasthan","Tamil Nadu","Telangana",
  "Uttar Pradesh","West Bengal",
];

function fmt(n) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  if (n >= 1000)   return `₹${(n / 1000).toFixed(1)}K`;
  return `₹${Math.round(n)}`;
}

/* ── Custom slider ── */
function Slider({ id, min, max, step, value, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <input
      id={id} type="range" min={min} max={max} step={step}
      value={value} onChange={(e) => onChange(Number(e.target.value))}
      className="solar-slider"
      style={{ "--pct": `${pct}%` }}
    />
  );
}

/* ── Small stat pill ── */
function StatPill({ icon: Icon, label, value, green }) {
  return (
    <div style={{
      flex: "1 1 0", minWidth: "80px",
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: "4px", padding: "12px 8px", borderRadius: "12px",
      background: green
        ? "linear-gradient(135deg,#18a84e,#0e6e30)"
        : "rgba(255,255,255,0.70)",
      backdropFilter: "blur(6px)",
      boxShadow: green
        ? "0 6px 18px rgba(18,148,70,0.28)"
        : "0 2px 10px rgba(0,0,0,0.06)",
      border: green ? "none" : "1px solid rgba(212,232,217,0.8)",
    }}>
      <Icon size={17} color={green ? "#fff" : "#159447"} strokeWidth={1.8} />
      <span style={{
        fontSize: "16px", fontWeight: 600, lineHeight: 1.1,
        color: green ? "#fff" : "#0d1f17", fontFamily: FONT,
      }}>{value}</span>
      <span style={{
        fontSize: "10px", textAlign: "center", lineHeight: 1.3,
        color: green ? "rgba(255,255,255,0.80)" : "#65716B", fontFamily: FONT,
      }}>{label}</span>
    </div>
  );
}

export default function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [roofArea,    setRoofArea]    = useState(500);
  const [state,       setState]       = useState("Tamil Nadu");
  const [stateOpen,   setStateOpen]   = useState(false);

  const R = useMemo(() => {
    const annualBill   = monthlyBill * 12;
    const annualSaving = annualBill * SOLAR_COVERAGE;
    const monthlyUnits = monthlyBill / RATE_PER_UNIT;
    const systemKw     = (monthlyUnits / (PEAK_SUN_HOURS * 30)).toFixed(1);
    const systemCost   = systemKw * SYSTEM_COST_PER_KW;
    const paybackYrs   = (systemCost / annualSaving).toFixed(1);
    const panels       = Math.ceil((systemKw * 1000) / PANEL_WATT);
    const co2Saved     = ((monthlyUnits * 12) * 0.82 / 1000).toFixed(1);
    const roofFit      = Math.floor(roofArea / 10);
    const lifetime25   = Math.round(annualSaving * 25 - systemCost);
    return { annualSaving, systemKw, paybackYrs, panels, co2Saved,
             roofFit, canFit: roofFit >= panels, lifetime25 };
  }, [monthlyBill, roofArea]);

  return (
    <section
      id="calculator"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url('/solar_calci_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        fontFamily: FONT,
        boxSizing: "border-box",
        padding: "60px 3%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "500px",
      }}
    >
      {/* soft white veil so text/card is legible */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "rgba(245,252,248,0.38)",
      }} />

      {/* ══════════════════════════════════════
          WIDE RECTANGULAR CARD
      ══════════════════════════════════════ */}
      <div
        className="calc-card"
        style={{
          position: "relative", zIndex: 2,
          width: "100%", maxWidth: "1300px",
          display: "grid",
          gridTemplateColumns: "1fr 1.55fr",
          borderRadius: "24px", overflow: "hidden",
          boxShadow: "0 24px 72px rgba(13,31,23,0.18), 0 4px 20px rgba(13,31,23,0.10)",
        }}
      >

        {/* ── LEFT PANEL ── green gradient info side ── */}
        <div style={{
          background: "linear-gradient(160deg,#0d4a23 0%,#156634 45%,#1a8042 100%)",
          padding: "48px 40px",
          display: "flex", flexDirection: "column", justifyContent: "center",
          gap: "24px",
        }}>
          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            fontSize: "10.5px", fontWeight: 600, letterSpacing: "3px",
            color: "rgba(255,255,255,0.65)", textTransform: "uppercase", fontFamily: FONT,
          }}>
            <span style={{ width: "24px", height: "1.5px", background: "#4ade80" }} />
            Solar Calculator
          </div>

          {/* Heading */}
          <div>
            <h2 style={{
              margin: 0, fontFamily: FONT, fontWeight: 600,
              fontSize: "clamp(24px, 2.4vw, 36px)", color: "#ffffff",
              letterSpacing: "-0.6px", lineHeight: 1.25,
            }}>
              How Much Could<br />You Save?
            </h2>
            <p style={{
              margin: "14px 0 0", fontFamily: FONT, fontWeight: 300,
              fontSize: "13.5px", color: "rgba(255,255,255,0.72)", lineHeight: 1.7,
              maxWidth: "280px",
            }}>
              Enter your monthly electricity bill and roof size to instantly
              see your solar savings, system cost, and payback period.
            </p>
          </div>

          {/* Feature list */}
          {[
            { icon: "⚡", text: "Instant ROI calculation" },
            { icon: "🌿", text: "CO₂ impact estimation" },
            { icon: "☀️", text: "Sized for your actual roof" },
            { icon: "📋", text: "Free expert consultation" },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: "flex", alignItems: "center", gap: "12px",
            }}>
              <span style={{
                width: "32px", height: "32px", borderRadius: "8px",
                background: "rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "15px", flexShrink: 0,
              }}>{icon}</span>
              <span style={{
                fontSize: "13px", color: "rgba(255,255,255,0.82)",
                fontFamily: FONT, fontWeight: 400,
              }}>{text}</span>
            </div>
          ))}

          {/* Big saving teaser */}
          <div style={{
            marginTop: "8px", padding: "18px 20px", borderRadius: "14px",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}>
            <div style={{
              fontSize: "11px", fontWeight: 500, letterSpacing: "1px",
              color: "rgba(255,255,255,0.60)", fontFamily: FONT, textTransform: "uppercase",
            }}>Your Estimated Annual Saving</div>
            <div style={{
              fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600,
              color: "#4ade80", fontFamily: FONT, letterSpacing: "-1px",
              marginTop: "6px",
            }}>
              {fmt(R.annualSaving)}
            </div>
            <div style={{
              fontSize: "11px", color: "rgba(255,255,255,0.50)", fontFamily: FONT, marginTop: "4px",
            }}>
              Payback in {R.paybackYrs} years · {R.panels} panels needed
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── inputs + results ── */}
        <div style={{
          background: "rgba(255,255,255,0.93)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "44px 40px 36px",
          display: "flex", flexDirection: "column", gap: "22px",
        }}>

          {/* Card header */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "9px",
              background: "linear-gradient(135deg,#2db84b,#159447)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(21,148,71,0.28)", flexShrink: 0,
            }}>
              <Sun size={18} color="#fff" strokeWidth={2} />
            </div>
            <div>
              <div style={{ fontSize: "14.5px", fontWeight: 600, color: "#0d1f17", fontFamily: FONT }}>
                Savings Estimator
              </div>
              <div style={{ fontSize: "11px", color: "#65716B", fontFamily: FONT }}>
                Instant solar ROI calculation
              </div>
            </div>
          </div>

          {/* Two sliders side by side */}
          <div className="calc-sliders" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

            {/* Monthly bill */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ fontSize: "12px", fontWeight: 500, color: "#3d5446", fontFamily: FONT }}>
                  Monthly Bill
                </label>
                <span style={{
                  fontSize: "12.5px", fontWeight: 600, color: "#159447",
                  background: "rgba(21,148,71,0.09)", padding: "1px 9px",
                  borderRadius: "20px", fontFamily: FONT,
                }}>
                  ₹{monthlyBill.toLocaleString("en-IN")}
                </span>
              </div>
              <Slider id="bill-slider" min={500} max={20000} step={500}
                value={monthlyBill} onChange={setMonthlyBill} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                <span style={{ fontSize: "9.5px", color: "#b0bdb4", fontFamily: FONT }}>₹500</span>
                <span style={{ fontSize: "9.5px", color: "#b0bdb4", fontFamily: FONT }}>₹20,000</span>
              </div>
            </div>

            {/* Roof area */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ fontSize: "12px", fontWeight: 500, color: "#3d5446", fontFamily: FONT }}>
                  Roof Area
                </label>
                <span style={{
                  fontSize: "12.5px", fontWeight: 600, color: "#159447",
                  background: "rgba(21,148,71,0.09)", padding: "1px 9px",
                  borderRadius: "20px", fontFamily: FONT,
                }}>
                  {roofArea} sq ft
                </span>
              </div>
              <Slider id="roof-slider" min={100} max={2000} step={50}
                value={roofArea} onChange={setRoofArea} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                <span style={{ fontSize: "9.5px", color: "#b0bdb4", fontFamily: FONT }}>100 sq ft</span>
                <span style={{ fontSize: "9.5px", color: "#b0bdb4", fontFamily: FONT }}>2,000 sq ft</span>
              </div>
            </div>
          </div>

          {/* State dropdown */}
          <div style={{ position: "relative" }}>
            <label style={{
              display: "block", fontSize: "12px", fontWeight: 500,
              color: "#3d5446", fontFamily: FONT, marginBottom: "7px",
            }}>
              Your State
            </label>
            <button
              onClick={() => setStateOpen((o) => !o)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between",
                padding: "9px 14px", borderRadius: "10px",
                border: "1.5px solid #d4e8d9",
                background: "#f5fcf8", cursor: "pointer",
                fontSize: "13px", fontWeight: 500, color: "#0d1f17", fontFamily: FONT,
              }}
            >
              {state}
              <ChevronDown size={14} color="#65716B"
                style={{ transform: stateOpen ? "rotate(180deg)" : "rotate(0)", transition: "0.2s" }} />
            </button>
            {stateOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
                background: "#fff", border: "1.5px solid #d4e8d9",
                borderRadius: "10px", zIndex: 50,
                maxHeight: "170px", overflowY: "auto",
                boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
              }}>
                {STATE_OPTIONS.map((s) => (
                  <div key={s}
                    onClick={() => { setState(s); setStateOpen(false); }}
                    style={{
                      padding: "8px 14px", fontSize: "13px", color: "#0d1f17",
                      fontFamily: FONT, cursor: "pointer",
                      background: s === state ? "rgba(21,148,71,0.08)" : "transparent",
                      fontWeight: s === state ? 500 : 400,
                    }}
                    onMouseEnter={(e) => { if (s !== state) e.currentTarget.style.background = "#f5fcf8"; }}
                    onMouseLeave={(e) => { if (s !== state) e.currentTarget.style.background = "transparent"; }}
                  >{s}</div>
                ))}
              </div>
            )}
          </div>

          {/* Roof warning */}
          {!R.canFit && (
            <div style={{
              padding: "9px 14px", borderRadius: "10px",
              background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
              fontSize: "12px", color: "#92400e", fontFamily: FONT, lineHeight: 1.5,
            }}>
              ⚠️ Roof fits ~{R.roofFit} panels but your bill needs {R.panels}.
              Consider partial solar or a smaller system.
            </div>
          )}

          {/* Result badges row */}
          <div style={{ display: "flex", gap: "10px" }}>
            <StatPill icon={IndianRupee} label="Annual Savings" value={fmt(R.annualSaving)} green />
            <StatPill icon={Zap}         label="System Size"    value={`${R.systemKw} kW`} />
            <StatPill icon={Leaf}        label="CO₂ Saved/yr"   value={`${R.co2Saved}T`} />
          </div>

          {/* Summary strip */}
          <div style={{
            background: "linear-gradient(135deg,rgba(13,31,23,0.04),rgba(21,148,71,0.06))",
            borderRadius: "12px", padding: "14px 20px",
            display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
            alignItems: "center",
          }}>
            {[
              { label: "Payback",      value: `${R.paybackYrs} yrs` },
              null,
              { label: "Panels Needed", value: `${R.panels}` },
              null,
              { label: "25‑yr Profit", value: fmt(R.lifetime25) },
            ].map((item, i) =>
              item === null ? (
                <div key={i} style={{ width: "1px", height: "34px", background: "rgba(13,31,23,0.10)", margin: "0 auto" }} />
              ) : (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#0d1f17", fontFamily: FONT }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: "10px", color: "#65716B", fontFamily: FONT, marginTop: "2px" }}>
                    {item.label}
                  </div>
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <button
            id="calculator-get-quote"
            style={{
              width: "100%", padding: "13px", border: "none",
              borderRadius: "12px", cursor: "pointer",
              background: "linear-gradient(135deg,#2db84b,#159447)",
              color: "#fff", fontSize: "14px", fontWeight: 500,
              fontFamily: FONT, letterSpacing: "0.2px",
              boxShadow: "0 6px 20px rgba(21,148,71,0.30)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 28px rgba(21,148,71,0.42)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(21,148,71,0.30)";
            }}
          >
            Get a Free Solar Quote →
          </button>

          <p style={{
            textAlign: "center", margin: 0,
            fontSize: "10.5px", color: "#9aaa9e", fontFamily: FONT,
          }}>
            Estimates based on avg Indian solar tariffs · No commitment required
          </p>
        </div>
      </div>

      {/* ── Global styles ── */}
      <style>{`
        .solar-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 5px;
          border-radius: 99px;
          outline: none;
          cursor: pointer;
          background: linear-gradient(
            to right,
            #159447 0%,
            #159447 var(--pct),
            #d4e8d9 var(--pct),
            #d4e8d9 100%
          );
        }
        .solar-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 17px; height: 17px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid #159447;
          box-shadow: 0 2px 8px rgba(0,0,0,0.14);
          cursor: pointer;
          transition: transform 0.15s;
        }
        .solar-slider::-webkit-slider-thumb:hover { transform: scale(1.2); }
        .solar-slider::-moz-range-thumb {
          width: 17px; height: 17px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid #159447;
          cursor: pointer;
        }

        @media (max-width: 820px) {
          .calc-card {
            grid-template-columns: 1fr !important;
          }
          .calc-sliders {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
