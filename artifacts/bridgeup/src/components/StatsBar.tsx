import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 12, label: "Competitions" },
  { value: 48, label: "Student Teams" },
  { value: 6, label: "Sponsor Companies" },
  { value: 2, label: "Universities" },
];

function CountUp({ target, started }: { target: number; started: boolean }) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      }
    };

    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [started, target]);

  return <span>{count}</span>;
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full" style={{ background: "#F7F7F7", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0" }}>
      <div className="max-w-[1200px] mx-auto px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start gap-2" style={{ borderRight: i < 3 ? "1px solid #E0E0E0" : "none", paddingRight: i < 3 ? "2rem" : "0", paddingLeft: i > 0 ? "2rem" : "0" }}>
            <span className="stat-number" data-testid={`stat-${stat.label.replace(/\s+/g, '-').toLowerCase()}`}>
              <CountUp target={stat.value} started={started} />
            </span>
            <span className="label-caps">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
