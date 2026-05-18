"use client";

import React from "react";

const blogs = [
  {
    title: "Behind the Brand: Crafting the Visual Identity for iii Studio",
    date: "Sep 26, 2025",
    image: "/images/b1.avif",
    href: "/blogs/iii-studio",
  },
  {
    title: "Who's Afraid of ChatGPT-5? Here's Why It's Your Creative Co-Pilot, Not the Competition",
    date: "May 30, 2025",
    image: "/images/b2.avif",
    href: "/blogs/chatgpt5",
  },
  {
    title: "Designing for Tomorrow: 8 Graphic Design Trends Shaping 2025",
    date: "Sep 26, 2025",
    image: "/images/b3.avif",
    href: "/blogs/design-trends",
  },
  {
    title: "Future-Proof Your Creative Edge: 5 Skills That Keep You Ahead of the Algorithm",
    date: "Aug 26, 2025",
    image: "/images/b4.avif",
    href: "/blogs/future-proof",
  },
];

export default function BlogSection() {
  return (
    <>
      <style>{`
        .blog-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.35s ease;
        }
        .blog-card:hover {
          transform: translateY(-6px);
        }

        /* Image container — overflow hidden for zoom clip */
        .blog-img-wrap {
          overflow: hidden;
          border-radius: 4px;
          width: 100%;
        }

        /* Image zoom on hover */
        .blog-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .blog-card:hover .blog-img-wrap img {
          transform: scale(1.06);
        }

        .blog-title {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #111111;
          line-height: 135%;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .blog-date {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #888888;
          margin: 0;
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.container}>

          {/* ── Header row ── */}
          <div style={styles.header}>
            {/* Left — BLOG label */}
            <div style={styles.labelRow}>
              <div style={styles.orangeSquare} />
              <span style={styles.blogLabel}>BLOG</span>
            </div>

            {/* Right — Heading + desc */}
            <div style={styles.headerRight}>
              <h1 style={styles.heading}>
                Latest Orbital<br />Insights
              </h1>
              <p style={styles.desc}>
                Dive into in-depth articles and real-world examples that empower
                you to make smarter design decisions and achieve measurable
                results for your business.
              </p>
            </div>
          </div>

          {/* ── Row 1: small + large ── */}
          <div style={styles.row1}>
            {/* Small card */}
            <a href={blogs[0].href} className="blog-card" style={{ flex: "0 0 33%" }}>
              <div className="blog-img-wrap" style={{ aspectRatio: "4 / 3" }}>
                <img src={blogs[0].image} alt={blogs[0].title} />
              </div>
              <p className="blog-title">{blogs[0].title}</p>
              <p className="blog-date">{blogs[0].date}</p>
            </a>

            {/* Large card */}
            <a href={blogs[1].href} className="blog-card" style={{ flex: "1" }}>
              <div className="blog-img-wrap" style={{ aspectRatio: "16 / 9" }}>
                <img src={blogs[1].image} alt={blogs[1].title} />
              </div>
              <p className="blog-title">{blogs[1].title}</p>
              <p className="blog-date">{blogs[1].date}</p>
            </a>
          </div>

          {/* ── Row 2: wide + small ── */}
          <div style={styles.row2}>
            {/* Wide card */}
            <a href={blogs[2].href} className="blog-card" style={{ flex: "1" }}>
              <div className="blog-img-wrap" style={{ aspectRatio: "16 / 9" }}>
                <img src={blogs[2].image} alt={blogs[2].title} />
              </div>
              <p className="blog-title">{blogs[2].title}</p>
              <p className="blog-date">{blogs[2].date}</p>
            </a>

            {/* Small card */}
            <a href={blogs[3].href} className="blog-card" style={{ flex: "0 0 33%" }}>
              <div className="blog-img-wrap" style={{ aspectRatio: "4 / 3" }}>
                <img src={blogs[3].image} alt={blogs[3].title} />
              </div>
              <p className="blog-title">{blogs[3].title}</p>
              <p className="blog-date">{blogs[3].date}</p>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "80px 0 100px",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 40px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  // ── Header ──
  header: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "40px",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingTop: "8px",
  },
  orangeSquare: {
    width: "18px",
    height: "18px",
    backgroundColor: "#e8400c",
    borderRadius: "2px",
    flexShrink: 0,
  },
  blogLabel: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "14px",
    fontWeight: 500,
    color: "#111111",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
  },
  headerRight: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  heading: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "clamp(40px, 5vw, 72px)",
    fontWeight: 500,
    color: "#111111",
    margin: 0,
    lineHeight: "105%",
    letterSpacing: "-0.03em",
  },
  desc: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "16px",
    fontWeight: 400,
    color: "#666666",
    margin: 0,
    lineHeight: "160%",
    maxWidth: "680px",
  },

  // ── Card Rows ──
  row1: {
    display: "flex",
    gap: "24px",
    alignItems: "flex-start",
  },
  row2: {
    display: "flex",
    gap: "24px",
    alignItems: "flex-start",
  },
};