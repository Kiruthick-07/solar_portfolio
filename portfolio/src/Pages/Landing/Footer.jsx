import { useState } from "react";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";

/* ── Ensure Poppins font is loaded ── */
if (typeof document !== "undefined" && !document.getElementById("poppins-font")) {
  const link = document.createElement("link");
  link.id = "poppins-font";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap";
  document.head.appendChild(link);
}

const FONT = "'Poppins', system-ui, sans-serif";

/* Clean brand SVG icons */
function FacebookIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill={color} />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Featured Products", href: "#featured" },
    { name: "Schedule Consultation", href: "#schedule" },
    { name: "Government Schemes", href: "#schemes" },
    { name: "Solar ROI Calculator", href: "#calculator" },
  ];

  const solutions = [
    { name: "Residential Rooftop Solar", href: "#solutions" },
    { name: "Commercial & Industrial", href: "#solutions" },
    { name: "On-Grid & Hybrid Inverters", href: "#products" },
    { name: "LiFePO4 Solar Storage", href: "#products" },
    { name: "PM Surya Ghar Subsidy", href: "#schemes" },
    { name: "Maintenance & AMC Support", href: "#schedule" },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer
      id="footer"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #091c14 0%, #05120c 100%)",
        color: "#e2e8f0",
        fontFamily: FONT,
        paddingTop: "60px",
        paddingBottom: "30px",
        overflow: "hidden",
        borderTop: "1px solid rgba(45, 184, 75, 0.2)",
      }}
    >
      {/* Ambient background glow accents */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45, 184, 75, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26, 158, 71, 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main Footer Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2db84b, #1a9e3f)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 14px rgba(45, 184, 75, 0.4)",
                  flexShrink: 0,
                }}
              >
                <Leaf size={20} strokeWidth={2.5} color="#ffffff" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                    color: "#ffffff",
                  }}
                >
                  company name
                </div>
                <div
                  style={{
                    marginTop: "2px",
                    fontSize: "8px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    color: "#2db84b",
                    textTransform: "uppercase",
                  }}
                >
                  company slogan
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "13.5px",
                lineHeight: "1.7",
                color: "#94a3b8",
                marginBottom: "20px",
              }}
            >
              Transforming roofs into independent clean power plants. Reliable,
              cost-effective, and sustainable solar energy engineering for homes and businesses.
            </p>

            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="tel:9597424158"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "13.5px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2db84b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
              >
                <Phone size={15} color="#2db84b" />
                +91 95974 24158
              </a>

              <a
                href="mailto:contact@solarenergy.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "13.5px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2db84b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
              >
                <Mail size={15} color="#2db84b" />
                contact@solarenergy.com
              </a>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#94a3b8",
                  fontSize: "13.5px",
                }}
              >
                <MapPin size={15} color="#2db84b" />
                Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "18px",
                position: "relative",
                display: "inline-block",
              }}
            >
              Navigation
              <span
                style={{
                  display: "block",
                  width: "28px",
                  height: "3px",
                  background: "#2db84b",
                  borderRadius: "2px",
                  marginTop: "6px",
                }}
              />
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "11px" }}>
                  <a
                    href={item.href}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "13.5px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#2db84b";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <ArrowRight size={13} color="#2db84b" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solar Solutions */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "18px",
                position: "relative",
                display: "inline-block",
              }}
            >
              Solutions
              <span
                style={{
                  display: "block",
                  width: "28px",
                  height: "3px",
                  background: "#2db84b",
                  borderRadius: "2px",
                  marginTop: "6px",
                }}
              />
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {solutions.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "11px" }}>
                  <a
                    href={item.href}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "13.5px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#2db84b";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <ArrowRight size={13} color="#2db84b" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "18px",
                position: "relative",
                display: "inline-block",
              }}
            >
              Newsletter
              <span
                style={{
                  display: "block",
                  width: "28px",
                  height: "3px",
                  background: "#2db84b",
                  borderRadius: "2px",
                  marginTop: "6px",
                }}
              />
            </h4>
            <p
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                lineHeight: "1.6",
                marginBottom: "16px",
              }}
            >
              Get updates on government subsidy schemes, ROI guides, and seasonal discounts.
            </p>

            <form onSubmit={handleSubscribe} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "30px",
                  padding: "4px 6px 4px 16px",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2db84b";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(45, 184, 75, 0.2)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#ffffff",
                    fontSize: "13px",
                    width: "100%",
                    fontFamily: FONT,
                  }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  style={{
                    background: "linear-gradient(135deg, #2db84b, #1a9e3f)",
                    border: "none",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    cursor: "pointer",
                    flexShrink: 0,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(45, 184, 75, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Send size={15} />
                </button>
              </div>

              {subscribed && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#4ade80",
                    fontSize: "12px",
                    marginTop: "8px",
                  }}
                >
                  <CheckCircle2 size={14} />
                  Thank you for subscribing!
                </div>
              )}
            </form>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#cbd5e1",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#2db84b";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderColor = "#2db84b";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(45, 184, 75, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                      e.currentTarget.style.color = "#cbd5e1";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            fontSize: "12.5px",
            color: "#64748b",
          }}
        >
          <div>
            © {new Date().getFullYear()} company name. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <a
              href="#privacy"
              style={{ color: "#64748b", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2db84b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              style={{ color: "#64748b", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2db84b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              style={{ color: "#64748b", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2db84b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              Cookie Policy
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Built with ☀️ for a cleaner planet
          </div>
        </div>
      </div>
    </footer>
  );
}
