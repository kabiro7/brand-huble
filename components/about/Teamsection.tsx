export default function TeamSection() {
  const team = [
    {
      name: "Shobhit Rohillia",
      role: "Co-founder & Creative director",
      image: "/images/shobit.avif",
    },
    {
      name: "Dev Sharma",
      role: "Co-founder, growth expert",
      image: "/images/dev.avif",
    },
    {
      name: "Bhavika Jain",
      role: "Communication Designer",
      image: "/images/bhavika.avif",
    },
    {
      name: "Siddharth Jangid",
      role: "Business Development & Brand Growth",
      image: "/images/siddharth.avif",
    },
    {
      name: "Makbool Ahemad",
      role: "SEO Executive",
      image: "/images/makbool.avif",
      joinCard: true, // last member has Join Us card on the right
    },
  ];

  return (
    <section style={{
      background: "#fff",
      padding: "5rem 3rem",
      fontFamily: "'Barlow', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700;800&display=swap');

        .team-header {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          margin-bottom: 3rem;
          position: relative;
        }

        .team-num {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 0.9rem;
          font-weight: 500;
          color: #111;
          letter-spacing: 0.05em;
        }

        .team-title {
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 800;
          color: #111;
          margin: 0;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .team-subtitle {
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          color: #444;
          margin: 1rem 0 0;
          line-height: 1.6;
          text-align: right;
        }

        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem 1.5rem;
        }

        .team-card img {
          width: 100%;
          aspect-ratio: 3 / 3.5;
          object-fit: cover;
          object-position: top;
          display: block;
          filter: grayscale(100%);
          border-radius: 4px;
        }

        .team-card-name {
          font-size: 1.15rem;
          font-weight: 600;
          color: #111;
          margin: 0.8rem 0 0.2rem;
        }

        .team-card-role {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .join-card {
          background: #f0eeeb;
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 400px;
        }

        .join-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .join-brand {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #111;
        }

        .join-plus {
          font-size: 1.4rem;
          color: #999;
          line-height: 1;
        }

        .join-body h3 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          color: #111;
          margin: 0 0 1rem;
          line-height: 1.1;
        }

        .join-body p {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }

        .join-cta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.2rem;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          margin-top: 2rem;
        }

        .join-arrow {
          color: #E84F1C;
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Header */}
      <div className="team-header">
        <span className="team-num">02</span>
        <div style={{ textAlign: "right" }}>
          <h2 className="team-title">Team</h2>
          <p className="team-subtitle">
            A group of thinkers, builders, and makers<br />
            shaping what BrandHubble stands for.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="team-grid">
        {team.map((member) => (
          <div className="team-card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <p className="team-card-name">{member.name}</p>
            <p className="team-card-role">{member.role}</p>
          </div>
        ))}

        {/* Join Us Card */}
        <div className="join-card">
          <div className="join-card-top">
            <span className="join-brand">Brand Hubble</span>
            <span className="join-plus">+</span>
          </div>
          <div className="join-body">
            <h3>Join us</h3>
            <p>
              We're always on the lookout for curious minds, bold creatives, and
              people who give a damn. If that sounds like you
            </p>
          </div>
          <a href="mailto:hello@brandhubble.com" className="join-cta">
            <span className="join-arrow">↗</span>
            Send us a mail
          </a>
        </div>
      </div>
    </section>
  );
}