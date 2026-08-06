"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const context = canvas.getContext("2d");
    if (!context || reducedMotion.matches) {
      return;
    }

    let frame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(52, Math.max(24, Math.floor(width / 18)));
      particles = Array.from({ length: count }, (_, index) => {
        const seed = index + 1;
        return {
          x: ((seed * 73) % Math.max(width, 1)) + Math.random() * 18,
          y: ((seed * 41) % Math.max(height, 1)) + Math.random() * 18,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          radius: 1 + Math.random() * 1.6,
        };
      });
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(30, 102, 245, 0.34)";
      context.strokeStyle = "rgba(30, 102, 245, 0.11)";
      context.lineWidth = 1;

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < 118) {
            context.globalAlpha = 1 - distance / 118;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
            context.globalAlpha = 1;
          }
        }
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}
