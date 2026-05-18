"use client";

import React from "react";

export default function CTASection() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>

        <h1 style={styles.heading}>Growth Services That Drive Results</h1>

        <h1 style={styles.subtext}>
          Advanced SEO, high-performance websites, paid marketing,<br />
          branding, and design built for real business growth.
        </h1>

        <div style={styles.buttons}>
          <a href="/contact" style={styles.btnOutline}>Book a free Strategy Call/ Audit</a>
          <a href="/services" style={styles.btnFill}>Explore Our Services</a>
        </div>

      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    textAlign: "center",
    padding: "0 24px",
    maxWidth: "800px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "500",
    color: "#111111",
    margin: "0 0 24px 0",
    lineHeight: "1em",
    letterSpacing: "-0.02em",
    textAlign: "center",
    fontFamily: "'Apfel Grotezk', sans-serif",
  },
  subtext: {
    fontSize: "24px",
    fontWeight: "400",
    color: "rgba(13, 13, 13, 0.7)",
    lineHeight: "1.6",
    letterSpacing: "-0.02em",
    textAlign: "center",
    margin: "0 0 48px 0",
    fontFamily: "'Apfel Grotezk', sans-serif",
  },
  buttons: {
    display: "flex",
    gap: "0",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnOutline: {
    padding: "16px 32px",
    fontSize: "15px",
    fontWeight: "400",
    color: "#111111",
    background: "transparent",
    border: "1px solid #111111",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "'Apfel Grotezk', sans-serif",
    letterSpacing: "-0.01em",
    lineHeight: "140%",
  },
  btnFill: {
    padding: "16px 32px",
    fontSize: "15px",
    fontWeight: "400",
    color: "#ffffff",
    background: "#111111",
    border: "1px solid #111111",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "'Apfel Grotezk', sans-serif",
    letterSpacing: "-0.01em",
    lineHeight: "140%",
  },
};