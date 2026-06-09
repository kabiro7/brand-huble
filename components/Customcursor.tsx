"use client";

import { useEffect, useRef } from "react";

const CURSOR_IMAGE = "images/cursor.png";
const CURSOR_SIZE = 80;

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const show = () => (cursor.style.opacity = "1");
    const hide = () => (cursor.style.opacity = "0");

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${CURSOR_SIZE}px`,
          height: `${CURSOR_SIZE}px`,
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          transform: "translate(-100px, -100px)",
          marginLeft: `-${CURSOR_SIZE / 2}px`,
          marginTop: `-${CURSOR_SIZE / 2}px`,
          willChange: "transform",
          mixBlendMode: "difference",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={CURSOR_IMAGE}
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}