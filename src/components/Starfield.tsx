"use client";

import { useEffect, useRef } from "react";
const GOLD = "212, 166, 42";

type Star = {
  x: number; // 0..1
  y: number; // 0..1
  r: number;
  max: number;
  speed: number;
  phase: number;
  gold: boolean;
};

type Sparkle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  phase: number;
};

type Shooting = {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  life: number; // 0..1
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rot: number, alpha: number) {
  const k = 0.24;
  const pts = [
    [0, -1], [k, -k], [1, 0], [k, k], [0, 1], [-k, k], [-1, 0], [-k, -k],
  ];
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.scale(size / 2, size / 2);
  ctx.beginPath();
  pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
  ctx.closePath();
  ctx.fillStyle = `rgba(${GOLD}, ${alpha})`;
  ctx.fill();
  ctx.restore();
}

export default function StarField({ density = 1 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let sparkles: Sparkle[] = [];
    const shooters: Shooting[] = [];
    let raf = 0;
    let nextShot = performance.now() + 2000;
    let last = performance.now();

    const build = () => {
      const area = width * height;
      const count = Math.round((area / 24000) * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() < 0.06 ? rand(1.4, 2) : rand(0.5, 1.1),
        max: rand(0.15, 0.7),
        speed: rand(0.4, 1.4),
        phase: rand(0, Math.PI * 2),
        gold: Math.random() < 0.1,
      }));
      sparkles = Array.from({ length: Math.max(4, Math.round(6 * density)) }, () => ({
        x: rand(0.03, 0.97),
        y: rand(0.03, 0.97),
        size: rand(10, 18),
        speed: rand(0.25, 0.6),
        phase: rand(0, Math.PI * 2),
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (reduceMotion) frame(performance.now(), true);
    };

    const frame = (now: number, still = false) => {
      const t = now / 1000;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const tw = still ? 0.6 : 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        const a = 0.05 + (s.max - 0.05) * tw;
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.gold ? `rgba(${GOLD}, ${a})` : `rgba(255, 255, 255, ${a})`;
        ctx.fill();
      }

      for (const s of sparkles) {
        const p = still ? 0.6 : 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        drawSparkle(ctx, s.x * width, s.y * height, s.size * (0.45 + 0.55 * p), p * (Math.PI / 4), 0.15 + 0.75 * p);
      }

      if (still) return;

      if (now >= nextShot) {
        shooters.push({
          x: rand(0, 0.7) * width,
          y: rand(0, 0.5) * height,
          angle: rand(25, 40) * (Math.PI / 180),
          speed: rand(520, 760),
          length: rand(110, 170),
          life: 0,
        });
        nextShot = now + rand(3000, 8000);
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.life += dt / 1.2;
        if (s.life >= 1) {
          shooters.splice(i, 1);
          continue;
        }
        const travelled = s.life * s.speed * 1.2;
        const hx = s.x + Math.cos(s.angle) * travelled;
        const hy = s.y + Math.sin(s.angle) * travelled;
        const tx = hx - Math.cos(s.angle) * s.length;
        const ty = hy - Math.sin(s.angle) * s.length;
        const alpha = s.life < 0.15 ? s.life / 0.15 : 1 - (s.life - 0.15) / 0.85;
        const g = ctx.createLinearGradient(tx, ty, hx, hy);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(1, `rgba(255,255,255,${alpha})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(hx, hy, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.shadowColor = "rgba(255,255,255,0.8)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const loop = (now: number) => {
      frame(now);
      raf = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    if (!reduceMotion) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" />;
}
