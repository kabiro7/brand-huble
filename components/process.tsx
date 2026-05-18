"use client";

import React, { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your brand, goals, audience, and competition. Deep research forms the foundation of everything we build.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Ideas take shape. We translate insights into creative directions — moodboards, strategy frameworks, and initial design concepts.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Concepts become reality. Our team builds, designs, and develops with precision — every detail crafted to match the vision.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We go live with confidence. Post-launch support, performance tracking, and iteration ensure your brand hits the ground running.",
  },
];

// Salmon gradient — lightest to darkest matching the image
const stepColors = [
  "#fde8e0", // 01 Discovery — very light salmon/peach
  "#f9c4b0", // 02 Concept — light salmon
  "#f4956e", // 03 Execution — medium salmon-orange
  "#ef7a55", // 04 Launch — deeper coral-orange
];

const textColors = [
  "#1a1a1a",
  "#1a1a1a",
  "#1a1a1a",
  "#1a1a1a",
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');

        .process-section * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .process-section {
          width: 100%;
          background: #ffffff;
          font-family: "Apfel Grotezk", "DM Sans", sans-serif;
        }

        /* ── Header ── */
        .process-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 80px 60px 60px;
          gap: 40px;
        }

        .process-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .process-tag-dot {
          width: 18px;
          height: 18px;
          background: #e8450a;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .process-tag-label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #111111;
        }

        .process-subtitle {
          font-size: 17px;
          font-weight: 400;
          color: #333333;
          line-height: 1.6;
          max-width: 620px;
          text-align: right;
        }

        /* ── Steps ── */
        .process-steps {
          width: 100%;
        }

        .process-step {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 60px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: padding 0.4s ease;
        }

        .process-step-left {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .process-step-title {
          font-family: "Apfel Grotezk", "DM Sans", sans-serif;
          font-size: clamp(32px, 4.5vw, 60px);
          font-weight: 700;
          color: #111111;
          line-height: 1;
          letter-spacing: -0.02em;
          transition: transform 0.3s ease;
        }

        .process-step:hover .process-step-title {
          transform: translateX(8px);
        }

        .process-step-description {
          font-size: 15px;
          color: #444444;
          line-height: 1.6;
          max-width: 400px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.3s ease, margin 0.3s ease;
          margin-top: 0;
        }

        .process-step.expanded .process-step-description {
          max-height: 120px;
          opacity: 1;
          margin-top: 12px;
        }

        .process-step-number {
          font-family: "Apfel Grotezk", "DM Sans", sans-serif;
          font-size: clamp(70px, 10vw, 140px);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1;
          letter-spacing: -0.04em;
          user-select: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
          margin-top: -10px;
          margin-bottom: -10px;
        }

        .process-step:hover .process-step-number {
          opacity: 0.8;
          transform: scale(1.03);
        }

        .process-step-inner {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <section className="process-section">

        {/* Header */}
        <div className="process-header">
          <div className="process-tag">
            <div className="process-tag-dot" />
            <span className="process-tag-label">Process</span>
          </div>
          <p className="process-subtitle">
            Let's dive into the process. From first idea to final launch, every step is clear and intentional.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`process-step${activeStep === i ? " expanded" : ""}`}
              style={{ backgroundColor: stepColors[i] }}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
            >
              <div className="process-step-inner">
                <span className="process-step-title" style={{ color: textColors[i] }}>
                  {step.title}
                </span>
                <p className="process-step-description">{step.description}</p>
              </div>
              <span className="process-step-number">{step.number}</span>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}