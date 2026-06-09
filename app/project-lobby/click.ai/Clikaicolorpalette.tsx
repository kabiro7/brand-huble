"use client";

import React from "react";

const colors = [
  // Row 1
  { hex: "#1515FF", textColor: "#ffffff" },
  { hex: "#5ABCFF", textColor: "#ffffff" },
  { hex: "#E7E7E7", textColor: "#111111" },
  // Row 2
  { hex: "#000000", textColor: "#ffffff" },
  { hex: "#050540", textColor: "#ffffff" },
  { hex: "#FFFFFF", textColor: "#111111" },
];

export default function ClikAiColorPalette() {
  return (
    <>
      <style>{`
        .color-section {
          width: 100%;
          padding: 40px;
          box-sizing: border-box;
          background: #ffffff;
        }

        .color-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 300px);
          border-radius: 24px;
          overflow: hidden;
        }

        .color-cell {
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .color-hex {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .color-section { padding: 20px; }
          .color-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 200px);
            border-radius: 16px;
          }
        }
      `}</style>

      <section className="color-section">
        <div className="color-grid">
          {colors.map((color, i) => (
            <div
              key={i}
              className="color-cell"
              style={{ backgroundColor: color.hex }}
            >
              <span className="color-hex" style={{ color: color.textColor }}>
                {color.hex}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}