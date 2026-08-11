"use client";

import { useState, useEffect } from "react";

// Taruh semua link foto kamu di dalam array ini
const aboutImages = [
  "/about/babussalam.jpg",
  // Contoh foto tambahan (silakan ganti dengan path foto aslimu nanti)
  "/about/denah pondok.png",
  "/about/wisuda.png",
];

export function About() {
  const [current, setCurrent] = useState(0);

  // Efek untuk menjalankan slider otomatis setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="tentang" className="bg-[#1E3A1E] py-32 px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kiri: Area Gambar (Dikembalikan ke Landscape) */}
          <div className="relative w-full h-[600px] md:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            {aboutImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Fasilitas Ma'had Al-Noor ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay tipis agar menyatu dengan tema hijau */}
                <div className="absolute inset-0" style={{ background: "rgba(30,58,30,0.15)" }} />
              </div>
            ))}
            
            {/* Indikator Slider (Dots) di bawah gambar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {aboutImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "#B8960C" : "rgba(248,246,241,0.5)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Kanan: Area Teks */}
          <div className="lg:pl-8">
            {/* <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
                Tentang Pond
              </span>
            </div> */}

            <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 3.5vw, 56px)", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.2 }}>
              Warisan Cahaya<br />
              <em>dan Ilmu Pengetahuan</em>
            </h2>

            <p className="mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", fontWeight: 300, color: "rgba(248,246,241,0.75)", lineHeight: 1.85 }}>
              Pondok Pesantren Daarul Huda Li Tahfidhil Qur'an didirikan di Gondanglegi, Malang, berawal dari keterbatasan ekonomi dan infrastruktur. Didirikan berlandaskan keikhlasan dan keteguhan hati pengasuhnya, pesantren ini berkembang dari sebuah rintisan kecil menjadi institusi pendidikan yang diakui luas.
            </p>
            <p className="mb-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", fontWeight: 300, color: "rgba(248,246,241,0.6)", lineHeight: 1.85 }}>
              Pesantren ini memiliki ekosistem yang unik dengan memadukan metode salaf (klasik) dan modernitas, mencetak generasi penghafal Al-Qur'an yang tangguh, berwawasan global, sekaligus ahli dalam literatur Islam klasik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}