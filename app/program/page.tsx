"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

const programs = [
  {
    id: "01",
    jenjang: "Sarjana (S1)",
    title: "Ilmu Al-Qur'an & Tafsir",
    arabic: "علوم القرآن والتفسير",
    duration: "4 Tahun",
    desc: "Pengkajian mendalam terhadap tafsir Al-Qur'an, ilmu tajwid, dan hafalan di bawah bimbingan para qari master.",
    mata: ["Ulumul Qur'an", "Tafsir Maudhu'i", "Ilmu Tajwid", "Tahfizh Al-Qur'an", "Balaghah"],
    img: "https://images.unsplash.com/photo-1720873160840-d5934323bb23?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "02",
    jenjang: "Sarjana (S1)",
    title: "Fiqh & Ushul Fiqh",
    arabic: "الفقه الإسلامي وأصوله",
    duration: "4 Tahun",
    desc: "Fiqh dan ushul fiqh klasik dari teks-teks primer, disertai penerapan hukum Islam untuk persoalan kontemporer.",
    mata: ["Fiqh Muqaran", "Ushul Fiqh", "Qawa'id Fiqhiyyah", "Fiqh Kontemporer", "Maqashid Syariah"],
    img: "https://images.unsplash.com/photo-1623314556929-69d34cb19010?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "03",
    jenjang: "Pascasarjana (S2)",
    title: "Bahasa & Sastra Arab",
    arabic: "اللغة العربية وآدابها",
    duration: "2 Tahun",
    desc: "Penguasaan bahasa Arab secara komprehensif meliputi nahwu, sharaf, balaghah, dan kritik sastra klasik.",
    mata: ["Nahwu Lanjutan", "Sharaf", "Balaghah", "Sastra Arab Klasik", "Linguistik Arab Modern"],
    img: "https://images.unsplash.com/photo-1622137879013-beaca5144a4b?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "04",
    jenjang: "Diploma (D3)",
    title: "Pendidikan Islam",
    arabic: "التربية الإسلامية",
    duration: "2 Tahun",
    desc: "Pedagogi berlandaskan nilai-nilai Islam, mempersiapkan para pendidik untuk membimbing generasi penerus.",
    mata: ["Psikologi Pendidikan Islam", "Kurikulum Berbasis Nilai", "Metode Pengajaran", "Manajemen Kelas Islami"],
    img: "https://images.unsplash.com/photo-1663572092918-e31425e93121?w=600&auto=format&fit=crop&q=60",
  },
];

export default function ProgramPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Program Akademik"
        title="Jalan Menuju"
        titleItalic="Ilmu yang Mulia"
        arabic="وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ"
        desc="Setiap program kami dirancang untuk mencetak ulama yang kokoh, cendekiawan yang kritis, dan pemimpin yang amanah."
        img="https://images.unsplash.com/photo-1741699428220-65f37f3fbbcb?w=1600&h=900&fit=crop&auto=format"
      />

      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[rgba(30,58,30,0.1)]">
            {programs.map((prog, i) => (
              <div
                key={prog.id}
                className="bg-white cursor-pointer group"
                onClick={() => setSelected(selected === i ? null : i)}
              >
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0" style={{ background: "rgba(26,36,16,0.25)" }} />
                  <div className="absolute top-4 left-4">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A2410", background: "#B8960C", padding: "4px 10px" }}>
                      {prog.jenjang}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", fontWeight: 400, color: "rgba(248,246,241,0.2)", lineHeight: 1 }}>
                    {prog.id}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-2" style={{ fontFamily: "'Amiri', serif", fontSize: "16px", color: "#B8960C", direction: "rtl", textAlign: "right" }}>{prog.arabic}</div>
                  <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#1A2410" }}>{prog.title}</h3>
                  <p className="mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.75 }}>{prog.desc}</p>

                  {/* Expandable mata kuliah */}
                  {selected === i && (
                    <div className="mt-4 pt-4 border-t border-[rgba(30,58,30,0.1)]">
                      <div className="mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7355" }}>
                        Mata Kuliah Utama
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {prog.mata.map((m) => (
                          <span key={m} style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, color: "#1E3A1E", background: "rgba(30,58,30,0.07)", padding: "4px 10px" }}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-5">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7355" }}>{prog.duration}</span>
                    <div className="flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1E3A1E" }}>
                      {selected === i ? "Sembunyikan" : "Detail"} <ArrowUpRight size={12} style={{ transform: selected === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A1E] py-20 px-8 text-center">
        <div className="mb-2" style={{ fontFamily: "'Amiri', serif", fontSize: "22px", color: "#B8960C" }}>هَلْ مِنْ مَزِيدٍ</div>
        <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, color: "#F8F6F1" }}>Siap Memulai Perjalanan Ilmumu?</h2>
        <p className="mb-8 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(248,246,241,0.6)", lineHeight: 1.8 }}>
          Hubungi bagian penerimaan kami untuk informasi lebih lanjut tentang program yang sesuai dengan tujuanmu.
        </p>
        <Link href="/penerimaan" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A2410", background: "#B8960C", padding: "16px 40px", textDecoration: "none", display: "inline-block" }}>
          Daftar Sekarang
        </Link>
      </section>
      <Footer />
    </main>
  );
}