"use client";

import React from "react";

const featuredBlog = {
  title: "Behind the Brand: Crafting the Visual Identity for iii Studio",
  date: "Sep 26, 2025",
  image: "/images/b5.avif",
  href: "/blogs/iii-studio",
};

export default function FeaturedBlog() {
  return (
    <>
      <style>{`
        .featured-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-decoration: none;
          cursor: pointer;
        }

        .featured-img-wrap {
          width: 100%;
          overflow: hidden;
          aspect-ratio: 16 / 9;
        }

        .featured-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .featured-card:hover .featured-img-wrap img {
          transform: scale(1.04);
        }

        .featured-title {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 22px;
          font-weight: 400;
          color: #111111;
          line-height: 135%;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .featured-date {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #888888;
          margin: 0;
        }
      `}</style>

      <section style={styles.section}>
        <a href={featuredBlog.href} className="featured-card">

          {/* Full width image */}
          <div className="featured-img-wrap">
            <img src={featuredBlog.image} alt={featuredBlog.title} />
          </div>

          {/* Title + date */}
          <div style={styles.textBlock}>
            <p className="featured-title">{featuredBlog.title}</p>
            <p className="featured-date">{featuredBlog.date}</p>
          </div>

        </a>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "0 0 60px",
  },
  textBlock: {
    padding: "0 40px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
};



