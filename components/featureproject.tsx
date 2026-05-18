"use client";

import React from "react";

const project = {
  name: "clik.ai",
  desc: "Bold branding that represents advance ai-driven technological tools of the company.",
  image: "/images/p6.avif",
  href: "/project-lobby/clik.ai",
  tags: ["Web Design", "Branding", "Ui/Ux Design", "Brand Strategy", "Performance Marketing"],
};

export default function FeaturedProject() {
  return (
    <>
      <style>{`
        .featured-project-card {
          display: flex;
          flex-direction: column;
          gap: 0;
          text-decoration: none;
          cursor: pointer;
        }

        .fp-img-wrap {
          width: 100%;
          aspect-ratio: 16 / 7;
          overflow: hidden;
          position: relative;
        }
        .fp-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .featured-project-card:hover .fp-img-wrap img {
          transform: scale(1.04);
        }

        /* Tags row — bottom of image */
        .fp-tags {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .fp-tag {
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

        .fp-name {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 32px;
          font-weight: 400;
          color: #111111;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 110%;
        }
        .fp-desc {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #666666;
          margin: 0;
          line-height: 150%;
          max-width: 500px;
        }

        .fp-btn {
          display: inline-flex;
          align-items: center;
          padding: 16px 28px;
          background: #111111;
          color: #ffffff;
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 15px;
          font-weight: 400;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.2s ease, transform 0.2s ease;
          cursor: pointer;
          border: none;
          width: fit-content;
        }
        .fp-btn:hover {
          background: #333333;
          transform: translateY(-2px);
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.container}>

          {/* Full width image card */}
          <div className="featured-project-card">
            <div className="fp-img-wrap">
              <img src={project.image} alt={project.name} />
              <div className="fp-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="fp-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Text + button below */}
          <div style={styles.textBlock}>
            <a href={project.href} style={{ textDecoration: "none" }}>
              <p className="fp-name">{project.name}</p>
            </a>
            <p className="fp-desc">{project.desc}</p>
            <a href="/project-lobby" className="fp-btn">
              See All Projects
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
    padding: "0 0 100px",
  },
  container: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  textBlock: {
    padding: "0 40px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};