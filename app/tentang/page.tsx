"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

const values = [
  { ar: "القرآن", id: "Spiritual & Tahfidz", desc: "Menjadikan Al-Qur'an sebagai episentrum pendidikan. Menghafal Al-Qur'an bukan sekadar menjaga lisan, tetapi menata hati dan karakter untuk menjadi Hamilul Qur'an (Penjaga Al-Qur'an) yang berakhlak mulia." },
  { ar: "التفقه في الدين", id: "Tradisi Salaf & Kitab Kuning", desc: "Mempertahankan tradisi literasi Islam klasik. Melalui Madrasah Diniyah (Wustho & Ulya), santri dibekali nalar fiqih, akidah, dan kemampuan analisis hukum Islam berdasarkan literatur ulama salafus shalih." },
  { ar: "اللغة والانضباط", id: "Wawasan Global & Modernitas", desc: "Kedisiplinan waktu yang dinamis serta kewajiban berbahasa Arab dan Inggris (Sintesa Gontor). Membentuk mental pejuang dan kemampuan komunikasi internasional agar santri memiliki daya saing global." },
];

// Data milestone dipecah menjadi title dan desc agar pas dengan desain card referensi
const milestones = [
  { year: "1969", title: "Rintisan Awal", desc: "Pondok Pesantren Daarul Huda resmi didirikan di Gondanglegi, Malang oleh K.H. Hasan Bashori Yasin dengan keterbatasan sarana namun visi yang besar." },
  { year: "Fase Regenerasi", title: "Estafet Kepemimpinan", desc: "Estafet kepemimpinan dilanjutkan oleh Hj. Lilik Chaidaroh dan K.H. Abdul Munif Ma'sum. Dimulailah integrasi sistem pendidikan modern dan formal." },
  { year: "2016", title: "Berdirinya Madrasah Aliyah", desc: "Berdirinya Madrasah Aliyah (MA) Daarul Huda, menjadi kawah candradimuka bagi santri untuk mempersiapkan diri ke perguruan tinggi." },
  { year: "Masa Kini", title: "Ekspansi Terpadu", desc: "Ekspansi masif menjadi tiga lokasi terpadu: Pusat Sejarah & Salafiyah, Pusat Pendidikan Modern, dan Pusat Unggulan Tahfidz." },
  { year: "Masa Depan", title: "Proyeksi Perguruan Tinggi", desc: "Proyeksi pembangunan Perguruan Tinggi Daarul Huda sebagai pusat keunggulan untuk melahirkan sarjana muslim bersanad keilmuan klasik." },
];

const pimpinan = [
  { name: "K.H. Hasan Bashori Yasin", role: "Pendiri (Muassis)", img: "/quote/pendiri.png" },
  { name: "Hj. Lilik Chaidaroh", role: "Pengasuh & Pakar Kurikulum Kitab Kuning (Salafiyah)", img: "/admisss.png" },
  { name: "K.H. Abdul Munif Ma'sum", role: "Pengasuh & Pimpinan Sinergi Pendidikan Modern", img: "/admisss.png" },
];

// Komponen khusus untuk item Milestone agar bisa mendeteksi scroll (Intersection Observer)
const TimelineItem = ({ data, index }: { data: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Hentikan observasi setelah terlihat agar animasinya cuma sekali
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`mb-12 w-full flex flex-col md:flex-row items-center justify-between transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${!isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Kotak Konten */}
      <div className={`w-full md:w-[45%] flex justify-${isEven ? "end" : "start"}`}>
        <div className="relative flex flex-col md:flex-row bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[rgba(30,58,30,0.08)] w-full max-w-[480px]">
          
          {/* Panah penunjuk ke garis tengah (Hanya terlihat di Desktop) */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#F8F6F1] transform rotate-45 border-[rgba(30,58,30,0.08)] ${
            isEven 
              ? "-right-2 border-t border-r" 
              : "-left-2 border-b border-l z-10"
          }`} />

          {/* Sisi Kiri Card (Teks Deskripsi) */}
          <div className={`p-6 md:p-8 flex-grow order-2 ${isEven ? "md:order-1" : "md:order-2"}`}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#1A2410", marginBottom: "8px" }}>
              {data.title}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>
              {data.desc}
            </p>
          </div>

          {/* Sisi Kanan Card (Hanya Angka Tahun/Teks) - Tulisan 'TAHUN' dihapus */}
          <div className={`flex flex-col items-center justify-center p-6 bg-[#F8F6F1] shrink-0 min-w-[120px] order-1 ${
            isEven 
              ? "md:order-2 border-b md:border-b-0 md:border-l border-[rgba(30,58,30,0.08)] rounded-t-xl md:rounded-r-xl md:rounded-tl-none" 
              : "md:order-1 border-b md:border-b-0 md:border-r border-[rgba(30,58,30,0.08)] rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          }`}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#B8960C", textAlign: "center", lineHeight: 1.2 }}>
              {data.year}
            </span>
          </div>

        </div>
      </div>

      {/* Titik Tengah (Garis Timeline) */}
      <div className="hidden md:flex w-[10%] justify-center relative z-10">
        <div className="w-5 h-5 bg-white rounded-full border-4 border-[#B8960C] shadow-sm transition-transform duration-500 hover:scale-125" />
      </div>

      {/* Spacer (Agar tata letak di grid seimbang) */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Tentang Lembaga"
        title="Mufaqqih Fiddin"
        titleItalic="dan Berwawasan Global"
        desc="Selama lebih dari lima dekade, Pondok Pesantren Daarul Huda Li Tahfidhil Qur'an telah menjadi saksi bisu bagaimana keikhlasan dan keteguhan hati mampu mengubah keterbatasan menjadi mercusuar pendidikan Islam yang progresif di Kabupaten Malang."
        img="/hero/wisudatahfidz.png"
      />

      {/* Sejarah & Visi */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Sejarah</span>
            </div>
            <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Perjalanan <em>Panjang</em> 
            </h2>
            <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              Pondok Pesantren Daarul Huda Litahfidhil Qur'an, yang didirikan pada tahun 1969, telah menapaki perjalanan lebih dari lima dekade sebagai lembaga pendidikan yang berkomitmen mencetak generasi Qur'ani yang tangguh dan berakhlak mulia. Melalui pendekatan terpadu antara hafalan, adab, dan kedisiplinan, pesantren ini kini telah berekspansi menjadi tiga lokasi pembinaan, yakni Daarul Huda 1 di Gondanglegi Wetan sebagai cikal bakal dan pusat kegiatan, Daarul Huda 2 di Desa Sepanjang yang terus dikembangkan fasilitasnya, serta Daarul Huda 3 di Putat Kidul yang difungsikan khusus sebagai Pondok Karantina Tahfidz bagi santri putri.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              Selain berfokus melahirkan para huffadz pembela kalamullah, pondok pesantren ini turut memastikan para santrinya memiliki kemandirian melalui pembekalan beragam kecakapan hidup, mulai dari public speaking, bahasa asing, kepramukaan, seni, olahraga, tata boga, pertanian, hingga kewirausahaan. Pembinaan yang menyeluruh ini telah membuahkan berbagai prestasi membanggakan di tingkat kabupaten, provinsi, maupun nasional, sekaligus menegaskan visi pondok bahwa santri yang hebat tidak hanya diukur dari kuatnya hafalan, tetapi juga dari keluasan ilmu, keterampilan, dan kesiapannya dalam membawa manfaat bagi masyarakat luas.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Visi & Misi</span>
            </div>
            <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Tujuan <em>Mulia</em>
            </h2>
            <p className="mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              <strong style={{ fontWeight: 600, color: "#1A2410" }}>Visi:</strong> Mencetak Generasi Qur’ani Berakhlak Mulia, Berbadan Sehat dan Berpengetahuan Luas
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              <strong style={{ fontWeight: 600, color: "#1A2410" }}>Misi:</strong> Mencetak Generasi Qur'ani, Menanamkan Akhlak Mulia, Meningkatkan Kesehatan Fisik dan Mental, Mengembangkan Wawasan Ilmu Pengetahuan, dan Memupuk Kemandirian dan Kepedulian Sosial. 
            </p>
          </div>
        </div>
      </section>

      {/* Nilai-nilai */}
      <section className="bg-[#1E3A1E] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Nilai Inti</span>
              <div className="w-8 h-px bg-[#B8960C]" />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, color: "#F8F6F1" }}>
              Tiga Pilar <em>Utama</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 items-center text-center md:grid-cols-3 gap-px bg-[rgba(248,246,241,0.08)]">
            {values.map((v) => (
              <div key={v.id} className="p-10" style={{ background: "rgba(26,36,16,0.4)" }}>
                <div className="mb-4" style={{ fontFamily: "'Amiri', serif", fontSize: "48px", color: "#B8960C" }}>{v.ar}</div>
                <div className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#F8F6F1" }}>{v.id}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 300, color: "rgba(248,246,241,0.7)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Milestone dengan Efek Scroll */}
      <section className="bg-[#F8F6F1] py-32 px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          
          <div className="text-center mb-24">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: "#1A2410", marginBottom: "16px" }}>
              Tonggak <em>Sejarah</em>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 300, color: "#6B7355", maxWidth: "600px", margin: "0 auto" }}>
              Jejak langkah Pondok Pesantren Daarul Huda dari masa ke masa dalam mendedikasikan diri untuk pendidikan Islam.
            </p>
          </div>

          {/* Garis Tengah Timeline (Hanya tampil di tablet/desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[rgba(30,58,30,0.15)] to-transparent" style={{ top: "150px", bottom: "50px" }} />

          <div className="flex flex-col relative z-10">
            {milestones.map((m, i) => (
              <TimelineItem key={i} data={m} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* Pimpinan */}
      {/* <section className="bg-[#EDE8DC] py-24 px-8 border-t border-[rgba(30,58,30,0.05)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16 text-center">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Kepemimpinan</span>
            <div className="w-8 h-px bg-[#B8960C]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pimpinan.map((p) => (
              <div key={p.name} className="bg-white p-10 rounded-2xl shadow-sm border border-[rgba(30,58,30,0.04)] text-center hover:shadow-lg transition-shadow duration-300 group">
                <img src={p.img} alt={p.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-[#F8F6F1] group-hover:border-[#B8960C] transition-colors duration-300" style={{ filter: "grayscale(10%)" }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 600, color: "#1A2410", marginBottom: "8px" }}>{p.name}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.05em", color: "#B8960C" }}>{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      <Footer />
    </main>
  );
}