export default function StorySection() {
  return (
    <section style={{
      background: "#f0eeeb",
      padding: "5rem 3rem 5rem",
      fontFamily: "'Barlow', sans-serif",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700;900&display=swap');

        .story-title {
          font-size: clamp(5rem, 12vw, 10rem);
          font-weight: 800;
          line-height: 1;
          color: #111;
          margin: 0 0 1.5rem;
          letter-spacing: -0.02em;
        }

        .story-subtitle {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-weight: 400;
          color: #333;
          line-height: 1.6;
          margin: 0 0 1.2rem;
          max-width: 420px;
        }

        .story-est {
          font-size: 1rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 3rem;
        }

        .story-body {
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          color: #555;
          line-height: 1.75;
          margin: 0;
          max-width: 520px;
        }

        .story-page-num {
          position: absolute;
          bottom: 3rem;
          right: 3rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: #999;
          letter-spacing: 0.05em;
        }
      `}</style>

      <h2 className="story-title">Story</h2>

      <p className="story-subtitle">
        From our founders with a vision to a<br />
        team shaping brands around the world.
      </p>

      <p className="story-est">Est. 2025 —</p>

      <p className="story-body">
        What started as a solo venture grew into a small team of creatives,
        developers, and strategists who actually care. No ego. No fluff.
        Just thoughtful digital work that feels sharp, purposeful, and alive.
      </p>

      <span className="story-page-num">01</span>
    </section>
  );
}