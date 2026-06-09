"use client";

import React from "react";

const data = {
  overview:
    "Our approach was to create a modern, minimal, and professional identity system that resonates with financial institutions while maintaining the innovative edge of a cutting-edge AI company. By combining data-driven precision with approachable design, the brand builds confidence while differentiating itself from traditional CRE tech platforms.",

  team: [
    { role: "Social media & Marketing", name: "Dev Sharma", image: "/images/dev.avif" },
    { role: "Branding & Strategy", name: "Shobhit Rohilla", image: "/images/shobit.avif" },
    { role: "Visual Design", name: "Bhavika Jain", image: "/images/bhavika.avif" },
  ],

  deliverables: [
    "Website Revamp",
    "Social Media & marketing",
    "SEO Optimizations",
    "Brand Design",
  ],

  testimonial: {
    quote:
      "Super sharp, fast, and collaborative. They asked smart questions and nailed the vibe from day one. Our team loved working with them.",
    name: "Prerit Gautam",
    role: "CEO – CLIK.ai",
    image: "/images/prerit.avif",
    rating: 5,
  },
};

export default function ClikAiOverview() {
  return (
    <>
      <style>{`
        .overview-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 40px;
          box-sizing: border-box;
        }

        /* ── Overview top ── */
        .overview-top {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 40px;
          margin-bottom: 100px;
        }

        .overview-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #111111;
        }

        .overview-dot {
          width: 18px;
          height: 18px;
          background: #e8440a;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .overview-text {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: clamp(20px, 2.5vw, 30px);
          font-weight: 400;
          color: #111111;
          line-height: 150%;
          margin: 0;
        }

        /* ── Bottom 3 columns ── */
        .overview-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          border-top: 1px solid #eeeeee;
          padding-top: 60px;
        }

        .col-label {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          margin-bottom: 32px;
        }

        /* Team */
        .team-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .team-member {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .team-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          filter: grayscale(100%);
          flex-shrink: 0;
        }

        .team-info {}

        .team-role {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #111111;
          line-height: 130%;
        }

        .team-name {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #888888;
        }

        /* Deliverables */
        .deliverables-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .deliverable-item {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #111111;
        }

        /* Testimonial */
        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }

        .star {
          color: #e8440a;
          font-size: 18px;
        }

        .testimonial-quote {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 400;
          color: #111111;
          line-height: 145%;
          margin: 0 0 28px 0;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .testimonial-name {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #111111;
        }

        .testimonial-role {
          font-family: "Apfel Grotezk", sans-serif;
          font-size: 13px;
          color: #888888;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .overview-section { padding: 60px 20px; }
          .overview-top { grid-template-columns: 1fr; }
          .overview-bottom { grid-template-columns: 1fr; gap: 60px; }
        }
      `}</style>

      <section className="overview-section">

        {/* Overview top */}
        <div className="overview-top">
          <div className="overview-eyebrow">
            <span className="overview-dot" />
            Overview
          </div>
          <p className="overview-text">{data.overview}</p>
        </div>

        {/* Bottom: Team + Deliverables + Testimonial */}
        <div className="overview-bottom">

          {/* Team */}
          <div>
            <p className="col-label">Team</p>
            <div className="team-list">
              {data.team.map((member, i) => (
                <div key={i} className="team-member">
                  <img src={member.image} alt={member.name} className="team-avatar" />
                  <div className="team-info">
                    <p className="team-role">{member.role}</p>
                    <p className="team-name">{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <p className="col-label">Deliverables</p>
            <div className="deliverables-list">
              {data.deliverables.map((item, i) => (
                <p key={i} className="deliverable-item">{item}</p>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <div className="stars">
              {Array.from({ length: data.testimonial.rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-quote">"{data.testimonial.quote}"</p>
            <div className="testimonial-author">
              <img
                src={data.testimonial.image}
                alt={data.testimonial.name}
                className="testimonial-avatar"
              />
              <div>
                <p className="testimonial-name">{data.testimonial.name}</p>
                <p className="testimonial-role">{data.testimonial.role}</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}