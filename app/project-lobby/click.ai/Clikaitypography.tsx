"use client";

import React from "react";

export default function ClikAiTypography() {
  return (
    <>
      <style>{`
        .typography-section {
          width: 100%;
          padding: 40px;
          box-sizing: border-box;
          background: #ffffff;
        }

        .typography-card {
          width: 100%;
          background: #0a0a4a;
          border-radius: 24px;
          padding: 48px;
          box-sizing: border-box;
          position: relative;
        }

        .typo-label {
          position: absolute;
          top: 48px;
          right: 48px;
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
        }

        .typo-font-name {
          font-family: "SF Pro Display", "SF Pro", -apple-system, sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: underline;
          text-underline-offset: 6px;
          margin: 0 0 80px 0;
        }

        .typo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Left column */
        .typo-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .typo-heading {
          font-family: "SF Pro Display", "SF Pro", -apple-system, sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 110%;
        }

        .typo-subheading1 {
          font-family: "SF Pro Display", "SF Pro", -apple-system, sans-serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .typo-subheading2 {
          font-family: "SF Pro Display", "SF Pro", -apple-system, sans-serif;
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 500;
          color: #ffffff;
          margin: 0;
        }

        /* Middle column */
        .typo-middle {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding-top: 16px;
        }

        .typo-body1 {
          font-family: "SF Pro Display", "SF Pro", -apple-system, sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255,255,255,0.8);
          margin: 0;
        }

        .typo-body2 {
          font-family: "SF Pro Display", "SF Pro", -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.8);
          margin: 0;
        }

        /* Right column */
        .typo-right {
          padding-top: 8px;
        }

        .typo-alphabet {
          font-family: "SF Pro Display", "SF Pro", -apple-system, sans-serif;
          font-size: clamp(18px, 2vw, 26px);
          font-weight: 400;
          color: #ffffff;
          line-height: 145%;
          margin: 0;
        }

        @media (max-width: 768px) {
          .typography-section { padding: 20px; }
          .typography-card { padding: 32px 24px; }
          .typo-grid { grid-template-columns: 1fr; gap: 32px; }
          .typo-label { top: 24px; right: 24px; }
          .typo-font-name { margin-bottom: 48px; }
        }
      `}</style>

      <section className="typography-section">
        <div className="typography-card">

          <span className="typo-label">Typography</span>

          <p className="typo-font-name">SF Pro</p>

          <div className="typo-grid">

            {/* Left — headings */}
            <div className="typo-left">
              <p className="typo-heading">Heading/Titles</p>
              <p className="typo-subheading1">Sub Heading 1</p>
              <p className="typo-subheading2">Sub heading 2</p>
            </div>

            {/* Middle — body */}
            <div className="typo-middle">
              <p className="typo-body1">Paragraph/Body 1</p>
              <p className="typo-body2">Paragraph/Body 2</p>
            </div>

            {/* Right — alphabet */}
            <div className="typo-right">
              <p className="typo-alphabet">
                abcdefghijklmnop<br />
                qrstuvwxyz<br />
                0123456789
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}