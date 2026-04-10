import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;
      const vx = W / 2;
      const vy = H * 0.45;
      const numLines = 14;

      ctx.strokeStyle = "#E0E0E0";
      ctx.lineWidth = 0.8;

      // Horizontal perspective lines
      for (let i = 0; i <= numLines; i++) {
        const t = i / numLines;
        const y = vy + (H - vy) * t * t;
        const spreadL = (-vx) * (1 - t * 0.6);
        const spreadR = (W - vx) * (1 - t * 0.6);
        ctx.beginPath();
        ctx.moveTo(vx + spreadL, y);
        ctx.lineTo(vx + spreadR, y);
        ctx.stroke();
      }

      // Radial lines from vanishing point
      const numRadial = 18;
      for (let i = 0; i < numRadial; i++) {
        const angle = (Math.PI / (numRadial - 1)) * i;
        const len = Math.max(W, H) * 1.5;
        ctx.beginPath();
        ctx.moveTo(vx, vy);
        ctx.lineTo(vx + Math.cos(angle) * len, vy + Math.sin(angle) * len);
        ctx.stroke();
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <>
      {/* Canvas perspective grid — hero only */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.45 }}
      />

      {/* Aurora orb 1 — pale red, persists across site */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "5%",
          right: "8%",
          width: "620px",
          height: "620px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(228,0,43,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "aurora1 18s ease-in-out infinite",
          zIndex: -1,
        }}
      />

      {/* Aurora orb 2 — pale grey */}
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "10%",
          left: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(180,180,180,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "aurora2 22s ease-in-out infinite",
          zIndex: -1,
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
    </>
  );
}
