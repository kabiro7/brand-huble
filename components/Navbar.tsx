"use client";

import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "PROJECTS", href: "/project-lobby" },
  { label: "SERVICES", href: "/services" },
  { label: "BLOGS",    href: "/blogs" },
  { label: "ABOUT",    href: "/about" },
  { label: "CONTACT",  href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@700&display=swap');

        .nav-link {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .nav-link:hover {
          transform: translateY(-6px);
          opacity: 0.7;
        }

        .menu-overlay {
          animation: fadeIn 0.35s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: menuOpen ? "#555555" : "#111111",
        padding: "20px 32px",
        position: "sticky",
        top: 0,
        zIndex: 300,
        transition: "background-color 0.35s ease",
      }}>
        <a href="/" style={styles.logoRow}>
          <div style={styles.logoIcon}>
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2 C6 7 6 17 12 22" />
              <path d="M12 2 C18 7 18 17 12 22" />
            </svg>
          </div>
          <span style={styles.logoText}>BRAND HUBBLE</span>
        </a>

        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span style={styles.closeBtn}>✕</span>
          ) : (
            <>
              <span style={styles.line} />
              <span style={styles.line} />
              <span style={styles.line} />
            </>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div style={styles.overlay} className="menu-overlay">
          <div style={styles.linkList}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={styles.overlayLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  logoRow: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },

  logoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "38px",
    height: "38px",
    border: "1.5px solid #ffffff",
    borderRadius: "50%",
  },

  logoText: {
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: '"Geist", sans-serif',
    letterSpacing: "0.12em",
    marginLeft: "12px",
    textTransform: "uppercase",
  },

  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 400,
  },

  line: {
    display: "block",
    width: "24px",
    height: "1.5px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
  },

  closeBtn: {
    color: "#ffffff",
    fontSize: "22px",
    lineHeight: "1",
    fontFamily: '"Geist", sans-serif',
    fontWeight: 400,
  },

  overlay: {
    position: "fixed",
    top: "78px",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#555555",
    zIndex: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  linkList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },

  overlayLink: {
    fontSize: "95px",
    fontWeight: 700,
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: '"Geist", "Geist Placeholder", sans-serif',
    letterSpacing: "-0.05em",
    lineHeight: "94%",
    textTransform: "uppercase",
  },
};