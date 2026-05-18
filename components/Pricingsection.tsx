"use client";

import React from "react";

export default function PricingSection() {
  return (
    <section style={styles.section}>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.labelRow}>
          <span style={styles.dot} />
          <span style={styles.label}>PRICING</span>
        </div>
        <h2 style={styles.heading}>
          <span style={styles.headingLight}>Creative Plans,</span><br />
          <span style={styles.headingBold}>Your way</span>
        </h2>
      </div>

      {/* Plan Card */}
      <div style={styles.card}>

        <div style={styles.cardTop}>
          <h3 style={styles.planName}>THE BLUEPRINT</h3>
          <span style={styles.tag}>LAUNCHPAD</span>
        </div>

        <p style={styles.promise}>
          The Promise: We don't just design a logo; we engineer a visual foundation that makes you look investor-ready from Day 1. Stop competing on price and start competing on perception.
        </p>

        <ul style={styles.featureList}>
          {[
            `Strategic Positioning: Defining your "Blue Ocean" and brand enemy.`,
            "Visual Identity System: Logo, Color Psychology, Typography & Usage Guidelines.",
            `High-Performance Website: A conversion-focused 5-page site (Webflow/Framer) designed for the "0.5 Second" trust test.`,
            "Mobile Optimization: Speed-engineered for Indian 5G networks.",
          ].map((f, i) => (
            <li key={i} style={styles.featureItem}>
              <span style={styles.bullet}>■</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <p style={styles.bestFor}><strong>Best For:</strong> Startups, First-Time Founders, & Rebrands.</p>

        <p style={styles.price}>
          Starts From: <strong style={styles.priceNum}>₹1,00,000</strong>
          <span style={styles.priceNote}> One time project fee</span>
        </p>

        <a href="/contact" style={styles.cta}>START THE BUILD</a>

      </div>

    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#ffffff",
    width: "100%",
    padding: "80px 40px",
  },
  header: {
    marginBottom: "60px",
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "24px",
  },
  dot: {
    width: "18px",
    height: "18px",
    background: "#e8400c",
    flexShrink: 0,
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.1em",
    color: "#111111",
  },
  heading: {
    margin: 0,
    lineHeight: "1.15",
  },
  headingLight: {
    fontSize: "clamp(36px, 5vw, 64px)",
    fontWeight: "400",
    color: "#888888",
  },
  headingBold: {
    fontSize: "clamp(36px, 5vw, 64px)",
    fontWeight: "700",
    color: "#111111",
  },
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    padding: "60px 48px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  planName: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111111",
    margin: 0,
    letterSpacing: "0.02em",
  },
  tag: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#e8400c",
    background: "rgba(232,64,12,0.1)",
    padding: "6px 14px",
    letterSpacing: "0.08em",
  },
  promise: {
    fontSize: "15px",
    color: "#444444",
    lineHeight: "1.7",
    margin: 0,
  },
  featureList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  featureItem: {
    display: "flex",
    gap: "12px",
    fontSize: "15px",
    color: "#222222",
    lineHeight: "1.5",
  },
  bullet: {
    color: "#111111",
    fontSize: "10px",
    marginTop: "4px",
    flexShrink: 0,
  },
  bestFor: {
    fontSize: "15px",
    color: "#444444",
    margin: 0,
  },
  price: {
    fontSize: "16px",
    color: "#444444",
    margin: 0,
  },
  priceNum: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111111",
  },
  priceNote: {
    fontSize: "13px",
    color: "#888888",
  },
  cta: {
    display: "block",
    textAlign: "center",
    background: "#111111",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.1em",
    padding: "20px",
    textDecoration: "none",
    marginTop: "8px",
  },
};