export default function ClientsSection() {
  return (
    <section style={{
      background: "#fff",
      padding: "5rem 3rem",
      fontFamily: "'Barlow', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700;800&display=swap');

        .clients-title {
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 800;
          color: #111;
          margin: 0 0 1.5rem;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .clients-subtitle {
          font-size: clamp(1rem, 1.6vw, 1.1rem);
          color: #555;
          line-height: 1.65;
          margin: 0;
          max-width: 380px;
        }
      `}</style>

      <h2 className="clients-title">Clients</h2>
      <p className="clients-subtitle">
        Real words from the people we've partnered with — honest feedback, lasting impact.
      </p>
    </section>
  );
}