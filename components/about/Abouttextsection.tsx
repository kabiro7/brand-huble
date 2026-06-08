export default function AboutTextSection() {
  return (
    <section style={{
      background: "#f0eeeb",
      padding: "6rem 3rem",
      fontFamily: "'Barlow', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap');

        .text-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          max-width: 1400px;
          margin: 0 auto;
        }

        .text-left h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          line-height: 1.2;
          color: #111;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .text-right {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-top: 0.25rem;
        }

        .text-right p {
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          color: #555;
          line-height: 1.75;
          margin: 0;
        }

        .brand-sig {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #111;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .text-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>

      <div className="text-grid">
        <div className="text-left">
          <h2>
            We build brands, design websites, and write sharp, thoughtful copy — all with one goal: to help you stand out, connect with your audience, and look as good online as you do in your head.
          </h2>
        </div>

        <div className="text-right">
          <p>
            We partner with founders and business teams to shape the way their brands show up in the world—visually and verbally. Whether it's crafting a full identity, building a digital flagship, or orchestrating a marketing and growth strategy that actually sounds human.
          </p>
          <p>
            Our work is designed to feel intentional, modern, and a little unexpected. From first impressions to the fine details, we obsess over clarity, consistency, and craft—because that's what turns attention into trust.
          </p>
          <div className="brand-sig">Brand Hubble</div>
        </div>
      </div>
    </section>
  );
}