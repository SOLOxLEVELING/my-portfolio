import React, { useRef, useEffect } from "react";

// We will keep the Blob class for the soft background gradient
class Blob {
  constructor(canvas, color) {
    this.canvas = canvas;
    this.pos = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    };
    this.vel = {
      x: (Math.random() - 0.5) * 0.5, // Very slow movement
      y: (Math.random() - 0.5) * 0.5,
    };
    this.size = canvas.height / 1.5 + Math.random() * (canvas.height / 3); // Very large blobs
    this.color = color;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    if (this.pos.x < 0 || this.pos.x > this.canvas.width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > this.canvas.height) this.vel.y *= -1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Helper function to create a rounded rectangle path
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

const GradientCanvas = () => {
  const canvasRef = useRef(null);
  const offscreenCanvasRef = useRef(null); // A second canvas for performance

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Create an offscreen canvas for rendering the background
    // This improves performance significantly
    offscreenCanvasRef.current = document.createElement("canvas");
    const offscreenCanvas = offscreenCanvasRef.current;
    const offscreenCtx = offscreenCanvas.getContext("2d");

    let animationFrameId;
    let rotation = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      offscreenCanvas.width = canvas.width;
      offscreenCanvas.height = canvas.height;
    };
    window.addEventListener("resize", resize);
    resize();

    const blobs = [
      new Blob(offscreenCanvas, "rgba(100, 149, 237, 0.5)"), // Cornflower Blue
      new Blob(offscreenCanvas, "rgba(255, 105, 180, 0.5)"), // Hot Pink
    ];

    const animate = () => {
      // --- 1. Draw the soft background on the offscreen canvas ---
      offscreenCtx.clearRect(
        0,
        0,
        offscreenCanvas.width,
        offscreenCanvas.height
      );
      offscreenCtx.filter = "blur(100px)"; // Heavy blur for a soft ambient feel
      blobs.forEach((blob) => {
        blob.update();
        blob.draw(offscreenCtx);
      });
      offscreenCtx.filter = "none"; // Reset filter

      // --- 2. Draw the final scene on the main (visible) canvas ---
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0a0a0a"; // A very dark grey, not pure black
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the undistorted background first
      ctx.drawImage(offscreenCanvas, 0, 0);

      // --- 3. Create the Refractive Glass Effect ---
      ctx.save(); // Save the current state of the canvas

      // Define the glass shape's properties
      const glassWidth = canvas.width * 0.7;
      const glassHeight = canvas.height * 0.7;
      const glassX = (canvas.width - glassWidth) / 2;
      const glassY = (canvas.height - glassHeight) / 2;
      const borderRadius = 50;
      const refractionOffset = 15; // How much the light "bends"

      // Apply rotation transformation
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      // Create the rounded rectangle path for our glass
      roundedRect(ctx, glassX, glassY, glassWidth, glassHeight, borderRadius);

      // Add a subtle shadow for depth
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowBlur = 30;
      ctx.strokeStyle = "rgba(255,255,255,0.1)"; // Faint edge
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset shadow

      // Use the path as a clipping mask
      ctx.clip();

      // ** THE MAGIC **: Draw the background again inside the clipped area,
      // but with an offset to create the distortion/refraction illusion.
      ctx.drawImage(
        offscreenCanvas,
        -refractionOffset,
        -refractionOffset,
        canvas.width + refractionOffset * 2,
        canvas.height + refractionOffset * 2
      );

      // Add a glossy shine to the top edge to sell the glass effect
      const shineGradient = ctx.createLinearGradient(
        glassX,
        glassY,
        glassX,
        glassY + glassHeight
      );
      shineGradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
      shineGradient.addColorStop(0.2, "rgba(255, 255, 255, 0.05)");
      shineGradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = shineGradient;
      ctx.fillRect(glassX, glassY, glassWidth, glassHeight);

      ctx.restore(); // Remove the clipping mask and transformations

      // Update rotation for the next frame
      rotation += 0.05;

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default GradientCanvas;
