import React, { useEffect, useRef } from "react";
import "../styles/AnimatedName.css"; // We'll create this file next

const AnimatedName = () => {
  const nameRef = useRef(null);
  const lettersRef = useRef([]);
  const mouse = useRef({ x: -9999, y: -9999 }); // Start off-screen

  useEffect(() => {
    let animationFrameId;

    // --- Event Handlers ---

    // For desktop mouse
    const handleMouseMove = (event) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    // For touch start and drag
    const handleTouchMove = (event) => {
      if (event.touches[0]) {
        mouse.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    // When touch ends, move the "mouse" far away to reset the letters
    const handleTouchEnd = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    // --- Animation Loop ---
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

          // Calculate push amount (avoid NaN if distance is 0)
          const pushX = distance > 0 ? -(dx / distance) * force * 25 : 0;
          const pushY = distance > 0 ? -(dy / distance) * force * 25 : 0;

          letter.style.transform = `translate(${pushX}px, ${pushY}px)`;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // --- Start Animation and Attach Listeners ---
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    // Use passive: true for better scroll performance on mobile
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
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
