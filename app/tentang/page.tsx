import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

const values = [
  { ar: "عِلْم", id: "Ilmu", desc: "Menuntut ilmu adalah kewajiban setiap Muslim. Kami menjadikan penguasaan ilmu sebagai fondasi seluruh kegiatan akademik." },
  { ar: "أَدَب", id: "Akhlak", desc: "Ilmu tanpa akhlak adalah bahaya. Pembentukan karakter mulia menjadi prioritas utama dalam setiap aspek kehidupan pesantren." },
  { ar: "خِدْمَة", id: "Pengabdian", desc: "Lulusan kami disiapkan untuk mengabdi kepada umat dan masyarakat, membawa manfaat nyata bagi lingkungan sekitarnya." },
];

const milestones = [
  { year: "1989", event: "Ma'had An-Noor didirikan oleh Ustadz Dr. Abdullah Al-Hakim di Bogor, Jawa Barat." },
  { year: "1995", event: "Program sarjana pertama resmi terakreditasi oleh Kementerian Agama RI." },
  { year: "2003", event: "Pembangunan Masjid Jami' An-Noor sebagai pusat spiritual kampus." },
  { year: "2010", event: "Peluncuran program pascasarjana dan pusat penelitian Islam kontemporer." },
  { year: "2018", event: "Ma'had An-Noor meraih akreditasi A dari BAN-PT untuk seluruh program studi." },
  { year: "2024", event: "Pembukaan Baitul Hikmah Digital Library dengan koleksi lebih dari 120.000 referensi." },
];

const pimpinan = [
  { name: "Prof. Dr. Abdullah Al-Hakim", role: "Pendiri & Pengasuh Utama", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&auto=format" },
  { name: "Dr. H. Ahmad Fauzi, M.A.", role: "Direktur Akademik", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format" },
  { name: "Ustadzah Dr. Maryam Sholihah", role: "Direktur Kemahasiswaan", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&auto=format" },
];

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Tentang Lembaga"
        title="Warisan Cahaya"
        titleItalic="dan Ilmu"
        arabic="طلب العلم فريضة على كل مسلم"
        desc="Selama lebih dari tiga dasawarsa, Ma'had An-Noor telah menjadi mercusuar keilmuan Islam yang memadukan tradisi klasik dengan visi masa depan."
        img="https://images.unsplash.com/photo-1711567695332-f72b41609182?w=1600&h=900&fit=crop&auto=format"
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
            <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              Didirikan pada tahun 1989 oleh Ustadz Dr. Abdullah Al-Hakim, Ma'had An-Noor lahir dari kerinduan mendalam terhadap pendidikan Islam yang komprehensif — yang mampu menjawab tantangan zaman tanpa meninggalkan akar keilmuan klasik.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              Berawal dari sebuah surau kecil dengan dua belas santri perdana, kini Ma'had An-Noor telah berkembang menjadi institusi pendidikan Islam terkemuka dengan lebih dari 2.400 santri aktif dari seluruh penjuru nusantara.
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
            <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              <strong style={{ fontWeight: 500, color: "#1A2410" }}>Visi:</strong> Menjadi pusat pendidikan Islam terdepan yang melahirkan ulama, cendekiawan, dan pemimpin berkarakter islami untuk peradaban global.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              <strong style={{ fontWeight: 500, color: "#1A2410" }}>Misi:</strong> Menyelenggarakan pendidikan Islam holistik yang mengintegrasikan ilmu-ilmu agama dan umum, membangun karakter santri yang berilmu, berakhlak, dan berdedikasi tinggi kepada masyarakat.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(248,246,241,0.08)]">
            {values.map((v) => (
              <div key={v.id} className="p-10" style={{ background: "rgba(26,36,16,0.4)" }}>
                <div className="mb-4" style={{ fontFamily: "'Amiri', serif", fontSize: "48px", color: "#B8960C" }}>{v.ar}</div>
                <div className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#F8F6F1" }}>{v.id}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,246,241,0.6)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Tonggak Sejarah</span>
          </div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 pb-10 border-l border-[rgba(30,58,30,0.15)] pl-8 relative">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#B8960C]" />
                <div className="w-14 flex-shrink-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500, color: "#B8960C" }}>{m.year}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.8 }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pimpinan */}
      <section className="bg-[#EDE8DC] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Kepemimpinan</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(30,58,30,0.1)]">
            {pimpinan.map((p) => (
              <div key={p.name} className="bg-white p-8 text-center">
                <img src={p.img} alt={p.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-5" style={{ filter: "grayscale(20%)" }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 500, color: "#1A2410", marginBottom: "6px" }}>{p.name}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8960C" }}>{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}