"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "We build strategies that actually work, helping brands grow with clarity, focus, and results you can trust.",
    name: "Dev",
    role: "Co-Founder",
    image: "/images/dev.avif",
  },
  {
    id: 2,
    quote:
      "We turn ideas into strong brands, crafting strategies that deliver real impact and long-term market presence",
    name: "Shobhit Rohilla",
    role: "Co-Founder",
    image: "/images/shobit.avif",
  },
];

export default function WhyBrandHubble() {
  return (
    <section style={styles.section}>
      <div style={styles.heading}>
        <p style={styles.sub}>Why work with</p>
        <h1 style={styles.title}>BrandHubble?</h1>
      </div>

      <div style={styles.cardsList}>
        {testimonials.map((t) => (
          <div key={t.id} style={styles.card}>
            <div style={styles.cardContent}>
              <p style={styles.quote}>{t.quote}</p>
              <div style={styles.author}>
                <div style={styles.avatarWrap}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    style={styles.avatarImg}
                  />
                </div>
                <div style={styles.authorInfo}>
                  <span style={styles.authorName}>{t.name}</span>
                  <span style={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            </div>
            <div style={styles.bigQuote} aria-hidden="true">
              &ldquo;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    background: "#f5f5f3",
    minHeight: "100vh",
    padding: "3rem 1.5rem 4rem",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  heading: {
    marginBottom: "2.5rem",
  },
  sub: {
    fontSize: "1.6rem",
    fontWeight: 400,
    color: "#1a1a1a",
    margin: "0 0 0.1rem",
    lineHeight: 1.2,
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: 700,
    color: "#1a1a1a",
    margin: 0,
    lineHeight: 1.1,
  },
  cardsList: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "52px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cardContent: {
    flex: 1,
    zIndex: 1,
    position: "relative",
  },
  quote: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: 1.6,
    margin: "0 0 2rem",
    maxWidth: "520px",
  },
  author: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  avatarWrap: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
    background: "#ddd",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(100%)",
  },
  authorInfo: {
    display: "flex",
    flexDirection: "column",
  },
  authorName: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#1a1a1a",
    lineHeight: 1.3,
  },
  authorRole: {
    fontSize: "0.85rem",
    color: "#888",
    lineHeight: 1.3,
  },
  bigQuote: {
    fontSize: "11rem",
    lineHeight: 1,
    color: "#e5e5e3",
    fontFamily: "Georgia, serif",
    position: "absolute",
    right: "-1rem",
    bottom: "-2.5rem",
    pointerEvents: "none",
    userSelect: "none",
    fontWeight: 700,
  },
};