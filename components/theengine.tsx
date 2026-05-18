"use client";

import React, { useState } from "react";

const features = [
  "Social media grid & content strategy",
  'Performance Ads: Management of Meta (FB/IG) & Google Ad campaigns.',
  'Funnel Optimization: Monthly tweaks to landing pages to fix conversion "leaks."',
  "AEO (AI Search) Strategy: Optimizing your content to rank in Google SGE summaries.",
];

export default function TheEngine() {
  const [checked, setChecked] = useState<boolean[]>(features.map(() => false));

  const toggle = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <>
      <style>{`
        .engine-section {
          width: 100%;
          background: #111111;
          padding: 80px 60px;
          box-sizing: border-box;
          font-family: "Apfel Grotezk", "DM Sans", sans-serif;
        }

        .engine-inner {
          max-width: 100%;
        }

        /* ── Top row ── */
        .engine-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .engine-title {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0;
        }

        .engine-badge {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f4956e;
          border: 1px solid #f4956e;
          padding: 6px 14px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        /* ── Description ── */
        .engine-desc {
          font-size: 15px;
          font-weight: 400;
          color: #aaaaaa;
          line-height: 1.7;
          margin: 0 0 36px 0;
          max-width: 900px;
        }

        /* ── Checklist ── */
        .engine-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .engine-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          cursor: pointer;
        }

        .engine-checkbox {
          width: 18px;
          height: 18px;
          border: 2px solid #555555;
          border-radius: 3px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .engine-checkbox.checked {
          border-color: #f4956e;
          background: #f4956e;
        }

        .engine-checkbox svg {
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .engine-checkbox.checked svg {
          opacity: 1;
        }

        .engine-feature-text {
          font-size: 15px;
          font-weight: 400;
          color: #cccccc;
          line-height: 1.5;
          transition: color 0.2s ease;
        }

        .engine-feature-row:hover .engine-feature-text {
          color: #ffffff;
        }

        /* ── Target line ── */
        .engine-target {
          font-size: 15px;
          font-weight: 400;
          color: #888888;
          margin-bottom: 28px;
          line-height: 1.5;
        }

        /* ── Price ── */
        .engine-price-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 28px;
          padding: 0 8px;
        }

        .engine-price-label {
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
        }

        .engine-price-amount {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .engine-price-cadence {
          font-size: 13px;
          font-weight: 400;
          color: #666666;
          letter-spacing: 0.02em;
        }

        /* ── CTA ── */
        .engine-cta {
          width: 100%;
          padding: 20px;
          background: #ffffff;
          color: #111111;
          font-family: "Apfel Grotezk", "DM Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .engine-cta:hover {
          background: #f0f0f0;
          transform: translateY(-1px);
        }
      `}</style>

      <section className="engine-section">
        <div className="engine-inner">

          {/* Top: title + badge */}
          <div className="engine-top">
            <h2 className="engine-title">The Engine</h2>
            <span className="engine-badge">Growth</span>
          </div>

          {/* Description */}
          <p className="engine-desc">
            The Promise: A monthly performance machine. We stop guessing and start engineering "Traffic" into "Cash."
            This isn't maintenance; it's aggressive expansion using Content and AI Search Architecture.
          </p>

          {/* Features checklist */}
          <div className="engine-features">
            {features.map((f, i) => (
              <div key={i} className="engine-feature-row" onClick={() => toggle(i)}>
                <div className={`engine-checkbox${checked[i] ? " checked" : ""}`}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="engine-feature-text">{f}</span>
              </div>
            ))}
          </div>

          {/* Target audience */}
          <p className="engine-target">
            Visionary Founders aiming for an Exit, Funding, or Monopoly status.
          </p>

          {/* Price */}
          <div className="engine-price-row">
            <span className="engine-price-label">Starts From:</span>
            <span className="engine-price-amount">₹60,000</span>
            <span className="engine-price-cadence">Monthly Retainer</span>
          </div>

          {/* CTA */}
          <button className="engine-cta">Ignite the Engine</button>

        </div>
      </section>
    </>
  );
} 