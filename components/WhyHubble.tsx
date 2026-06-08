"use client";

const items = [
  {
    id: "01",
    title: "Strategy-first execution",
    description:
      "We start with strategy, not scattered tasks. Every action is tied to a clear business goal.",
  },
  {
    id: "02",
    title: "AI-driven SEO & modern growth", 
    description: "AI-driven SEO and modern growth techniques",
  },
  {
    id: "03",
    title: "Results over vanity metrics",
    description:
      "Likes don't pay bills. Revenue does. We optimize for impact, not applause.",
  },
  {
    id: "04",
    title: "Long-term partnerships",
    description:
      "We work like an extension of your team. Built for founders who think long term.",
  },
];

export default function WhyHubble() {
  return (
    <section style={styles.section}>
      {items.map((item) => (
        <div key={item.id}>
          <div style={styles.divider} /> 
          <div style={styles.row}>
            <h2 style={styles.title}>{item.title}</h2>
            <p style={styles.description}>{item.description}</p>
            <span style={styles.num}>{item.id}</span>
          </div>
        </div>
      ))}
      <div style={styles.divider} />
    </section>
  );
}

const styles = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f5f3",
    maxWidth: "100%",
    padding: "0 40px",
  },
  divider: {
    borderTop: "0.5px solid #c8c8c4",
  },
  row: {
    display: "flex",
    alignItems: "center",
    padding: "40px 0",
    gap: "40px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "500",
    color: "#111111",
    margin: 0,
    flex: "0 0 45%",
    lineHeight: "1.2",
    letterSpacing: "-0.02em",
  },
  description: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#777770",
    margin: 0,
    flex: 1,
  },
  num: {
    fontSize: "22px",
    fontWeight: "300",
    color: "#111111",
    minWidth: "40px",
    textAlign: "right",
  },
}as const;