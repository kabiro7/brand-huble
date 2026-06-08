"use client";

import { useState } from "react";
const faqs = [
  {
    id: "01",
    question: "What's included in a monthly retainer?",
    answer: "Our monthly retainer includes dedicated design hours, campaign management, strategy calls, and priority support.",
  },
  {
    id: "02",
    question: "How do you measure success for marketing campaigns?",
    answer: "We define KPIs with you at the start — reach, engagement, conversions, or ROI — and report on them monthly.",
  },
  {
    id: "03",
    question: "Why should we choose Hubble over other design and marketing companies?",
    answer: "Hubble combines design thinking with marketing strategy under one roof — no disconnect between how your brand looks and how it performs.",
  },
  {
    id: "04",
    question: "How does Hubble ensure designs and campaigns align with our brand?",
    answer: "Every engagement starts with a brand immersion. Every asset is reviewed against your brand guidelines before delivery.",
  },
  {
    id: "05",
    question: "Do you work with international clients?",
    answer: "Yes — we work across time zones and have served clients in the US, UK, Middle East, and Southeast Asia.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.id} style={styles.item}>
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              style={styles.btn}
            >
              <span style={styles.question}>{faq.question}</span>

              <span style={{
                ...styles.num,
                color: isOpen ? "#111111" : "#c0c0ba",
                fontWeight: isOpen ? "600" : "300",
              }}>{faq.id}</span>

            </button>

            {isOpen && (
              <div style={styles.answer}>
                <p style={styles.answerText}>{faq.answer}</p>
              </div>
            )}

            <div style={styles.divider} />
          </div>
        );
      })}
    </section>
  );
}

const styles = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#ffffff",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "80px 40px",
  },
  item: {
    borderTop: "0.5px solid #d4d4ce",
  },
  btn: {
    width: "100%",
    background: "none",
    border: "none",
    padding: "28px 60px 28px 0",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "left",
    position: "relative",
  },
  question: {
    fontSize: "17px",
    fontWeight: "400",
    color: "#111111",
    flex: 1,
    lineHeight: "1.5",
  },
  num: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "24px",
    fontWeight: "300",
    color: "#c0c0ba",
    transition: "all 0.2s ease",
  },
  chevron: {
    position: "absolute",
    right: "4px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "20px",
    height: "20px",
    color: "#888",
  },
  answer: {
    paddingBottom: "28px",
  },
  answerText: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#666660",
    margin: "0",
    paddingRight: "60px",
  },
  divider: {
    borderBottom: "0.5px solid #d4d4ce",
  },
} as const;