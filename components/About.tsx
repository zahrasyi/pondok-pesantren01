"use client";

import { useState, useEffect } from "react";

const aboutImages = [
  "/about/babussalam.jpg",
  "/about/denah pondok.png",
  "/about/wisuda.png",
];

export function About() {
  const [current, setCurrent] = useState(0);

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
          
          {/* Gambar muncul dari kiri */}
          <div data-aos="fade-right" className="relative w-full h-[600px] md:h-[420px] overflow-hidden rounded-2xl shadow-lg">
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
                <div className="absolute inset-0" style={{ background: "rgba(30,58,30,0.15)" }} />
              </div>
            ))}
            
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

          {/* Area Teks muncul bertahap (Staggered) */}
          <div className="lg:pl-8">
            <h2 data-aos="fade-up" className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 3.5vw, 56px)", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.2 }}>
              Warisan Cahaya<br />
              <em>dan Ilmu Pengetahuan</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100" className="mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", fontWeight: 300, color: "rgba(248,246,241,0.75)", lineHeight: 1.85 }}>
              Didirikan pada tahun 1969, pesantren ini telah menapaki perjalanan panjang dalam mencetak generasi Qur’ani yang tangguh. berakhlak mulia, dan siap mengabdi untuk agama, bangsa, dan umat, Selama lebih dari lima dekade, Daarul Huda telah menjadi rumah bagi para santri yang datang dengan harapan, dan pulang membawa hafalan serta cahaya petunjak ilahi.
            </p>
            <p data-aos="fade-up" data-aos-delay="200" className="mb-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", fontWeight: 300, color: "rgba(248,246,241,0.6)", lineHeight: 1.85 }}>
              Sebagai pondok pesantren tahfidz, Daarul Huda Litahfidhil Qur'an berkomitmen kuat dalam membina para penghafal Al-Qur'an, dengan pendekatan yang terpadu antara hafalan, pemahaman adab, dan kedisiplinan. Dengan semangat ikhlas lillahi ta'ala, Lembaga ini terus berupaya menjadi pilar risalah Al-qur'an di tengah derasnya arus zaman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}