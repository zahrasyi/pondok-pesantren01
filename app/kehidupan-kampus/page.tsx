"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// Import Sanity client
import { client } from "@/sanity/lib/client";

// --- DATA STATIS LAMA (TIDAK ADA YANG BERUBAH DI SINI) ---
const kegiatanPondok = [
  { title: "Wisuda Tahfidz & Purna Siswa", desc: "Momen paling sakral dan membanggakan. Perayaan bagi para santri yang telah menyelesaikan amanah besar sebagai Hamilul Qur'an.", img: "/hero/wisudatahfidz.png" },
  { title: "Amaliyah Tadris (Praktek Mengajar)", desc: "Menyiapkan kader pemimpin umat. Santri kelas akhir diuji kemampuannya untuk terjun langsung menjadi pendidik yang profesional.", img: "/program/amaliyahtad.png" },
  { title: "Safari Khotmil Qur'an", desc: "Berdakwah dan membumikan Al-Qur'an. Rombongan santri Daarul Huda turun langsung ke tengah masyarakat di berbagai daerah.", img: "/program/safaritah.png" },
  { title: "Haul Akbar", desc: "Merawat ingatan, menyambung sanad. Sebuah perhelatan besar yang dihadiri ribuan jamaah, santri, dan alumni.", img: "/kegiatan/haul.png" },
  { title: "Perkemahan (Khutbatul Arsy / Pramuka)", desc: "Membangun mental pejuang di alam terbuka. Ajang pendidikan karakter yang melatih kemandirian dan kerja sama tim.", img: "/kegiatan/kemah2.png" },
  { title: "Rihlah (Perjalanan Edukatif)", desc: "Tadabbur alam dan penyegaran pikiran. Agenda perjalanan edukatif di luar lingkungan pesantren untuk memperluas wawasan.", img: "/kegiatan/rihlah.png" }
];

const kampusData = [
  { nama: "Kampus 1", desc: "Berlokasi di Jl. Murcoyo III, Gondanglegi Wetan. Merupakan cikal bakal berdirinya pesantren dan menjadi pusat utama.", img: "/kegiatan/kampus1.jpg" },
  { nama: "Kampus 2", desc: "Berada di Desa Sepanjang. Terus dalam proses pembangunan dan pengembangan untuk memberikan fasilitas modern.", img: "/kegiatan/kampus2.jpg" },
  { nama: "Kampus 3", desc: "Berlokasi di Desa Putat Kidul. Difungsikan secara khusus sebagai Pondok Karantina Tahfidz untuk mencetak santriwati.", img: "/about/babussalam.jpg" }
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
  const [activeKampus, setActiveKampus] = useState(1);
  
  // State untuk menyimpan data prestasi dari Sanity
  const [prestasiData, setPrestasiData] = useState<any[]>([]);
  const [loadingPrestasi, setLoadingPrestasi] = useState(true);

  // Mengambil data Prestasi dari Sanity
  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const data = await client.fetch(`*[_type == "prestasi"] | order(_createdAt desc)`);
        setPrestasiData(data);
      } catch (error) {
        console.error("Gagal mengambil data prestasi:", error);
      } finally {
        setLoadingPrestasi(false);
      }
    };

    fetchPrestasi();
  }, []);

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
              <div key={i} className="bg-[#F8F6F1] border border-[rgba(184,150,12,0.2)] rounded-2xl overflow-hidden flex flex-col group hover:border-[#B8960C] transition-all duration-500 shadow-lg">
                <div className="h-[240px] overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
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
        </div>
      </section>

      {/* Tiga Lokasi Kampus */}
      <section className="bg-[#F8F6F1] py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "#1A2410" }}>
            Tiga Lokasi <em>Kampus</em> Daarul Huda
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 h-[700px] md:h-[450px]">
            {kampusData.map((kampus, index) => {
              const isActive = activeKampus === index;
              return (
                <div key={index} onClick={() => setActiveKampus(index)} className={`relative cursor-pointer transition-all duration-700 ease-in-out rounded-3xl overflow-hidden shadow-sm hover:shadow-md flex flex-col ${isActive ? "w-full md:w-[50%] bg-white" : "w-full md:w-[25%] bg-[#1E3A1E]"}`}>
                  <div className={`relative w-full overflow-hidden transition-all duration-700 ${isActive ? "h-[60%] md:h-[65%]" : "h-full"}`}>
                    <img src={kampus.img} alt={kampus.nama} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    {!isActive && <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />}
                    <div className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}>
                      <h3 className="text-white text-center text-xl md:text-2xl font-medium tracking-wide drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {kampus.nama}
                      </h3>
                    </div>
                  </div>
                  <div className={`flex flex-col justify-center px-8 transition-all duration-700 ${isActive ? "h-[40%] md:h-[35%] opacity-100" : "h-0 opacity-0"}`}>
                    <h3 className="mb-2 text-[#1A2410]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600 }}>{kampus.nama}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.6 }}>{kampus.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prestasi Santriwati (Diambil dari Sanity) */}
      <section className="bg-[#EDE8DC] py-24 px-8 border-t border-[rgba(30,58,30,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Prestasi Gemilang <em>Santriwati</em>
            </h2>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-[rgba(30,58,30,0.08)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1A2410" }}>
                Update 2026
              </span>
            </div>
          </div>
          
          {loadingPrestasi ? (
            <div className="text-center py-10" style={{ color: "#6B7355" }}>Memuat daftar prestasi...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {prestasiData.map((p, idx) => (
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
          )}

          <div className="mt-16 flex justify-center">
            <Link
              href="/berita"
              className="group inline-flex items-center gap-3 pb-2 border-b border-[#1A2410] text-[#1A2410] hover:text-[#B8960C] hover:border-[#B8960C] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Semua Berita
              <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Organisasi - Formasi 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[rgba(30,58,30,0.1)] mb-20 p-10">
        {[
          { 
            title: "OPDH Putra", 
            desc: "Organisasi Pelajar Daarul Huda sebagai wadah utama pengembangan kepemimpinan, kemandirian, dan kedisiplinan khusus bagi santri putra." 
          },
          { 
            title: "OPDH Putri", 
            desc: "Organisasi Pelajar Daarul Huda untuk santri putri, berfokus pada pembentukan karakter tangguh, terampil, berorganisasi, dan berakhlakul karimah." 
          },
          { 
            title: "Koordinator Pramuka Putra", 
            desc: "Gerakan kepanduan untuk santri putra yang melatih kecakapan fisik, ketangkasan, kepemimpinan lapangan, serta kemandirian di alam bebas." 
          },
          { 
            title: "Koordinator Pramuka Putri", 
            desc: "Gerakan kepanduan santri putri untuk menanamkan jiwa gotong royong, ketangkasan, dan kedisiplinan yang berlandaskan nilai-nilai keislaman." 
          },
        ].map((org, idx) => (
          <div 
            key={idx} 
            className="bg-white p-10 lg:p-14 border-r border-b border-[rgba(30,58,30,0.1)] hover:bg-[#F8F6F1] transition-colors duration-300"
          >
            <h3 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#1A2410" }}>
              {org.title}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>
              {org.desc}
            </p>
          </div>
        ))}
      </div>
      
      <Footer />
    </main>
  );
}