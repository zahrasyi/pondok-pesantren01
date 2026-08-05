"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

const allBerita = [
  {
    id: 1,
    category: "Akademik",
    date: "5 Juni 2026",
    title: "Musabaqah Hifzil Qur'an Tahunan Diikuti 400 Peserta dari Seluruh Nusantara",
    excerpt: "Kompetisi Tilawatil Qur'an Nasional 2026 yang diselenggarakan Ma'had An-Noor menyambut santri dari 28 provinsi.",
    img: "https://images.unsplash.com/photo-1540567736792-f78f6242e4e0?w=700&h=460&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 2,
    category: "Penelitian",
    date: "28 Mei 2026",
    title: "Makalah Dosen tentang Bioetika Islam Diterbitkan di Jurnal Internasional Terkemuka",
    excerpt: "Penelitian Dr. Fatimah Zahra yang inovatif mendapat pengakuan dari Oxford Journal of Islamic Studies.",
    img: "https://images.unsplash.com/photo-1571193161738-deaba9b6cc26?w=700&h=460&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 3,
    category: "Penerimaan",
    date: "20 Mei 2026",
    title: "Penerimaan 2026: Pendaftaran Dibuka untuk Semua Program Sarjana",
    excerpt: "Calon santri dapat mengajukan pendaftaran melalui portal daring. Batas waktu: 15 Agustus.",
    img: "https://images.unsplash.com/photo-1514369118554-e20d93546b30?w=700&h=460&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 4,
    category: "Kampus",
    date: "12 Mei 2026",
    title: "Sayap Perpustakaan Baru & Pusat Sumber Digital Resmi Dibuka",
    excerpt: "Baitul Hikmah Digital Library kini menyediakan akses ke lebih dari 120.000 teks Islam klasik dan kontemporer.",
    img: "https://images.unsplash.com/photo-1741699428220-65f37f3fbbcb?w=700&h=460&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 5,
    category: "Prestasi",
    date: "5 Mei 2026",
    title: "Santri Ma'had An-Noor Raih Juara 1 MTQ Tingkat Nasional",
    excerpt: "Muhammad Hafizh Abdurrahman, santri semester 6, berhasil meraih medali emas pada MTQ Nasional di Makassar.",
    img: "https://images.unsplash.com/photo-1720873160840-d5934323bb23?w=700&h=460&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 6,
    category: "Akademik",
    date: "25 April 2026",
    title: "Seminar Internasional Fiqh Kontemporer Hadirkan Ulama dari 12 Negara",
    excerpt: "Ma'had An-Noor sukses menyelenggarakan seminar internasional dengan peserta dari Malaysia, Mesir, Arab Saudi, dan lainnya.",
    img: "https://images.unsplash.com/photo-1623314556929-69d34cb19010?w=700&h=460&fit=crop&auto=format",
    featured: false,
  },
];

const categories = ["Semua", "Akademik", "Penelitian", "Penerimaan", "Kampus", "Prestasi"];

export default function BeritaPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua"
    ? allBerita
    : allBerita.filter((b) => b.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Berita & Pengumuman"
        title="Kabar Terkini"
        titleItalic="dari Kampus"
        arabic="اقْرَأْ بِاسْمِ رَبِّكَ"
        desc="Ikuti perkembangan terbaru dari Ma'had An-Noor — kegiatan akademik, prestasi santri, dan pengumuman resmi."
        img="https://images.unsplash.com/photo-1663572092918-e31425e93121?w=1600&h=900&fit=crop&auto=format"
      />

      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: activeCategory === c ? 500 : 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: activeCategory === c ? "#F8F6F1" : "#6B7355",
                  background: activeCategory === c ? "#1E3A1E" : "transparent",
                  border: `1px solid ${activeCategory === c ? "#1E3A1E" : "rgba(30,58,30,0.2)"}`,
                  padding: "8px 18px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured */}
          {featured && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-[rgba(30,58,30,0.1)] mb-px">
              <div className="lg:col-span-3 bg-white group cursor-pointer">
                <div className="relative overflow-hidden" style={{ height: "320px" }}>
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,36,16,0.7) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A2410", background: "#B8960C", padding: "4px 10px" }}>{featured.category}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6B7355" }}>{featured.date}</div>
                  <h3 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#1A2410", lineHeight: 1.35 }}>{featured.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.75 }}>{featured.excerpt}</p>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col">
                {rest.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex-1 p-7 bg-white border-b border-[rgba(30,58,30,0.1)] last:border-0 hover:bg-[#EDE8DC] transition-colors duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8960C" }}>{item.category}</span>
                      <span style={{ fontSize: "9px", color: "#6B7355" }}>·</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6B7355" }}>{item.date}</span>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 500, color: "#1A2410", lineHeight: 1.4 }}>{item.title}</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>{item.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Remaining grid */}
          {rest.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(30,58,30,0.1)]">
              {rest.slice(3).map((item) => (
                <div key={item.id} className="bg-white group cursor-pointer hover:shadow-sm transition-shadow">
                  <div className="relative overflow-hidden" style={{ height: "180px" }}>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8960C" }}>{item.category}</span>
                      <span style={{ fontSize: "9px", color: "#6B7355" }}>·</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6B7355" }}>{item.date}</span>
                    </div>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500, color: "#1A2410", lineHeight: 1.4 }}>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}