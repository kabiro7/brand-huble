"use client";

import { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Shobhit Rohillia",
    role: "Co-founder & Creative Director",
    image: "images/dev.avif",
  },
  {
    name: "Devendra Sharma",
    role: "Co-founder, Growth Expert",
    image: "images/shobit.avif", 
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Editorial+New:ital@0;1&family=Syne:wght@400;600;700&display=swap');

        .team-section {
          background: #f5f4f0;
          padding: 100px 40px 80px;
          font-family: 'Syne', sans-serif;
          overflow: hidden;
        }

        .team-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .team-label.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .label-dot {
          width: 14px;
          height: 14px;
          background: #e85c2c;
          flex-shrink: 0;
        }

        .label-text {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #111;
        }

        .team-header {
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }

        .team-header.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .team-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 400;
          line-height: 1.1;
          color: #111;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
        }

        .team-title strong {
          font-weight: 700;
        }

        .team-subtitle {
          font-size: 16px;
          color: #888;
          font-weight: 400;
          line-height: 1.6;
          max-width: 440px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }

        .team-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .team-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .team-card:nth-child(2) {
          transition-delay: 0.15s;
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #1a1a1a;
        }

        .card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          display: block;
          transform: scale(1.03);
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .team-card:hover .card-image-wrap img {
          transform: scale(1.08);
        }

        /* Placeholder when no image is provided */
        .card-image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #444;
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .card-info {
          padding: 20px 0 0;
        }

        .card-name {
          font-size: 22px;
          font-weight: 600;
          color: #111;
          margin: 0 0 6px;
          letter-spacing: -0.01em;
        }

        .card-role {
          font-size: 14px;
          color: #888;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .team-footer {
          margin-top: 64px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
        }

        .team-footer.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #111;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 16px 28px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s ease, gap 0.3s ease;
        }

        .explore-btn:hover {
          background: #e85c2c;
          gap: 18px;
        }

        .explore-btn svg {
          transition: transform 0.3s ease;
        }

        .explore-btn:hover svg {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 64px 24px 56px;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .team-title {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="team-section" ref={sectionRef}>
        {/* Label */}
        <div className="team-label animate-on-scroll">
          <div className="label-dot" />
          <span className="label-text">Team</span>
        </div>

        {/* Header */}
        <div className="team-header animate-on-scroll">
          <h2 className="team-title">
            The People Behind <strong>BrandHubble</strong>
          </h2>
          <p className="team-subtitle">
            A team of thinkers and builders defining what BrandHubble stands for.
          </p>
        </div>

        {/* Grid */}
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div className="team-card animate-on-scroll" key={i}>
              <div className="card-image-wrap">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="card-image-placeholder">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="card-info">
                <p className="card-name">{member.name}</p>
                <p className="card-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="team-footer animate-on-scroll">
          <a href="/team" className="explore-btn">
            Explore Team
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}