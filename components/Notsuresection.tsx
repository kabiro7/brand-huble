"use client";

export default function NotSureSection() {
  return (
    <section style={styles.section}>

      {/* Logo */}
      <div style={styles.topRow}>
        <span style={styles.logo}>BRAND HUBBLE</span>
        <span style={styles.plus}>+</span>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <div style={styles.left}>
          <h2 style={styles.heading}>Not Sure Which Service You Need?</h2>
          <p style={styles.description}>
            If you're unsure where to start, book a free discovery call and
            we'll recommend the right strategy for your business.
          </p>
        </div>

        {/* Call suggestions */}
        <div style={styles.right}>
          <a href="#" style={styles.cta}>
            <span style={styles.arrow}>↗</span>
            <span style={styles.ctaText}>Get a Free Strategy Call</span>
          </a>
        </div>
      </div>

    </section>
  );
}

const styles = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#ffffff",
    maxWidth: "100%",
    padding: "48px 40px 80px 40px",
    borderTop: "0.5px solid #d4d4ce",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "80px",
  },
  logo: {
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.08em",
    color: "#111111",
  },
  plus: {
    fontSize: "28px",
    fontWeight: "300",
    color: "#111111",
    lineHeight: "1",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "40px",
  },
  left: {
    maxWidth: "480px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "500",
    color: "#111111",
    margin: "0 0 24px 0",
    lineHeight: "1.15",
    letterSpacing: "-0.02em",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#555555",
    margin: 0,
  },
  right: {
    flexShrink: 0,
  },
  cta: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },
  arrow: {
    fontSize: "22px",
    color: "#e8400c",
    lineHeight: "1",
  },
  ctaText: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#111111",
  },
};