"use client";

import React, { useState } from "react";

const testimonials = [
  {
    name: "Prerit Gautam",
    role: "CEO - Clik.ai",
    company: "Clik.ai",
    companyLogo: "/images/testimonials/clik-logo.png",
    feedback: "From strategy to execution, they integrated seamlessly into our workflow and brought clarity to every step of the process.",
    image: "/images/prerit.avif",
    rating: 5,
  },
  {
    name: "Person Two",
    role: "Role - Company 2",
    company: "Company 2",
    companyLogo: "/images/testimonials/company2-logo.png",
    feedback: "Feedback text for second testimonial goes here.",
    image: "/images/f1.avif",
    rating: 5,
  },
  {
    name: "Person Three",
    role: "Role - Company 3",
    company: "Company 3",
    companyLogo: "/images/testimonials/company3-logo.png",
    feedback: "Feedback text for third testimonial goes here.",
    image: "/images/f2.avif",
    rating: 5,
  },
  {
    name: "Person Four",
    role: "Role - Company 4",
    company: "Company 4",
    companyLogo: "/images/testimonials/company4-logo.png",
    feedback: "Feedback text for fourth testimonial goes here.",
    image: "/images/f3.avif",
    rating: 5,
  },
];

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
        <div style={styles.container}>

          {/* ── Left col ── */}
          <div style={styles.leftCol}>

            {/* Big active image */}
            <div style={styles.mainImageWrapper} key={active} className="testimonial-fade">
              <img
                src={current.image}
                alt={current.name}
                style={styles.mainImage}
              />
            </div>

            {/* 3 thumbnails — active wala hide */}
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

            {/* Company logo + divider + stars */}
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
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
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