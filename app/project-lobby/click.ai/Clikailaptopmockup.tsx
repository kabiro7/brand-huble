"use client";

import React from "react";

export default function ClikAiLaptopMockup() {
  return (
    <>
      <style>{`
        .laptop-section {
          width: 100%;
          padding: 40px;
          box-sizing: border-box;
          background: #ffffff;
        }

        .laptop-outer {
          width: 100%;
          background: #111111;
          border-radius: 24px;
          padding: 24px;
          box-sizing: border-box;
        }

        .laptop-inner {
          width: 100%;
          background: #f2f2f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .laptop-image {
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .laptop-section { padding: 20px; }
          .laptop-outer { padding: 16px; border-radius: 16px; }
        }
      `}</style>

      <section className="laptop-section">
        <div className="laptop-outer">
          <div className="laptop-inner">
            <img
              src="/images/laptop.jpg"
              alt="clik.ai laptop mockup"
              className="laptop-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}