import React, { useEffect, useRef } from "react";
import "../styles/AnimatedName.css"; // We'll create this file next

const AnimatedName = () => {
  const nameRef = useRef(null);
  const lettersRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Only run the animation on non-touch devices
    if (isTouchDevice) return;

    const handleMouseMove = (event) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    const animate = () => {
      lettersRef.current.forEach((letter) => {
        if (letter) {
          const rect = letter.getBoundingClientRect();
          const letterCenterX = rect.left + rect.width / 2;
          const letterCenterY = rect.top + rect.height / 2;

          const dx = mouse.current.x - letterCenterX;
          const dy = mouse.current.y - letterCenterY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const force = Math.max(0, 150 - distance) / 150;
          const pushX = -(dx / distance) * force * 25;
          const pushY = -(dy / distance) * force * 25;

          letter.style.transform = `translate(${pushX}px, ${pushY}px)`;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const text = "ADNAN SHAIKH";

  return (
    <h1 ref={nameRef} className="animated-name">
      {text.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (lettersRef.current[index] = el)}
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
