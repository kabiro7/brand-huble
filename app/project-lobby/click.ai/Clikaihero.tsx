"use client";

import React from "react";

export default function ClikAiHero() {
  return (
    <>
      <style>{`
        .hero {
          width: 100%;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Full background image */
        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          z-index: 0;
        }

        /* Dark overlay taaki text readable rahe */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.75) 0%,
            rgba(0, 0, 0, 0.2) 60%,
            rgba(0, 0, 0, 0.0) 100%
          );
          z-index: 1;
        }

        /* Left side text */
        .hero-left {
          position: absolute;
          bottom: 80px;
          left: 40px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .hero-title {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: clamp(80px, 10vw, 140px);
          font-weight: 700;
          color: #ffffff;
          line-height: 100%;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .hero-desc {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          line-height: 145%;
          max-width: 360px;
          margin: 0;
        }

        /* Bottom bar */
        .hero-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 24px 40px;
          gap: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 2;
        }

        .hero-service {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: clamp(18px, 2.5vw, 28px);
          font-weight: 400;
          color: #ffffff;
          white-space: nowrap;
        }

        .hero-plus {
          font-size: clamp(18px, 2.5vw, 28px);
          color: rgba(255, 255, 255, 0.5);
          padding: 0 8px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-left {
            bottom: 100px;
            left: 24px;
            right: 24px;
          }
          .hero-bottom-bar {
            padding: 20px 24px;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 8px;
          }
        }
      `}</style>

      <section className="hero">

        {/* Full background image */}
        <img
          src="/images/p6.avif"
          alt="clik.ai project"
          className="hero-bg"
        />

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Left text */}
        <div className="hero-left">
          <h1 className="hero-title">clik.ai</h1>
          <p className="hero-desc">
            Bold branding that represents advance ai-driven technological tools of the company.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="hero-bottom-bar">
          <span className="hero-service">Brand Identity</span>
          <span className="hero-plus">+</span>
          <span className="hero-service">Product Experience</span>
        </div>

      </section>
    </>
  );
}