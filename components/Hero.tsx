"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    img: "/hero/rihlah.png",
    caption: "Kampus & Masjid",
  },
  {
    img: "/hero/amaliyah.png",
    caption: "Ruang Belajar Klasik",
  },
  {
    img: "/hero/wisudatahfidz.png",
    caption: "Taman Kampus yang Damai",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setFading(false);
      }, 600);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#1A2410]">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <img
          src={slides[current].img}
          alt={slides[current].caption}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,36,16,0.82) 0%, rgba(26,36,16,0.45) 55%, rgba(26,36,16,0.15) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,36,16,0.5) 0%, transparent 50%)" }} />
      </div>

      {/* Content - Ditambahkan items-center dan text-center */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8 md:px-20 max-w-7xl mx-auto">
        
        {/* Eyebrow - Ditambahkan justify-center */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#B8960C]" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
            Berdiri 1989 · Bogor, Indonesia
          </span>
          <div className="w-8 h-px bg-[#B8960C]" /> {/* Tambahan garis di kanan agar simetris saat di tengah */}
        </div>

        {/* Headline */}
        <h1 className="max-w-xl mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 76px)", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          The Fountain of<br />
          <em>Wisdom</em> 
        </h1>

        {/* Arabic subtitle - Ditambahkan textAlign: center */}
        <div className="mb-6" style={{ fontFamily: "'Amiri', serif", fontSize: "22px", color: "rgba(248,246,241,0.6)", letterSpacing: "0.05em", direction: "rtl", maxWidth: "320px", textAlign: "center" }}>
          العلم نور والجهل ظلام
        </div>

        {/* Body */}
        <p className="max-w-2xl mb-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: "20px", fontWeight: 300, color: "rgba(248,246,241,0.75)", lineHeight: 1.75 }}>
          Pendidikan Islam holistik yang memadukan keilmuan klasik dengan pengetahuan kontemporer, membentuk ulama dan pemimpin untuk dunia modern.
        </p>

        {/* CTAs - Ditambahkan justify-center */}
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <Link
            href="/penerimaan"
            className="flex items-center gap-2 group"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1A2410",
              background: "#F8F6F1",
              padding: "14px 32px",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
          >
            Mulai Pendaftaran
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/program"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(248,246,241,0.8)",
              borderBottom: "1px solid rgba(248,246,241,0.3)",
              paddingBottom: "2px",
              textDecoration: "none",
            }}
            className="hover:opacity-70"
          >
            Jelajahi Program
          </Link>
        </div>
      </div>

      {/* Slide dots - Diubah posisinya ke tengah bawah */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? "28px" : "6px",
              height: "6px",
              background: i === current ? "#B8960C" : "rgba(248,246,241,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}