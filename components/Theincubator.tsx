"use client";

import React, { useState } from "react";

const features = [
  "Fractional CMO: We join your leadership Slack/Weekly calls.",
  "Full Tech Injection: Access to senior developers (Node.js/React) for custom tools/apps.",
  'The "Alpha" Network: Direct introductions to our investor & PR network.',
  "Omnichannel Reputation: Podcast, PR, and Founder Branding management.",
];

export default function TheIncubator() {
  const [checked, setChecked] = useState<boolean[]>(features.map(() => false));

  const toggle = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <> 
      <style>{`
        .incubator-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 60px;
          box-sizing: border-box;
          font-family: "Apfel Grotezk", "DM Sans", sans-serif;
        }

        .incubator-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .incubator-title {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 700;
          color: #111111;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0;
        }

        .incubator-badge {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f4956e;
          border: 1px solid #f4956e;
          padding: 6px 14px;
          border-radius: 4px;
          flex-shrink: 0;
          background: #fff5f0;
        }

        .incubator-desc {
          font-size: 15px;
          font-weight: 400;
          color: #444444;
          line-height: 1.7;
          margin: 0 0 36px 0;
          max-width: 100%;
        }

        .incubator-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .incubator-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          cursor: pointer;
        }

        .incubator-checkbox {
          width: 18px;
          height: 18px;
          border: none;
          background: #1a1a1a;
          border-radius: 3px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .incubator-checkbox.checked {
          background: #f4956e;
        }

        .incubator-checkbox svg {
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .incubator-checkbox.checked svg {
          opacity: 1;
        }

        .incubator-feature-text {
          font-size: 15px;
          font-weight: 400;
          color: #222222;
          line-height: 1.5;
          transition: color 0.2s ease;
        }

        .incubator-feature-row:hover .incubator-feature-text {
          color: #000000;
        }

        .incubator-target {
          font-size: 15px;
          font-weight: 400;
          color: #444444;
          margin-bottom: 28px;
          line-height: 1.5;
        }

        .incubator-price-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 28px;
          padding: 0 8px;
        }

        .incubator-price-amount {
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 700;
          color: #111111;
          letter-spacing: -0.02em;
        }

        .incubator-price-cadence {
          font-size: 13px;
          font-weight: 400;
          color: #888888;
          letter-spacing: 0.02em;
        }

        .incubator-cta {
          width: 100%;
          padding: 20px;
          background: #111111;
          color: #ffffff;
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

        .incubator-cta:hover {
          background: #2a2a2a;
          transform: translateY(-1px);
        }
      `}</style>

      <section className="incubator-section">

        {/* Top: title + badge */}
        <div className="incubator-top">
          <h2 className="incubator-title">The Incubator</h2>
          <span className="incubator-badge">The Incubator</span>
        </div>

        {/* Description */}
        <p className="incubator-desc">
          The Promise: We stop being an agency. We become your partners. We invest our senior talent, tech resources,
          and network in exchange for long-term upside. You get a Fractional CMO and a full Tech Team without the hiring headache.
        </p>

        {/* Features checklist */}
        <div className="incubator-features">
          {features.map((f, i) => (
            <div key={i} className="incubator-feature-row" onClick={() => toggle(i)}>
              <div className={`incubator-checkbox${checked[i] ? " checked" : ""}`}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="incubator-feature-text">{f}</span>
            </div>
          ))}
        </div>

        {/* Target */}
        <p className="incubator-target">
          Best for Visionary Founders aiming for an Exit, Funding, or Monopoly status.
        </p>

        {/* Price */}
        <div className="incubator-price-row">
          <span className="incubator-price-amount">Application Only</span>
          <span className="incubator-price-cadence">Custom Retainer + Equity</span>
        </div>

        {/* CTA */}
        <button className="incubator-cta">Apply for Incubation</button>

      </section>
    </>
  );
}