"use client";

import { useState } from "react";

const projects = [
  { id: "01", name: "AP2V.com", type: "Branding & Website", year: "2023" },
  { id: "02", name: "Astro Shyamsa", type: "Social Media & Marketing", year: "2024" },
  { id: "03", name: "Clay Beauty", type: "Branding, Marketing & Website", year: "2025" },
];

export default function ProjectArchive() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      backgroundColor: "#f0efeb",
      minHeight: "100vh",
      color: "#1a1a1a",
    }}>
      {/* Nav */}
      <nav style={{
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 32px",
        height: "60px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Logo icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5"/>
            <path d="M9 14h10M14 9v10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="14" cy="14" r="3" stroke="white" strokeWidth="1.5"/>
          </svg>
          <span style={{ color: "white", fontWeight: "700", letterSpacing: "0.12em", fontSize: "13px", textTransform: "uppercase" }}>
            Brand Hubble
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer" }}>
          <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "white" }}/>
          <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "white" }}/>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: "64px 32px 48px" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.08em", color: "#888", marginBottom: "16px" }}>
          2023—2025
        </p>
        <h1 style={{
          fontSize: "clamp(72px, 12vw, 120px)",
          fontWeight: "800",
          lineHeight: "1",
          letterSpacing: "-0.03em",
          margin: 0,
          color: "#111",
        }}>
          Archive
        </h1>
      </div>

      {/* Table */}
      <div style={{ padding: "0 32px 80px" }}>
        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 160px 48px",
          padding: "12px 0",
          borderBottom: "1px solid #d0cec8",
          marginBottom: "0",
        }}>
          {["Project name", "Type", "Year", "..."].map((h, i) => (
            <span key={i} style={{
              fontSize: "12px",
              color: "#999",
              letterSpacing: "0.04em",
              textAlign: i === 3 ? "right" : "left",
            }}>{h}</span>
          ))}
        </div>

        {/* Rows */}
        {projects.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 160px 48px",
              padding: "28px 0",
              borderBottom: "1px solid #d0cec8",
              cursor: "pointer",
              transition: "background 0.15s",
              backgroundColor: hovered === p.id ? "rgba(0,0,0,0.03)" : "transparent",
              margin: "0 -16px",
              padding: "28px 16px",
            }}
          >
            <span style={{
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: "500",
              color: hovered === p.id ? "#111" : "#1a1a1a",
              transition: "color 0.15s",
              letterSpacing: "-0.01em",
            }}>
              {p.name}
            </span>
            <span style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#777",
              alignSelf: "center",
            }}>
              {p.type}
            </span>
            <span style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#777",
              alignSelf: "center",
            }}>
              {p.year}
            </span>
            <span style={{
              fontSize: "13px",
              color: "#bbb",
              alignSelf: "center",
              textAlign: "right",
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "0.05em",
            }}>
              {p.id}
            </span>
          </div>
        ))}

        {/* Footer tagline */}
        <div style={{
          marginTop: "64px",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#888",
            letterSpacing: "0.02em",
          }}>
            we have transformed 50+ businesses
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}