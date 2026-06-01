"use client";

import React from "react";

const navigation = [
  { label: "About us",  href: "/about" },
  { label: "Projects",  href: "/project-lobby" },
  { label: "Blogs",     href: "/blogs" },
];

const services = [
  { label: "SEO",                  href: "/services/seo" },
  { label: "Social media",         href: "/services/social-media" },
  { label: "Packaging",            href: "/services/packaging" },
  { label: "Website Design",       href: "/services/website-design" },
  { label: "Branding & Launch",    href: "/services/branding-and-launch-campaign" },
  { label: "Perforance Marketing", href: "/services/performance-marketing" },
];

const social = [
  { label: "Instagram", href: "" },
  { label: "LinkedIn",  href: "" },
  { label: "Behance",   href: "" },
  { label: "Whatsapp",  href: "" },
];

const legals = [
  { label: "Privacy Policy",   href: "/privacy-policy" },
  { label: "Term of Service",  href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #ffffff;
          text-decoration: none;
          display: block;
          transition: opacity 0.2s ease;
        }
        .footer-link:hover {
          opacity: 0.6;
        }
        .footer-col-label {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
      `}</style>

      <footer style={styles.footer}>

        {/* ── 4 column links ── */}
        <div style={styles.columns}>

          {/* Navigation */}
          <div>
            <p className="footer-col-label">Navigation</p>
            <div style={styles.linkList}>
              {navigation.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="footer-col-label">SERVICES</p>
            <div style={styles.linkList}>
              {services.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="footer-col-label">Social</p>
            <div style={styles.linkList}>
              {social.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Legals */}
          <div>
            <p className="footer-col-label">Legals</p>
            <div style={styles.linkList}>
              {legals.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>© 2025-2026 Brand Hubble. All rights reserved.</p>
          <a href="/" style={styles.backHome}>
            <span style={styles.arrowIcon}>↗</span>
            Back to home
          </a>
        </div>

        {/* ── Big BRAND HUBBLE text ── */}
        <div style={styles.bigTextWrap} aria-hidden="true">
          <span style={styles.bigText}>BRAND HUBBLE</span>
        </div>

      </footer>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    width: "100%",
    borderRadius: "20px 20px 0 0",
    background: "radial-gradient(ellipse at 50% 100%, #c0390a 0%, #1a0a00 45%, #111111 100%)",
    padding: "60px 40px 0",
    overflow: "hidden",
    position: "relative",
  },

  // ── Columns ──
  columns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "40px",
    marginBottom: "80px",
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  // ── Bottom bar ──
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "24px",
  },
  copyright: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "13px",
    fontWeight: 400,
    color: "rgba(255,255,255,0.5)",
    margin: 0,
  },
  backHome: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "16px",
    fontWeight: 400,
    color: "#ffffff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "opacity 0.2s ease",
  },
  arrowIcon: {
    fontSize: "18px",
  },

  // ── Big text ──
  bigTextWrap: {
    width: "100%",
    overflow: "hidden",
    marginTop: "8px",
  },
  bigText: {
    fontFamily: '"Wormbox Rounded", "Wormbox Rounded Placeholder", sans-serif',
    fontSize: "clamp(80px, 14vw, 180px)",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: "-0.02em",
    lineHeight: "0.85",
    display: "block",
    whiteSpace: "nowrap",
  },
};