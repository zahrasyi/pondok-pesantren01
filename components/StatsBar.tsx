"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 2400, suffix: "", label: "Santri Aktif", display: "2,400" },
  { num: 180, suffix: "+", label: "Tenaga Pengajar" },
  { num: 1000, suffix: "", label: "Alumni", display: "1,000" },
  { num: 800, suffix: "+", label: "Prestasi" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setValue(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

function StatItem({ num, suffix, label, active }: { num: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(num, 1800, active);

  // Format angka ribuan dengan koma
  const formatted = count.toLocaleString("en-US");

  return (
    <div className="flex flex-col items-center justify-center px-8 py-10 flex-1 border-r border-[rgba(30,58,30,0.12)] last:border-r-0">
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, color: "#1E3A1E", lineHeight: 1, letterSpacing: "-0.01em" }}>
        {formatted}{suffix}
      </div>
      <div className="mt-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7355" }}>
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#EDE8DC] flex flex-wrap">
      {stats.map((s) => (
        <StatItem key={s.label} num={s.num} suffix={s.suffix} label={s.label} active={active} />
      ))}
    </div>
  );
}