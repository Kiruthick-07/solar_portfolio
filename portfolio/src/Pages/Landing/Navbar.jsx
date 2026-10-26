import { useState, useEffect } from "react";
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowRight,
  Leaf,
} from "lucide-react";

const FONT = "'Poppins', system-ui, sans-serif";

const Navbar = ({ isStatic = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    () => (window.location.pathname === "/products" ? 2 : 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions", dropdown: true },
    { name: "Products", href: "/products", dropdown: true },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Schemes", href: "/#resources", dropdown: true },
  ];

  const handleNavigation = (event, item, index) => {
    const [path, hash] = item.href.split("#");
    const isDifferentPage = path !== window.location.pathname;

    if (isDifferentPage) {
      return;
    }

    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setActiveIndex(index);
  };

  return (
    <>
      {/* NAVBAR HEADER */}
      <header
        style={{
          position: isStatic ? "relative" : "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          padding: scrolled ? "12px 5%" : "18px 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          backgroundColor: isStatic || scrolled ? "rgba(255, 255, 255, 0.96)" : "transparent",
          backdropFilter: isStatic || scrolled ? "blur(12px)" : "none",
          borderBottom: isStatic || scrolled ? "1px solid rgba(0, 0, 0, 0.06)" : "1px solid transparent",
          boxShadow: isStatic || scrolled ? "0 4px 20px rgba(0, 0, 0, 0.05)" : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* LOGO */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#0d1f17",
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
              boxShadow: "0 4px 14px rgba(45, 184, 75, 0.35)",
              flexShrink: 0,
            }}
          >
            <Leaf size={21} strokeWidth={2.5} color="#ffffff" />
          </div>

          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                fontFamily: FONT,
                color: "#0d1f17",
              }}
            >
              company name
            </div>
            <div
              style={{
                marginTop: "2px",
                fontSize: "7.5px",
                fontWeight: 600,
                letterSpacing: "2px",
                color: "#6b8c78",
                textTransform: "uppercase",
              }}
            >
              company slogan
            </div>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="desktop-navbar"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavigation(e, item, index)}
              className={`nav-link ${index === activeIndex ? "active" : ""}`}
              style={{
                fontFamily: FONT,
              }}
            >
              <span>{item.name}</span>
              {item.dropdown && (
                <ChevronDown
                  size={14}
                  strokeWidth={2.2}
                  className="nav-arrow"
                  style={{
                    flexShrink: 0,
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div
          className="desktop-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* Search */}
          <button
            aria-label="Search"
            style={{
              border: "none",
              background: "transparent",
              color: "#1a2e24",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Search size={20} strokeWidth={2} />
          </button>

          {/* Quote Button */}
          <button
            style={{
              border: "none",
              background: "#159447",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: FONT,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(21, 148, 71, 0.25)",
              transition: "all 0.3s ease",
            }}
            className="quote-button"
          >
            Get a Quote
            <ArrowRight size={16} />
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            width: "40px",
            height: "40px",
            border: "none",
            borderRadius: "50%",
            background: "rgba(45, 184, 75, 0.12)",
            color: "#1a9e3f",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div
          className="mobile-navbar"
          style={{
            position: "fixed",
            top: "76px",
            left: "5%",
            right: "5%",
            zIndex: 99,
            padding: "16px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.97)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 0, 0, 0.07)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.12)",
          }}
        >
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                handleNavigation(e, item, index);
                setMenuOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "13px 10px",
                color: index === activeIndex ? "#1a9e3f" : "#1a2e24",
                fontWeight: index === activeIndex ? 700 : 500,
                textDecoration: "none",
                fontSize: "15px",
                fontFamily: FONT,
                borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
              }}
            >
              <span>{item.name}</span>
              {item.dropdown && <ChevronDown size={15} />}
            </a>
          ))}

          <button
            style={{
              width: "100%",
              marginTop: "12px",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              background: "#159447",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: FONT,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            Get a Quote
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* CSS STYLES */}
      <style>
        {`
          .nav-link {
            position: relative;
            color: #1a2e24;
            text-decoration: none;
            font-size: 14.5px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 8px 0;
            transition: color 0.2s ease;
          }

          .nav-link .nav-arrow {
            transform: translateY(1px);
            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-link:hover .nav-arrow {
            transform: translateY(3px);
          }

          .nav-link.active {
            color: #1a9e3f;
            font-weight: 700;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2.5px;
            background-color: #2db84b;
            border-radius: 2px;
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-link:hover::after,
          .nav-link.active::after {
            width: 100%;
          }

          .nav-link:hover {
            color: #1a9e3f;
          }

          .quote-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(45, 184, 75, 0.45);
          }

          @media (max-width: 1050px) {
            .desktop-navbar {
              display: none !important;
            }
            .desktop-actions {
              display: none !important;
            }
            .mobile-menu-button {
              display: flex !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
