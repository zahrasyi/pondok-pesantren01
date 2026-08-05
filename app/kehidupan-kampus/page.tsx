"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

const fasilitas = [
  { icon: "", nama: "Masjid Jami' An-Noor", desc: "Masjid berkapasitas 1.500 jamaah sebagai pusat spiritual kehidupan kampus.", img: "https://images.unsplash.com/photo-1717246070626-b236a59ef2cc?w=600&h=400&fit=crop&auto=format" },
  { icon: "", nama: "Baitul Hikmah Library", desc: "Perpustakaan digital dengan koleksi lebih dari 120.000 referensi Islam klasik dan modern.", img: "https://images.unsplash.com/photo-1571193161738-deaba9b6cc26?w=600&h=400&fit=crop&auto=format" },
  { icon: "", nama: "Asrama Santri", desc: "Asrama putra dan putri terpisah dengan fasilitas modern yang nyaman dan kondusif.", img: "https://images.unsplash.com/photo-1762628052475-622104e499a3?w=600&h=400&fit=crop&auto=format" },
  { icon: "", nama: "Taman & Area Terbuka", desc: "Lingkungan kampus yang asri dan hijau untuk mendukung ketenangan jiwa dalam belajar.", img: "https://images.unsplash.com/photo-1720323650006-6dd831b7c8b3?w=600&h=400&fit=crop&auto=format" },
];

const jadwalHarian = [
  { waktu: "04:00", kegiatan: "Sholat Tahajud & Witir berjamaah" },
  { waktu: "05:00", kegiatan: "Sholat Subuh berjamaah & Dzikir pagi" },
  { waktu: "06:00", kegiatan: "Halaqah Tahfizh Al-Qur'an" },
  { waktu: "07:30", kegiatan: "Sarapan & Persiapan kuliah" },
  { waktu: "08:00", kegiatan: "Kegiatan akademik (sesi 1)" },
  { waktu: "12:00", kegiatan: "Sholat Dzuhur berjamaah & Makan siang" },
  { waktu: "13:30", kegiatan: "Kegiatan akademik (sesi 2)" },
  { waktu: "15:30", kegiatan: "Sholat Ashar berjamaah & Istirahat" },
  { waktu: "16:00", kegiatan: "Olahraga & Kegiatan ekstrakurikuler" },
  { waktu: "18:00", kegiatan: "Sholat Maghrib berjamaah & Kajian Kitab" },
  { waktu: "19:30", kegiatan: "Sholat Isya berjamaah & Belajar malam" },
  { waktu: "22:00", kegiatan: "Istirahat malam" },
];

const organisasi = [
  { nama: "Himpunan Mahasiswa Tahfizh", desc: "Wadah pengembangan program hafalan dan tilawah Al-Qur'an." },
  { nama: "Lembaga Debat Islam", desc: "Melatih kemampuan berpikir kritis dan argumentasi berdasarkan dalil." },
  { nama: "Bulletin An-Noor", desc: "Media jurnalistik santri untuk menulis dan menyebarkan ilmu." },
  { nama: "Majelis Kaligrafi", desc: "Seni khat Islam sebagai ekspresi keindahan dan spiritualitas." },
  { nama: "Tim Pengabdian Masyarakat", desc: "Program dakwah dan pelayanan sosial di komunitas sekitar kampus." },
  { nama: "Koperasi Santri", desc: "Melatih jiwa wirausaha yang halal dan pengelolaan ekonomi Islam." },
];

export default function KehidupanKampusPage() {
  const [hovFasilitas, setHovFasilitas] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Kehidupan Kampus"
        title="Hidup di"
        titleItalic="Ma'had An-Noor"
        arabic="إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ"
        desc="Lingkungan pesantren kami membentuk karakter, ukhuwah, dan kecintaan mendalam terhadap ilmu yang melampaui batas kelas."
        img="https://images.unsplash.com/photo-1776982298226-496bb56db7a3?w=1600&h=900&fit=crop&auto=format"
      />

      {/* Fasilitas */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Fasilitas Kampus</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(30,58,30,0.1)]">
            {fasilitas.map((f, i) => (
              <div
                key={f.nama}
                className="relative overflow-hidden cursor-pointer group"
                style={{ height: "300px" }}
                onMouseEnter={() => setHovFasilitas(i)}
                onMouseLeave={() => setHovFasilitas(null)}
              >
                <img src={f.img} alt={f.nama} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 transition-all duration-500" style={{ background: hovFasilitas === i ? "rgba(26,36,16,0.75)" : "rgba(26,36,16,0.35)" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500, color: "#F8F6F1" }}>{f.nama}</div>
                  <p className="mt-2 transition-all duration-500 overflow-hidden" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,246,241,0.75)", lineHeight: 1.7, maxHeight: hovFasilitas === i ? "80px" : "0", opacity: hovFasilitas === i ? 1 : 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jadwal Harian */}
      <section className="bg-[#1E3A1E] py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Jadwal Harian Santri</span>
          </div>
          <h2 className="mb-10" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, color: "#F8F6F1" }}>
            Hari yang <em>Penuh Berkah</em>
          </h2>
          <div className="flex flex-col">
            {jadwalHarian.map((j, i) => (
              <div key={i} className="flex gap-6 py-4 border-b border-[rgba(248,246,241,0.07)] last:border-0">
                <div className="w-14 flex-shrink-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 500, color: "#B8960C" }}>{j.waktu}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(248,246,241,0.75)" }}>{j.kegiatan}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisasi */}
      <section className="bg-[#EDE8DC] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Organisasi Santri</span>
          </div>
          <h2 className="mb-10" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, color: "#1A2410" }}>
            Berkembang Bersama <em>Komunitas</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(30,58,30,0.1)]">
            {organisasi.map((o) => (
              <div key={o.nama} className="bg-white p-8 hover:bg-[#1E3A1E] group transition-colors duration-300 cursor-default">
                <h4 className="mb-3 transition-colors" style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 500, color: "#1A2410" }} >{o.nama}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.75 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}