"use client";

import React, { useState } from "react";
import { testimonials } from "./testimonials.data";

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .testimonial-fade {
          animation: fadeIn 0.35s ease forwards;
        }
        .thumb-item {
          cursor: pointer;
          border: 2px solid transparent;
          border-radius: 6px;
          overflow: hidden;
          transition: border-color 0.2s ease, opacity 0.2s ease;
          opacity: 0.6;
          width: 88px;
          height: 88px;
          flex-shrink: 0;
        }
        .thumb-item:hover { opacity: 0.85; }
        .thumb-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(100%);
          display: block;
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.wrapper}>

          {/* ── Header ── */}
          <div style={styles.header}>
            <div style={styles.labelRow}>
              <div style={styles.orangeSquare} />
              <span style={styles.label}>TESTIMONIALS</span>
            </div>
            <div style={styles.headerRight}>
              <h2 style={styles.heading}>
                Real Results,<br />
                <span style={styles.headingBold}>Real Impact</span>
              </h2>
            </div>
          </div>

          {/* ── Main content ── */}
          <div style={styles.container}>

            {/* ── Left col ── */}
            <div style={styles.leftCol}>
              <div style={styles.mainImageWrapper} key={active} className="testimonial-fade">
                <img src={current.image} alt={current.name} style={styles.mainImage} />
              </div>
              <div style={styles.thumbRow}>
                {testimonials
                  .filter((_, i) => i !== active)
                  .map((t) => {
                    const originalIndex = testimonials.findIndex(x => x.name === t.name);
                    return (
                      <div
                        key={originalIndex}
                        className="thumb-item"
                        onClick={() => setActive(originalIndex)}
                      >
                        <img src={t.image} alt={t.name} />
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* ── Right col ── */}
            <div style={styles.rightCol} key={active + "-content"} className="testimonial-fade">
              <div style={styles.topRow}>
                <div style={styles.companyLogoWrapper}>
                  <img src={current.companyLogo} alt={current.company} style={styles.companyLogo} />
                </div>
                <div style={styles.divider} />
                <div style={styles.stars}>
                  {[...Array(current.rating)].map((_, i) => (
                    <span key={i} style={styles.star}>★</span>
                  ))}
                </div>
              </div>
              <h2 style={styles.feedbackLabel}>Feedback</h2>
              <p style={styles.quote}>{current.feedback}</p>
              <h3 style={styles.name}>{current.name}</h3>
              <p style={styles.role}>{current.role}</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "80px 0 60px",
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "40px",
    alignItems: "flex-start",
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingTop: "8px",
  },
  orangeSquare: {
    width: "18px",
    height: "18px",
    backgroundColor: "#e8400c",
    borderRadius: "2px",
    flexShrink: 0,
  },
  label: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "13px",
    fontWeight: 500,
    color: "#111111",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  headerRight: {},
  heading: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "clamp(40px, 5vw, 68px)",
    fontWeight: 400,
    color: "#888888",
    margin: 0,
    lineHeight: "105%",
    letterSpacing: "-0.03em",
  },
  headingBold: {
    fontWeight: 700,
    color: "#111111",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    alignItems: "flex-start",
  },
  leftCol: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  mainImageWrapper: {
    width: "100%",
    aspectRatio: "3 / 4",
    overflow: "hidden",
    borderRadius: "4px",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    display: "block",
  },
  thumbRow: {
    display: "flex",
    gap: "12px",
  },
  rightCol: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "40px",
  },
  companyLogoWrapper: { flexShrink: 0 },
  companyLogo: {
    height: "24px",
    width: "auto",
    objectFit: "contain",
  },
  divider: {
    flex: 1,
    height: "1px",
    backgroundColor: "#e0e0e0",
  },
  stars: { display: "flex", gap: "2px", flexShrink: 0 },
  star: { color: "#e8400c", fontSize: "18px" },
  feedbackLabel: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "48px",
    fontWeight: 400,
    color: "#111111",
    margin: "0 0 24px 0",
    letterSpacing: "-0.02em",
    lineHeight: "100%",
  },
  quote: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "18px",
    fontWeight: 400,
    color: "#444444",
    lineHeight: "155%",
    margin: "0 0 40px 0",
  },
  name: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "40px",
    fontWeight: 400,
    color: "#111111",
    margin: "0 0 8px 0",
    letterSpacing: "-0.02em",
    lineHeight: "110%",
  },
  role: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "16px",
    fontWeight: 400,
    color: "#888888",
    margin: 0,
  },
};