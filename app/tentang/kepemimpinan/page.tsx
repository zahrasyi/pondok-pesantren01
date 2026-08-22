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
    img: "/about/lilik.png",
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
                    className="relative w-64 h-80 object-cover rounded-2xl shadow-lg grayscale-0 hover:grayscale transition-all duration-500" 
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

      {/* Bagian Jajaran Pengurus Yayasan & Guru */}
      <section className="bg-white py-24 px-8 border-t border-[rgba(30,58,30,0.05)]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Seksi */}
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "#1A2410" }}>
              Pengurus Yayasan & <em>Dewan Asatidz</em>
            </h2>
            <div className="w-16 h-[1.5px] bg-[#B8960C] mx-auto mt-6"></div>
            <p className="mt-6 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>
              Mendedikasikan ilmu dan waktu untuk membimbing santri menjadi generasi Qur'ani yang berakhlak mulia dan berwawasan global.
            </p>
          </div>
              
          {/* Formasi Pengurus Inti - Layout 3 di atas, 2 di bawah */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mb-20">
  {[
    { nama: "Gus H. M. Saifur Rijal", jabatan: "Ketua Yayasan", img: "/about/saifur.png" },
    { nama: "Gus H.M. Luqman Hambali", jabatan: "Wakil Ketua Yayasan", img: "/about/hambali.png" },
    { nama: "Al-Ustadzah Miftahul Hamidah", jabatan: "Bendahara", img: "/about/saisatul.png" },
    { nama: "Al-Ustadzah Saisatul Munawwaroh", jabatan: "Bendahara", img: "/about/miftah.png"},
    { nama: "Al-Ustadzah Miftahul Hamidah", jabatan: "Bendahara", img: "/pengurus/usth-miftahul.jpg" },
  ].map((item, idx) => (
    <div 
      key={idx} 
      // Lebar kolom diatur manual agar muat 3 sejajar di layar besar
      className="group flex flex-col items-center text-center cursor-default w-full sm:w-[45%] lg:w-[28%] max-w-[280px]"
    >
      {/* KUNCI 1: Tambahan shrink-0 di ujung kanan agar lingkaran tidak ikut gepeng saat layar mengecil */}
      <div className="relative w-44 h-44 mb-5 overflow-hidden rounded-full border-4 border-[#F8F6F1] shadow-sm bg-[#EDE8DC] transition-transform duration-500 group-hover:-translate-y-2 shrink-0">
        <img 
          src={item.img} 
          alt={item.nama} 
          onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + item.nama + '&background=1E3A1E&color=F8F6F1&size=256' }}
          /* KUNCI 2: Ganti object-center menjadi object-top agar fokus ke muka/kepala */
          className="w-full h-full object-cover object-top opacity-90 grayscale-0 hover:grayscale group-hover:opacity-100 transition-all duration-700" 
        />
      </div>
      <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#1A2410", lineHeight: 1.3 }}>
        {item.nama}
      </h4>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8960C", marginTop: "8px" }}>
        {item.jabatan}
      </p>
    </div>
  ))}
</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}