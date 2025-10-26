import React, { useEffect, useRef } from "react";
import "../styles/AnimatedName.css"; // Import external CSS

const AnimatedName = () => {
  const nameRef = useRef(null);
  const lettersRef = useRef([]); // Holds all <span> elements
  const mouse = useRef({ x: -9999, y: -9999 }); // Start off-screen

  useEffect(() => {
    let animationFrameId;

    // Mouse / touch events
    const handleMouseMove = (event) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    const handleTouchMove = (event) => {
      if (event.touches[0]) {
        mouse.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    // Animation loop
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
          const pushX = distance > 0 ? -(dx / distance) * force * 25 : 0;
          const pushY = distance > 0 ? -(dy / distance) * force * 25 : 0;

          letter.style.transform = `translate(${pushX}px, ${pushY}px)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const lines = ["ADNAN", "SHAIKH"];
  lettersRef.current = []; // Clear refs each render

  return (
    <h1 ref={nameRef} className="animated-name">
      {lines[0].split("").map((char, i) => (
        <span
          key={`line1-${i}`}
          ref={(el) => {
            if (el) lettersRef.current.push(el);
          }}
        >
          {char}
        </span>
      ))}

      <br className="animated-break" />
      <span className="animated-space">&nbsp;</span>

      {lines[1].split("").map((char, i) => (
        <span
          key={`line2-${i}`}
          ref={(el) => {
            if (el) lettersRef.current.push(el);
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
