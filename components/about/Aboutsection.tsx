export default function AboutSection() {
  return (
    <section style={{ fontFamily: "'Barlow', sans-serif", background: "#fff", color: "#111", padding: "0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap');

        .about-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #111;
          margin-bottom: 2rem;
        }

        .about-label-sq {
          width: 16px;
          height: 16px;
          background: #E84F1C;
          flex-shrink: 0;
        }

        .about-heading {
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 400;
          line-height: 1.05;
          margin: 0 0 1.2rem;
          color: #111;
          font-family: 'Barlow', sans-serif;
        }

        .about-heading strong {
          font-weight: 700;
        }

        .about-tagline {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #222;
          font-weight: 400;
          margin: 0;
          line-height: 1.6;
        }

        .about-image-wrap {
          margin: 2.5rem 3rem 0;
          border-radius: 20px;
          overflow: hidden;
          line-height: 0;
          height: 800px;
        }

        .about-image-wrap img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .office-image-wrap {
          margin: 0 3rem 0;
          border-radius: 20px;
          overflow: hidden;
          line-height: 0;
          height: 800px;
        }

        .office-image-wrap img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      `}</style>

      {/* Section 1 — About heading + first image */}
      <div style={{ padding: "3rem 3rem 0" }}>
        <div className="about-label">
          <div className="about-label-sq" />
          About Us
        </div>

        <div style={{ paddingLeft: "clamp(2rem, 6vw, 5rem)" }}>
          <h1 className="about-heading">
            About <strong>BrandHubble</strong>
          </h1>
          <p className="about-tagline">
            Bold, refined, never boring, &amp; we make sure you aren't either.
          </p>
        </div>
      </div>

      {/* First office image — dark office with Brand Hubble wall */}
      <div className="about-image-wrap">
        {/* Replace with your actual image: first office photo (dark wall, Brand Hubble signage) */}
        <img
          src="/images/brandhubble.avif"
          alt="BrandHubble office interior"
        />
      </div>

      {/* Second image — ceiling + city view */}
      <div className="office-image-wrap" style={{ marginTop: "3rem" }}>
        {/* Replace with your actual image: ceiling fan + city window view */}
        <img
          src="/images/windowview.avif"
          alt="BrandHubble office window view"
        />
      </div>
    </section>
  );
}