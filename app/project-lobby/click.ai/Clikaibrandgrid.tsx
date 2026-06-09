"use client";

import React from "react";

export default function ClikAiBrandGrid() {
  return (
    <>
      <style>{`
        .brand-grid {
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .brand-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <div className="brand-grid">
        <img src="/images/blue.jpg" alt="Brand grid" />
      </div>
    </>
  );
}