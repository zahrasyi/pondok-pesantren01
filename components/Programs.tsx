"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    id: "01",
    title: "Ilmu Al-Qur'an & Tafsir",
    arabic: "علوم القرآن والتفسير",
    duration: "4 Tahun",
    desc: "Pengkajian mendalam terhadap tafsir Al-Qur'an, ilmu tajwid, dan hafalan di bawah bimbingan para qari master.",
    img: "https://images.unsplash.com/photo-1720873160840-d5934323bb23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWRpbmclMjBhbHF1cmFufGVufDB8fDB8fHww",
  },
  {
    id: "02",
    title: "Fiqh & Ushul Fiqh",
    arabic: "الفقه الإسلامي وأصوله",
    duration: "4 Tahun",
    desc: "Fiqh dan ushul fiqh klasik dari teks-teks primer, disertai penerapan hukum Islam untuk persoalan-persoalan kontemporer.",
    img: "https://images.unsplash.com/photo-1623314556929-69d34cb19010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0YWIlMjBmaXFofGVufDB8fDB8fHww",
  },
  {
    id: "03",
    title: "Bahasa & Sastra Arab",
    arabic: "اللغة العربية وآدابها",
    duration: "2 Tahun",
    desc: "Penguasaan bahasa Arab secara komprehensif meliputi nahwu, sharaf, balaghah, dan kritik sastra klasik.",
    img: "https://images.unsplash.com/photo-1622137879013-beaca5144a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FzdHJhJTIwYXJhYmljfGVufDB8fDB8fHww",
  },
  {
    id: "04",
    title: "Pendidikan Islam",
    arabic: "التربية الإسلامية",
    duration: "2 Tahun",
    desc: "Pedagogi berlandaskan nilai-nilai Islam, mempersiapkan para pendidik untuk membimbing generasi penerus dengan hikmah dan keteladanan.",
    img: "https://images.unsplash.com/photo-1663572092918-e31425e93121?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlzbGFtaWMlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D",
  },
];

export function Programs() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="programs" className="bg-[#F8F6F1] py-30 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
                Program Akademik
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
              Jalan Menuju<br />
              <em>Ilmu yang Mulia</em>
            </h2>
          </div>
          <p className="max-w-xs" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.8 }}>
            Setiap program menyeimbangkan ilmu-ilmu Islam klasik dengan standar akademik yang ketat, menyiapkan lulusan untuk berkiprah sebagai ulama dan pengabdi masyarakat.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(30,58,30,0.1)]">
          {programs.map((prog, i) => (
            <div
              key={prog.id}
              className="relative overflow-hidden cursor-pointer"
              style={{
                background: hovered === i ? "#1E3A1E" : "#FFFFFF",
                transition: "background 0.4s ease",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image area */}
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: hovered === i ? "scale(1.04)" : "scale(1)" }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{ background: "rgba(26,36,16,0.3)", opacity: hovered === i ? 0.6 : 0.3 }}
                />
                {/* Program number */}
                <div className="absolute bottom-4 right-4" style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "48px",
                  fontWeight: 400,
                  color: "rgba(248,246,241,0.2)",
                  lineHeight: 1,
                }}>
                  {prog.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-3" style={{ fontFamily: "'Amiri', serif", fontSize: "16px", color: hovered === i ? "rgba(184,150,12,0.8)" : "#B8960C", letterSpacing: "0.05em", direction: "rtl", textAlign: "right" }}>
                  {prog.arabic}
                </div>
                <h3 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: hovered === i ? "#F8F6F1" : "#1A2410", lineHeight: 1.3 }}>
                  {prog.title}
                </h3>
                <p className="mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: hovered === i ? "rgba(248,246,241,0.65)" : "#6B7355", lineHeight: 1.75 }}>
                  {prog.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: hovered === i ? "rgba(248,246,241,0.45)" : "#6B7355" }}>
                    {prog.duration}
                  </span>
                  <div className="flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: hovered === i ? "#B8960C" : "#1E3A1E" }}>
                    Selengkapnya <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 text-center">
          <Link
            href="#"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1E3A1E",
              borderBottom: "1px solid #1E3A1E",
              paddingBottom: "2px",
              textDecoration: "none",
            }}
            className="hover:opacity-60 transition-opacity"
          >
            Lihat Semua Program
          </Link>
        </div>
      </div>
    </section>
  );
}