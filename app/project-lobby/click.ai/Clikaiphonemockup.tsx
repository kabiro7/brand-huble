"use client";

import React from "react";

export default function ClikAiPhoneMockup() {
  return (
    <>
      <style>{`
        .phone-section {
          width: 100%;
          padding: 40px;
          box-sizing: border-box;
          background: #ffffff;
        }

        .phone-outer {
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }

        .phone-bg-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          display: block;
        }

        /* White border frame on top of image */
        .phone-frame {
          position: absolute;
          top: 32px;
          left: 80px;
          right: 80px;
          bottom: 32px;
          border: 1.5px solid rgba(255, 255, 255, 0.8);
          border-radius: 4px;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .phone-section { padding: 20px; }
          .phone-frame {
            top: 16px;
            left: 24px;
            right: 24px;
            bottom: 16px;
          }
        }
      `}</style>

      <section className="phone-section">
        <div className="phone-outer">
          <img
            src="/images/phone.jpg"
            alt="clik.ai mobile mockup"
            className="phone-bg-image"
          />
          <div className="phone-frame" />
        </div>
      </section>
    </>
  );
}