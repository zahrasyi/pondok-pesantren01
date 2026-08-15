"use client";

import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

const pimpinan = [
  { 
    name: "K.H. Hasan Bashori Yasin", 
    role: "Pendiri (Muassis)", 
    img: "/quote/pendiri.png",
    desc: "Perintis dan peletak batu pertama fondasi pendidikan Al-Qur'an di Pondok Pesantren Daarul Huda. Beliau mendirikan pesantren ini dengan penuh keikhlasan dan visi jauh ke depan di tengah keterbatasan."
  },
  { 
    name: "Hj. Lilik Chaidaroh", 
    role: "Pengasuh & Pakar Kurikulum Kitab Kuning", 
    img: "/about/pengasuh.png",
    desc: "Meneruskan estafet perjuangan dengan memperkuat sistem pendidikan madrasah diniyah (Salafiyah) dan menjaga tradisi literasi kitab kuning di lingkungan santri."
  },
  { 
    name: "K.H. Abdul Munif Ma'sum", 
    role: "Pengasuh & Pimpinan Sinergi Pendidikan Modern", 
    img: "/about/pengasuh.png",
    desc: "Tokoh sentral yang membawa pesantren bertransformasi menuju era modern, mengintegrasikan sistem pendidikan formal nasional dengan nilai-nilai kepesantrenan."
  },
];

export default function KepemimpinanPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Kepemimpinan"
        title="Tokoh &"
        titleItalic="Pengasuh Pondok"
        desc="Mengenal lebih dekat para masyayikh dan asatidz yang menjadi teladan serta ujung tombak perjuangan pendidikan di Pondok Pesantren Daarul Huda."
        img="/about/pendiri2.png"
      />

      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-16 text-center">
          <div className="w-8 h-px bg-[#B8960C]" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
            Dewan Pengasuh
          </span>
          <div className="w-8 h-px bg-[#B8960C]" />
        </div>

        <div className="flex flex-col gap-16">
          {pimpinan.map((p, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#B8960C] translate-x-3 translate-y-3 rounded-2xl opacity-20" />
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="relative w-64 h-80 object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 600, color: "#1A2410", marginBottom: "8px" }}>
                  {p.name}
                </h2>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8960C", marginBottom: "20px" }}>
                  {p.role}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 300, color: "#6B7355", lineHeight: 1.8, maxWidth: "600px" }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}