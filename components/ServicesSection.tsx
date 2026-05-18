"use client";

import { useState } from "react";

const services = [
  { id: "01", title: "Performance Marketing" },
  { id: "02", title: "Social Media Marketing" },
  { id: "03", title: "Advanced SEO Services" },
  { id: "04", title: "Brand Strategy & Identity" },
  { id: "05", title: "Packaging Design" },
  { id: "06", title: "Website Design & Development" },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section}>

      {/* Label */}
      <div style={styles.labelRow}>
        <span style={styles.dot} />
        <span style={styles.label}>SERVICES</span>
      </div>

      {/* Heading */}
      <div style={styles.headingBlock}>
        <h1 style={styles.heading}>Services</h1>
        <p style={styles.subheading}>
          Services Built to Help Brands Become Category Leaders
        </p>
      </div>

      {/* What We Offer Row */}
      <div style={styles.offerRow}>
        <div style={styles.offerLeft}>
          <span style={styles.dot} />
          <span style={styles.label}>WHAT WE TO OFFER</span>
        </div>
        <p style={styles.offerText}>
          We help businesses grow through a complete ecosystem of digital
          services, from visibility and traffic to branding, design, and
          performance. Whether you're launching a new brand or scaling an
          existing one, our strategies are designed to deliver measurable,
          long-term growth.
        </p>
      </div>

      {/* Services List */}
      <div style={styles.list}>
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={service.id}>
              <div style={styles.divider} />
              <button
                onClick={() => toggle(index)}
                style={styles.row}
              >
                <span style={styles.num}>{service.id}.</span>
                <span style={styles.title}>{service.title}</span>
                <span style={{
                  ...styles.plusBox,
                  backgroundColor: isOpen ? "#111111" : "transparent",
                  color: isOpen ? "#ffffff" : "#111111",
                }}>
                  {isOpen ? "×" : "+"}
                </span>
              </button>
            </div>
          );
        })}
        <div style={styles.divider} />
      </div>

    </section>
  );
}

const styles = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#ffffff",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "60px 40px",
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "48px",
  },
  dot: {
    width: "18px",
    height: "18px",
    minWidth: "18px",
    backgroundColor: "#e8400c",
    display: "inline-block",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.1em",
    color: "#111111",
  },
  headingBlock: {
    marginBottom: "80px",
    paddingLeft: "0",
    textAlign: "center",
  },
  heading: {
    fontSize: "72px",
    fontWeight: "700",
    color: "#111111",
    margin: "0 0 24px 0",
    letterSpacing: "-0.02em",
    lineHeight: "1",
  },
  subheading: {
    fontSize: "32px",
    fontWeight: "400",
    color: "#555555",
    margin: "0",
    lineHeight: "1.4",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  offerRow: {
    display: "flex",
    gap: "40px",
    marginBottom: "60px",
    alignItems: "flex-start",
  },
  offerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    minWidth: "220px",
  },
  offerText: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#555555",
    margin: "0",
    flex: 1,
  },
  list: {
    width: "100%",
  },
  divider: {
    borderTop: "0.5px solid #d4d4ce",
  },
  row: {
    width: "100%",
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
    padding: "28px 0",
    cursor: "pointer",
    gap: "24px",
  },
  num: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#888888",
    minWidth: "40px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "500",
    color: "#111111",
    flex: 1,
    textAlign: "left",
  },
  plusBox: {
    width: "40px",
    height: "40px",
    border: "1px solid #111111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "300",
    transition: "all 0.2s ease",
    flexShrink: 0,
  },
};