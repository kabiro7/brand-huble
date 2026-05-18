"use client";

import React from "react";

const services = [
  { label: "Advanced SEO", href: "./services/seo" },
  { label: "Performance Marketing", href: "./services/marketing" },
  { label: "Brand Strategy & Identity", href: "./services/brand-strategy" },
  { label: "Web Development (UX/UI)", href: "./services/web-development" },
];

const repeat = Array(12).fill("BRAND HUBBLE");

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 100s linear infinite;
        }
        .marquee-item {
          font-family: "Wormbox Rounded", "Wormbox Rounded Placeholder", sans-serif;
          font-size: 302px;
          font-weight: 700;
          color: #F2F8FC;
          letter-spacing: -0.04em;
          line-height: 100%;
          padding-right: 80px;
          user-select: none;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .service-link {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 20px;
          font-weight: 400;
          color: #FFFFFF;
          text-decoration: none;
          letter-spacing: 0;
          display: block;
          text-align: right;
        }
        .service-link:hover {
          opacity: 0.8;
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.bgOverlay} />
        <div style={styles.bgTexture} />

        <div style={styles.content}>
          <div style={styles.left}>
            <div style={styles.rating}>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={styles.star}>★</span>
                ))}
              </div>
              <span style={styles.ratingText}>4.9 / 5</span>
            </div>
            <p style={styles.heading}>
              We Build<br />
              Category-Leading Brands
            </p>
          </div>

          <div style={styles.right}>
            {services.map((s) => (
              <a key={s.label} href={s.href} className="service-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {repeat.map((text, i) => (
              <span key={i} className="marquee-item">{text}</span>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#2a2a2a",
    backgroundImage: "url('/images/homevr.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
  },
  bgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.3) 100%)",
    zIndex: 1,
  },
  bgTexture: {
    opacity: 0.05,
    inset: "-200%",
    width: "400%",
    height: "400%",
    position: "absolute",
    willChange: "transform",
    transform: "translateX(-10%) translateY(10%)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "0 40px 32px",
    marginTop: "auto",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  stars: {
    display: "flex",
    gap: "4px",
  },
  star: {
    color: "#e8400c",
    fontSize: "18px",
  },
  ratingText: {
    color: "#F2F8FC",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.04em",
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
  },
  heading: {
    fontSize: "30px",
    fontWeight: "500",
    color: "#F2F8FC",
    margin: 0,
    lineHeight: "110%",
    letterSpacing: "-0.02em",
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "8px",
  },
};