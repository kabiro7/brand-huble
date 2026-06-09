"use client";

import React from "react";

export default function ClikAiCampaign() {
  return (
    <>
      <style>{`
        .campaign-section {
          width: 100%;
          background: #f2f2f0;
          padding: 80px 40px 0px;
          box-sizing: border-box;
        }

        /* Top: number + title + desc */
        .campaign-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          margin-bottom: 60px;
        }

        .campaign-number {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #111111;
        }

        .campaign-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .campaign-title {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: clamp(48px, 7vw, 96px);
          font-weight: 400;
          color: #111111;
          letter-spacing: -0.03em;
          line-height: 100%;
          margin: 0;
        }

        .campaign-desc {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #666666;
          line-height: 160%;
          max-width: 480px;
          margin: 0;
        }

        /* Image container */
        .campaign-image-wrap {
          width: 100%;
          background: #111111;
          border-radius: 24px 24px 0 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          box-sizing: border-box;
        }

        .campaign-image {
          width: 100%;
          max-width: 100%;
          display: block;
          border-radius: 0;
        }

        @media (max-width: 768px) {
          .campaign-section { padding: 60px 20px 0; }
          .campaign-top { grid-template-columns: 1fr; gap: 16px; }
          .campaign-image-wrap { padding: 40px 24px 0; }
        }
      `}</style>

      <section className="campaign-section">

        {/* Top text */}
        <div className="campaign-top">
          <span className="campaign-number">01</span>
          <div className="campaign-right">
            <h2 className="campaign-title">Campaign</h2>
            <p className="campaign-desc">
              We started by identifying the core message and audience insights,
              then developed a creative concept, produced compelling assets, and
              launched a multi-channel campaign designed to drive engagement and
              measurable growth.
            </p>
          </div>
        </div>

        {/* Image container — apni diagram image yahan daalo */}
        <div className="campaign-image-wrap">
          <img
            src="/images/capige.jpg"
            alt="Brand Identity Diagram"
            className="campaign-image"
          />
        </div>

      </section>
    </>
  );
}