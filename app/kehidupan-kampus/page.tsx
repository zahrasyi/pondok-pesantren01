"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Data Kegiatan Pondok
const kegiatanPondok = [
  {
    title: "Wisuda Tahfidz & Purna Siswa",
    desc: "Momen paling sakral dan membanggakan. Perayaan bagi para santri yang telah menyelesaikan amanah besar sebagai Hamilul Qur'an (penghafal 30 juz) dan penyerahan ijazah kelulusan sebagai bekal mereka melangkah ke jenjang pendidikan tinggi.",
    img: "/hero/wisudatahfidz.png"
  },
  {
    title: "Amaliyah Tadris (Praktek Mengajar)",
    desc: "Menyiapkan kader pemimpin umat. Santri kelas akhir diuji kemampuannya untuk terjun langsung menjadi pendidik yang profesional, mempraktikkan ilmu pedagogik dengan pengawasan ketat dari para asatidz.",
    img: "/program/amaliyahtad.png"
  },
  {
    title: "Safari Khotmil Qur'an",
    desc: "Berdakwah dan membumikan Al-Qur'an. Rombongan santri Daarul Huda turun langsung ke tengah masyarakat di berbagai daerah untuk menyelenggarakan khataman Al-Qur'an dan menebarkan keberkahan ilmu.",
    img: "/program/safaritah.png"
  },
  {
    title: "Haul Akbar",
    desc: "Merawat ingatan, menyambung sanad. Sebuah perhelatan besar yang dihadiri ribuan jamaah, santri, dan alumni untuk mendoakan serta mengenang jasa perjuangan Muassis (pendiri) pondok, K.H. Hasan Bashori Yasin.",
    img: "/kegiatan/haul.png"
  },
  {
    title: "Perkemahan (Khutbatul Arsy / Pramuka)",
    desc: "Membangun mental pejuang di alam terbuka. Ajang pendidikan karakter yang melatih kemandirian, kerja sama tim (teamwork), dan ketangguhan fisik santri melalui kegiatan kepramukaan yang dikemas secara Islami.",
    img: "/kegiatan/kemah2.png"
  },
  {
    title: "Rihlah (Perjalanan Edukatif)",
    desc: "Tadabbur alam dan penyegaran pikiran. Agenda perjalanan edukatif di luar lingkungan pesantren untuk memperluas wawasan santri sekaligus mensyukuri keindahan ciptaan Allah SWT.",
    img: "/kegiatan/rihlah.png"
  },
  {
    title: "Muhadharah (Latihan Pidato)",
    desc: "Melatih kepercayaan diri dan public speaking santri dalam tiga bahasa (Arab, Inggris, Indonesia) untuk mencetak dai dan pemimpin yang artikulatif.",
    img: "/kegiatan/muhadhoroh.png"
  },
  {
    title: "Manasik Haji",
    desc: "Ujian mental dan intelektual yang ketat di mana santri diuji kedalaman pemahaman materinya secara langsung di hadapan majelis asatidz.",
    img: "/kegiatan/mhaji.png"
  },
  {
    title: "Pekan Olahraga",
    desc: "Ajang tahunan untuk menyalurkan bakat, minat, dan sportivitas santri melalui berbagai cabang perlombaan olahraga dan kesenian Islami.",
    img: "/kegiatan/olga.png"
  },
  {
    title: "Laporan Pertanggungjawaban",
    desc: "Ajang tahunan untuk menyalurkan bakat, minat, dan sportivitas santri melalui berbagai cabang perlombaan olahraga dan kesenian Islami.",
    img: "/kegiatan/opdh.png"
  },
  {
    title: "Tahfidz",
    desc: "Ajang tahunan untuk menyalurkan bakat, minat, dan sportivitas santri melalui berbagai cabang perlombaan olahraga dan kesenian Islami.",
    img: "/kegiatan/tahfidz.png"
  },
  {
    title: "Tarhib Ramadhan",
    desc: "Ajang tahunan untuk menyalurkan bakat, minat, dan sportivitas santri melalui berbagai cabang perlombaan olahraga dan kesenian Islami.",
    img: "/kegiatan/tarhib.png"
  }
];

// Data Kampus Baru
const kampusData = [
  {
    nama: "Kampus 1",
    desc: "Berlokasi di Jl. Murcoyo III, Gondanglegi Wetan. Merupakan cikal bakal berdirinya pesantren dan menjadi pusat utama kegiatan pendidikan Al-Qur’an.",
    img: "/kegiatan/kampus1.jpg"
  },
  {
    nama: "Kampus 2",
    desc: "Berada di Desa Sepanjang. Terus dalam proses pembangunan dan pengembangan untuk memberikan fasilitas modern yang lebih baik bagi para santri.",
    img: "/kegiatan/kampus2.jpg"
  },
  {
    nama: "Kampus 3",
    desc: "Berlokasi di Desa Putat Kidul. Difungsikan secara khusus sebagai Pondok Karantina Tahfidz untuk mencetak santriwati Hamilul Qur'an.",
    img: "/about/babussalam.jpg"
  }
];

const prestasiSantriwati = [
  { title: "Juara 1 Musabaqah Hifzhil Qur'an Nasional 30 Juz", year: "2025", desc: "Diraih oleh delegasi santriwati tingkat Aliyah dalam ajang MTQ Nasional di Jakarta." },
  { title: "Medali Emas Olimpiade Bahasa Arab Internasional", year: "2025", desc: "Penguasaan nahwu, shorof, dan muhadatsah aktif mengantarkan santriwati meraih predikat terbaik." },
  { title: "Karya Tulis Ilmiah Terbaik Tingkat Nasional", year: "2024", desc: "Penelitian inovatif tentang integrasi sains modern dan kitab kuning karya santriwati." },
];

const organisasi = [
  { nama: "Himpunan Mahasiswa Tahfizh", desc: "Wadah pengembangan program hafalan dan tilawah Al-Qur'an." },
  { nama: "Lembaga Debat Islam", desc: "Melatih kemampuan berpikir kritis dan argumentasi berdasarkan dalil." },
  { nama: "Bulletin Daarul Huda", desc: "Media jurnalistik santri untuk menulis dan menyebarkan ilmu." },
  { nama: "Majelis Kaligrafi", desc: "Seni khat Islam sebagai ekspresi keindahan dan spiritualitas." },
  { nama: "Tim Pengabdian Masyarakat", desc: "Program dakwah dan pelayanan sosial di komunitas sekitar pondok." },
  { nama: "Koperasi Santri", desc: "Melatih jiwa wirausaha yang halal dan pengelolaan ekonomi Islam." },
];

export default function KehidupanPondokPage() {
  const [showAllKegiatan, setShowAllKegiatan] = useState(false);
  const [activeKampus, setActiveKampus] = useState(1); // Default kampus 2 terbuka
  
  const displayedKegiatan = showAllKegiatan ? kegiatanPondok : kegiatanPondok.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Kehidupan Pondok"
        title="Hidup di"
        titleItalic="Daarul Huda"
        desc="Lingkungan pesantren kami membentuk karakter, ukhuwah, dan kecintaan mendalam terhadap ilmu yang melampaui batas kelas."
        img="/kegiatan/dhuha.png"
      />

      {/* Kegiatan & Event di Pondok */}
      <section className="bg-[#1E3A1E] py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-16" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 46px)", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.2 }}>
            Kegiatan di <em>Pondok Pesantren</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedKegiatan.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#F8F6F1] border border-[rgba(184,150,12,0.2)] rounded-2xl overflow-hidden flex flex-col group hover:border-[#B8960C] transition-all duration-500 shadow-lg"
              >
                <div className="h-[240px] overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2410] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="mb-4 text-[#000000] group-hover:text-[#B8960C] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(0,0,0,0.75)", lineHeight: 1.75 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {kegiatanPondok.length > 6 && (
            <div className="mt-14 flex justify-center">
              <button
                onClick={() => setShowAllKegiatan(!showAllKegiatan)}
                className="bg-[#B8960C] text-[#1A2410] hover:bg-[#F8F6F1] transition-colors duration-300 shadow-md"
                style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: "13px", 
                  fontWeight: 400, 
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  padding: "14px 36px", 
                  borderRadius: "5px" 
                }}
              >
                {showAllKegiatan ? "Tampilkan Lebih Sedikit" : "Muat Lebih Banyak"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Tiga Lokasi Kampus (Menggantikan Fasilitas) */}
      <section className="bg-[#F8F6F1] py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "#1A2410" }}>
            Tiga Lokasi <em>Kampus</em> Daarul Huda
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 h-[700px] md:h-[450px]">
            {kampusData.map((kampus, index) => {
              const isActive = activeKampus === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveKampus(index)}
                  className={`relative cursor-pointer transition-all duration-700 ease-in-out rounded-3xl overflow-hidden shadow-sm hover:shadow-md flex flex-col ${
                    isActive ? "w-full md:w-[50%] bg-white" : "w-full md:w-[25%] bg-[#1E3A1E]"
                  }`}
                >
                  <div className={`relative w-full overflow-hidden transition-all duration-700 ${isActive ? "h-[60%] md:h-[65%]" : "h-full"}`}>
                    <img
                      src={kampus.img}
                      alt={kampus.nama}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {!isActive && <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />}
                    <div className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}>
                      <h3 className="text-white text-center text-xl md:text-2xl font-medium tracking-wide drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {kampus.nama.split(" ")[0]} {kampus.nama.split(" ")[1]}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-center px-8 transition-all duration-700 ${
                      isActive ? "h-[40%] md:h-[35%] opacity-100" : "h-0 opacity-0"
                    }`}
                  >
                    <h3 className="mb-2 text-[#1A2410]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600 }}>
                      {kampus.nama}
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.6 }}>
                      {kampus.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prestasi Santriwati */}
      <section className="bg-[#EDE8DC] py-24 px-8 border-t border-[rgba(30,58,30,0.08)]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header dengan Animasi Lampu Kedap-Kedip */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Prestasi Gemilang <em>Santriwati</em>
            </h2>
            
            {/* Badge Status Live/Update */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-[rgba(30,58,30,0.08)]">
              {/* Lampu Indikator Kedap-Kedip */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              {/* Teks Status */}
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1A2410" }}>
                Update 2026
              </span>
            </div>
          </div>
          
          {/* Grid Kartu Prestasi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prestasiSantriwati.map((p, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[rgba(30,58,30,0.06)] flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#B8960C]/10 text-[#B8960C] px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {p.year}
                  </span>
                  <h3 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#1A2410", lineHeight: 1.35 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Lihat Semua Berita */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/berita"
              className="group inline-flex items-center gap-3 pb-2 border-b border-[#1A2410] text-[#1A2410] hover:text-[#B8960C] hover:border-[#B8960C] transition-all duration-300"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "13px", 
                fontWeight: 400, 
                letterSpacing: "0.15em",
                textTransform: "uppercase"
              }}
            >
              Semua Berita
              <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </section>

      {/* Organisasi & Komunitas Santri */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "#1A2410" }}>
            Berkembang Bersama <em>Organisasi</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(30,58,30,0.1)]">
            {organisasi.map((o) => (
              <div key={o.nama} className="bg-white p-8 hover:bg-[#1E3A1E] group transition-colors duration-300 cursor-default">
                <h4 
                  className="mb-3 text-[#1A2410] group-hover:text-[#B8960C] transition-colors duration-300" 
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 600 }} 
                >
                  {o.nama}
                </h4>
                <p 
                  className="text-[#6B7355] group-hover:text-[#F8F6F1] transition-colors duration-300" 
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.75 }}
                >
                  {o.desc}
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