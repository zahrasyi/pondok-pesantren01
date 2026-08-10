"use client";

import { useState } from "react";

export function CampusLife() {
  const [hoveredHighlight, setHoveredHighlight] = useState<number | null>(null);
  const tiles = [
    {
      img: "https://images.unsplash.com/photo-1762628052475-622104e499a3?w=700&h=500&fit=crop&auto=format",
      label: "Taman yang Tenang",
    },
    {
      img: "https://images.unsplash.com/photo-1720323650006-6dd831b7c8b3?w=700&h=300&fit=crop&auto=format",
      label: "Jalan Kampus",
    },
    {
      img: "https://images.unsplash.com/photo-1632782532013-bd3f5f9197db?w=700&h=300&fit=crop&auto=format",
      label: "Gedung Akademik",
    },
  ];

  const highlights = [
    { icon: "", label: "Sholat Berjamaah", desc: "Sholat lima waktu berjamaah di masjid pusat kampus." },
    { icon: "", label: "Halaqah Ilmu", desc: "Lingkar kajian kecil bersama ulama senior setiap malam." },
    { icon: "", label: "Taman Kampus", desc: "Taman yang asri untuk tafakur dan pembelajaran informal." },
    { icon: "", label: "Organisasi Santri", desc: "Debat, jurnalistik, kaligrafi, dan kegiatan pengabdian masyarakat." },
  ];

  return (
    <section id="campus-life" className="bg-[#F8F6F1] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
              Kehidupan Kampus
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Kehidupan di <em>Ma'had Al-Noor</em>
            </h2>
            <p className="max-w-xs" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.8 }}>
              Lingkungan pesantren kami membangun kedisiplinan, ukhuwah, dan kecintaan terhadap ilmu yang melampaui batas ruang kelas.
            </p>
          </div>
        </div>

        {/* Photo collage */}
        <div className="grid grid-cols-2 gap-px bg-[rgba(30,58,30,0.1)] mb-px" style={{ height: "420px" }}>
          <div className="relative overflow-hidden group cursor-pointer bg-[#1A2410]">
            <img
              src={tiles[0].img}
              alt={tiles[0].label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,36,16,0.5) 0%, transparent 60%)" }} />
            <div className="absolute bottom-4 left-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(248,246,241,0.7)" }}>
              {tiles[0].label}
            </div>
          </div>
          <div className="flex flex-col gap-px">
            {tiles.slice(1).map((tile, i) => (
              <div key={i} className="relative overflow-hidden group cursor-pointer bg-[#1A2410] flex-1">
                <img
                  src={tile.img}
                  alt={tile.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,36,16,0.5) 0%, transparent 60%)" }} />
                <div className="absolute bottom-3 left-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(248,246,241,0.7)" }}>
                  {tile.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-30 bg-[rgba(30,58,30,0.1)]">
          {highlights.map((h, i) => {
            const on = hoveredHighlight === i;
            return (
              <div
                key={h.label}
                className="p-8 transition-colors duration-300"
                style={{ background: on ? "#1E3A1E" : "#FFFFFF", cursor: "default" }}
                onMouseEnter={() => setHoveredHighlight(i)}
                onMouseLeave={() => setHoveredHighlight(null)}
              >
                <div className="text-3xl mb-4">{h.icon}</div>
                <div className="mb-2 transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500, color: on ? "#F8F6F1" : "#1A2410" }}>
                  {h.label}
                </div>
                <p className="transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, color: on ? "rgba(248,246,241,0.65)" : "#6B7355", lineHeight: 1.75 }}>
                  {h.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}