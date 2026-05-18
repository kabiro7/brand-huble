"use client";

const quotes = [
  {
    id: "01",
    quote: "We build strategies that actually work, helping brands grow with clarity, focus, and results you can trust.",
    name: "Dev",
    role: "Co-Founder",
    image: "/images/dev.avif",
  },
  {
    id: "02",
    quote: "We turn ideas into strong brands, crafting strategies that deliver real impact and long-term market presence.",
    name: "Shobhit Rohilla",
    role: "Co-Founder",
    image: "/images/shobit.avif",
  },
];

export default function WhyWorkWith() {
  return (
    <section style={styles.section}>

      {/* Heading - top left */}
      <div style={styles.headingBlock}>
        <p style={styles.headingLight}>Why work with</p>
        <p style={styles.headingBold}>BrandHubble?</p>
      </div>

      {/* Cards - full width */}
      <div style={styles.cardList}>
        {quotes.map((q) => (
          <div key={q.id} style={styles.card}>
            <p style={styles.quoteText}>{q.quote}</p>
            <div style={styles.author}>
              <img src={q.image} alt={q.name} style={styles.avatar} />
              <div>
                <p style={styles.name}>{q.name}</p>
                <p style={styles.role}>{q.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
} 

const styles: Record<string, React.CSSProperties> = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f5f5",
    width: "100%",
    padding: "80px 40px",
  },
  headingBlock: {
    marginBottom: "40px",
  },
  headingLight: {
    fontSize: "clamp(28px, 4vw, 48px)",
    fontWeight: "400",
    color: "#111111",
    margin: "0",
    lineHeight: "1.2",
  },
  headingBold: {
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: "700",
    color: "#111111",
    margin: "0",
    lineHeight: "1.2",
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "48px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
 
  },
  quoteText: {
    fontSize: "18px",
    color: "#444444",
    lineHeight: "1.75",
    margin: "0",
    position: "relative",
    zIndex: 1,
  },
  author: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    position: "relative",
    zIndex: 1,
  },
  avatar: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    objectFit: "cover",
    background: "#d4d4ce",
    flexShrink: 0,
  },
  name: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#111111",
    margin: "0 0 2px 0",
  },
  role: {
    fontSize: "13px",
    color: "#888888",
    margin: "0",
  },
};