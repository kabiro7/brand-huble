"use client";

import React from "react";

const projects = [
  {
    name: "Toothique",
    desc: "Redefining Dentistry as a Luxury Experience",
    image: "/images/p1.avif",
    href: "/projects/toothique",
    tags: ["Product design", "Branding", "Ui/Ux Design", "Brand Strategy", "Performance Marketing"],
  },
  {
    name: "Grras",
    desc: "Global pioneer in training and consulting IT workforce, for big and mid size enterprises.",
    image: "/images/p2.avif",
    href: "/projects/grras",
    tags: ["Product design", "Branding", "Ui/Ux Design", "Brand Strategy", "Performance Marketing"],
  },
  {
    name: "Project Three",
    desc: "Short description of project three goes here.",
    image: "/images/p3.avif",
    href: "/projects/project-three",
    tags: ["Branding", "Ui/Ux Design", "Brand Strategy"],
  },
  {
    name: "Starbodh",
    desc: "Short description of Starbodh project goes here.",
    image: "/images/p4.avif",
    href: "/projects/starbodh",
    tags: ["Product design", "Branding", "Performance Marketing"],
  },
];   

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        .project-card {
          display: flex;
          flex-direction: column;
          gap: 0;
          text-decoration: none;
          cursor: pointer;
        }

        /* Image wrap */
        .project-img-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          position: relative;
        }
        .project-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .project-card:hover .project-img-wrap img {
          transform: scale(1.05);
        }

        /* Tags row — sits at bottom of image */
        .project-tags {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .project-tag {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #111111;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 5px 10px;
          white-space: nowrap;
        }

        /* Text block */
        .project-text {
          padding: 20px 0 32px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .project-name {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 32px;
          font-weight: 400;
          color: #111111;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 110%;
        }
        .project-desc {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #666666;
          margin: 0;
          line-height: 150%;
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.container}>

          {/* ── Header ── */}
          <div style={styles.header}>
            <div style={styles.labelRow}>
              <div style={styles.orangeSquare} />
              <span style={styles.label}>PROJECTS</span>
            </div>
            <div style={styles.headerRight}>
              <h2 style={styles.heading}>
                Bold Ideas,<br />Flawless Execution
              </h2>
            </div>
          </div>

          {/* ── 2x2 Grid ── */}
          <div style={styles.grid}>
            {projects.map((p, i) => (
              <a key={i} href={p.href} className="project-card">
                <div className="project-img-wrap">
                  <img src={p.image} alt={p.name} />
                  {/* Tags overlay on image */}
                  <div className="project-tags">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-text">
                  <p className="project-name">{p.name}</p>
                  <p className="project-desc">{p.desc}</p>
                </div>
              </a>
            ))}
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
    gap: "48px",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "40px",
    alignItems: "flex-start",
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
  label: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "14px",
    fontWeight: 500,
    color: "#111111",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  headerRight: {
    display: "flex",
    flexDirection: "column" as const,
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
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
};