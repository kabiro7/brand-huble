"use client";

import React, { useState } from "react";

const services = [
  "Performance Marketing",
  "Advanced SEO",
  "Social Media Marketing",
  "Brand Strategy & Identity",
  "Packaging Design",
  "Website Design & Development",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    service: "Performance Marketing",
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <style>{`
        .contact-input {
          width: 100%;
          padding: 14px 16px;
          background: #1e1e1e;
          border: 1px solid #2e2e2e;
          border-radius: 8px;
          color: #ffffff;
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 15px;
          font-weight: 400;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s ease;
        }
        .contact-input:focus {
          border-color: #555555;
        }
        .contact-input::placeholder {
          color: #555555;
        }
        .contact-label {
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #aaaaaa;
          margin-bottom: 8px;
          display: block;
        }
        select.contact-input option {
          background: #1e1e1e;
          color: #ffffff;
        }
        .submit-btn {
          width: 100%;
          padding: 18px;
          background: #ffffff;
          color: #111111;
          font-family: "Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif;
          font-size: 16px;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          margin-top: 8px;
        }
        .submit-btn:hover {
          background: #e8e8e8;
          transform: translateY(-1px);
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.container}>

          {/* ── Left ── */}
          <div style={styles.left}>
            <h2 style={styles.heading}>Got a project in mind?</h2>
            <p style={styles.subtext}>Let's make something happen together</p>

            {/* Google Map embed */}
            <div style={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4!2d75.7873!3d26.8954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e7e0b6a6b5%3A0x1234567890!2sBrand+Hubble!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Right — Form ── */}
          <div style={styles.right}>

            {/* Name */}
            <div style={styles.fieldGroup}>
              <label className="contact-label">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact-input"
                type="text"
              />
            </div>

            {/* Country Code + Phone */}
            <div style={styles.fieldGroup}>
              <div style={styles.phoneRow}>
                <div style={{ flex: "0 0 120px" }}>
                  <label className="contact-label">Country Code</label>
                  <input
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="contact-input"
                    type="text"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="contact-label">Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="contact-input"
                    type="text"
                    placeholder="Number"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={styles.fieldGroup}>
              <label className="contact-label">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="contact-input"
                type="email"
              />
            </div>

            {/* Service */}
            <div style={styles.fieldGroup}>
              <label className="contact-label">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="contact-input"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div style={styles.fieldGroup}>
              <label className="contact-label">Location</label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="contact-input"
                type="text"
              />
            </div>

            {/* Message */}
            <div style={styles.fieldGroup}>
              <label className="contact-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="contact-input"
                placeholder="Your Message"
                rows={3}
                style={{ resize: "none" }}
              />
            </div>

            {/* Submit */}
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>

          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: "100%",
    backgroundColor: "#111111",
    padding: "80px 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    alignItems: "flex-start",
  },

  // ── Left ──
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  heading: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: 700,
    color: "#ffffff",
    margin: 0,
    lineHeight: "110%",
    letterSpacing: "-0.02em",
  },
  subtext: {
    fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif',
    fontSize: "16px",
    fontWeight: 400,
    color: "#888888",
    margin: 0,
  },
  mapWrapper: {
    width: "100%",
    height: "420px",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #2e2e2e",
  },

  // ── Right ──
  right: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
  },
  phoneRow: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-end",
  },
};