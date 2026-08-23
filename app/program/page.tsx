"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

// Data sementara (MI, SMPI, MA) sudah ditambahkan href
const programs = [
  {
    id: "MI",
    title: "Madrasah Ibtidaiyah (MI)",
    desc: " ",
    img: "/program/MI.jpg",
    href: "/program/mi", // <-- Ubah menjadi /program/mi (huruf kecil, nama foldernya)
  },
  {
    id: "SMPI",
    title: "SMP Islam (SMPI)",
    desc: " ",
    img: "/program/safari2.png",
    href: "/program/smpi", // <-- Ubah menjadi /program/smpi
  },
  {
    id: "MA",
    title: "Madrasah Aliyah (MA)",
    desc: " ",
    img: "/program/MA.png",
    href: "/program/ma", // <-- Ubah menjadi /program/ma
  },
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Program Akademik"
        title="Jalan Menuju"
        titleItalic="Ilmu yang Mulia"
        desc="Setiap program kami dirancang untuk mencetak ulama yang kokoh, cendekiawan yang kritis, dan pemimpin yang amanah."
        img="/program/banner.png" // Pastikan gambar ini ada di folder public/hero/
      />

      {/* Section Program (Card Landscape Atas-Bawah) */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[rgba(30,58,30,0.06)] flex flex-col md:flex-row group hover:shadow-lg transition-all duration-300"
            >
              {/* Bagian Kiri: Gambar */}
              <div className="w-full md:w-5/12 h-[250px] md:h-auto overflow-hidden relative">
                <img 
                  src={prog.img} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {/* Overlay tipis agar lebih menyatu dengan tema */}
                <div className="absolute inset-0 bg-[#1A2410]/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Bagian Kanan: Konten Teks & Tombol */}
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center items-start">
                <div className="mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8960C" }}>
                  Jenjang Pendidikan
                </div>
                
                <h3 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, color: "#1A2410", lineHeight: 1.2 }}>
                  {prog.title}
                </h3>
                
                <p className="mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>
                  {prog.desc}
                </p>

                {/* Tombol diubah menjadi Link agar bisa diarahkan ke href */}
                <Link 
                  href={prog.href}
                  className="bg-[#1E3A1E] text-[#F8F6F1] hover:bg-[#B8960C] hover:text-[#1A2410] transition-colors duration-300 inline-block text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    padding: "12px 32px",
                    borderRadius: "10px",
                    textDecoration: "none",
                  }}
                >
                  Lihat Selengkapnya
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1E3A1E] py-20 px-8 text-center border-t border-[rgba(248,246,241,0.05)]">
        <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, color: "#F8F6F1" }}>
          Siap Memulai Perjalanan Ilmumu?
        </h2>
        <p className="mb-8 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(248,246,241,0.6)", lineHeight: 1.8 }}>
          Hubungi bagian penerimaan kami untuk informasi lebih lanjut tentang program yang sesuai dengan tujuanmu.
        </p>
        <Link 
          href="/penerimaan" 
          className="hover:bg-[#F8F6F1] transition-colors duration-300 rounded-lg shadow-lg"
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "13px", 
            fontWeight: 600, 
            letterSpacing: "0.1em", 
            textTransform: "uppercase", 
            color: "#1A2410", 
            background: "#B8960C", 
            padding: "14px 36px", 
            textDecoration: "none", 
            display: "inline-block" 
          }}
        >
          Daftar Sekarang
        </Link>
      </section>
      
      <Footer />
    </main>
  );
}