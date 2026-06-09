"use client";

import React from "react";

export default function ClikAiBillboard() {
  return (
    <section style={{
      width: "100%",
      padding: "40px",
      boxSizing: "border-box",
      background: "#ffffff",
    }}>
      <img
        src="/images/billboard.jpg"
        alt="clik.ai billboard"
        style={{
          width: "100%",
          display: "block",
          borderRadius: "24px",
        }}
      />
    </section>
  );
}