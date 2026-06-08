export default function LogoWallSection() {
  return (
    <section style={{
      background: "#fff",
      padding: "3rem 3rem",
      fontFamily: "'Barlow', sans-serif",
    }}>
      <div style={{
        borderRadius: "20px",
        overflow: "hidden",
        lineHeight: 0,
        height: "800px",
      }}>
        {/* Replace src with your actual Brand Hubble logo wall image */}
        <img
          src="/images/wall.jpeg"
          alt="BrandHubble logo on wall"
          style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
        />
      </div>
    </section>
  );
}