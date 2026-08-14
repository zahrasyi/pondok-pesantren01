"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Pastikan memanggil gambar dari folder public kamu
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
  const [mounted, setMounted] = useState(false); // State untuk memicu animasi awal

  useEffect(() => {
    // Memicu animasi teks saat komponen pertama kali dimuat
    setMounted(true);

    // Timer untuk slideshow background
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#1A2410]">
      
      {/* Background images dengan Smooth Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          {/* Layer transparan abu gelap agar teks terbaca */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-8 md:px-20 max-w-7xl mx-auto">
        
        {/* Eyebrow - Animasi urutan 1 */}
        {/* <div 
          className={`flex items-center justify-center gap-3 mb-8 transition-all duration-1000 delay-100 ease-out transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="w-8 h-px bg-[#B8960C]" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
            Berdiri 1989 · Bogor, Indonesia
          </span>
          <div className="w-8 h-px bg-[#B8960C]" />
        </div> */}

        {/* Headline - Animasi urutan 2 */}
        <h1 
          className={`max-w-4xl mb-6 transition-all duration-1000 delay-300 ease-out transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 8vw, 55px)", fontWeight: 500, color: "#F8F6F1", lineHeight:1.1, letterSpacing: "-0.01em" }}
        >
          Berakhlak Mulia, Berbadan Sehat, Berpengetahuan Luas<br />
        </h1>

        {/* Arabic subtitle - Animasi urutan 3 */}
        {/* <div 
          className={`mb-6 transition-all duration-1000 delay-500 ease-out transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ fontFamily: "'Amiri', serif", fontSize: "22px", color: "rgba(248,246,241,0.6)", letterSpacing: "0.05em", direction: "rtl", maxWidth: "320px", textAlign: "center" }}
        >
          العلم نور والجهل ظلام
        </div> */}

        {/* Body - Animasi urutan 4 */}
        <p 
          className={`max-w-5xl mb-10 transition-all duration-1000 delay-700 ease-out transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "20px", fontWeight: 300, color: "rgba(248,246,241,0.75)", lineHeight: 1.75 }}
        >
          Pondok Pesantren Daaral Huda Litahfidhil Qur'an, Sebuah lembaga pendidikan Islam yang tidak hanya membina ilmu, namun juga menanamkan cinta sejati kepada Kalamullah, Al-Qur'anal Karim.
        </p>

        {/* CTAs - Animasi urutan 5 */}
        <div 
          className={`flex flex-wrap justify-center gap-4 items-center transition-all duration-1000 delay-1000 ease-out transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="/penerimaan"
            // Warna dasar (bg-[#F8F6F1]) dan warna hover (hover:bg-[#B8960C]) dimasukkan ke sini
            className="flex items-center gap-2 group bg-[#F8F6F1] hover:bg-[#B8960C] text-[#1A2410]  hover:text-[#F8F6F1] transition-colors duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 32px",
              textDecoration: "none",
            }}
          >
            Mulai Pendaftaran
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          {/* <Link
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
          </Link> */}
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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