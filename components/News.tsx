import Link from "next/link";
import { ArrowRight } from "lucide-react";

const news = [
  {
    category: "Akademik",
    date: "5 Juni 2026",
    title: "Musabaqah Hifzil Qur'an Tahunan Diikuti 400 Peserta dari Seluruh Nusantara",
    excerpt: "Kompetisi Tilawatil Qur'an Nasional 2026 yang diselenggarakan Ma'had Al-Noor menyambut santri dari 28 provinsi.",
    img: "https://images.unsplash.com/photo-1540567736792-f78f6242e4e0?w=600&h=380&fit=crop&auto=format",
    featured: true,
  },
  {
    category: "Penelitian",
    date: "28 Mei 2026",
    title: "Makalah Dosen tentang Bioetika Islam Diterbitkan di Jurnal Internasional Terkemuka",
    excerpt: "Penelitian Dr. Fatimah Zahra yang inovatif mendapat pengakuan dari Oxford Journal of Islamic Studies.",
    img: null,
  },
  {
    category: "Penerimaan",
    date: "20 Mei 2026",
    title: "Penerimaan 2026: Pendaftaran Dibuka untuk Semua Program Sarjana",
    excerpt: "Calon santri dapat mengajukan pendaftaran melalui portal daring. Batas waktu: 15 Agustus.",
    img: null,
  },
  {
    category: "Kampus",
    date: "12 Mei 2026",
    title: "Sayap Perpustakaan Baru & Pusat Sumber Digital Resmi Dibuka",
    excerpt: "Perpustakaan Digital Baitul Hikmah menyediakan akses ke lebih dari 120.000 teks Islam klasik dan kontemporer.",
    img: null,
  },
];

export function News() {
  return (
    <section id="news" className="bg-[#F8F6F1] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
                Berita Terkini
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Berita & <em>Pengumuman</em>
            </h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 group hover:opacity-60 transition-opacity"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1E3A1E", textDecoration: "none", borderBottom: "1px solid #1E3A1E", paddingBottom: "2px", whiteSpace: "nowrap" }}
          >
            Semua Berita <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-[rgba(30,58,30,0.1)]">
          {/* Featured story */}
          <div className="lg:col-span-3 relative overflow-hidden group cursor-pointer bg-white">
            <div className="relative overflow-hidden" style={{ height: "320px" }}>
              <img
                src={news[0].img!}
                alt={news[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,36,16,0.8) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 p-8">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A2410", background: "#B8960C", padding: "4px 10px" }}>
                  {news[0].category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6B7355", letterSpacing: "0.05em" }}>
                {news[0].date}
              </div>
              <h3 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#1A2410", lineHeight: 1.35 }}>
                {news[0].title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.75 }}>
                {news[0].excerpt}
              </p>
            </div>
          </div>

          {/* Side stories */}
          <div className="lg:col-span-2 flex flex-col">
            {news.slice(1).map((item, i) => (
              <div
                key={i}
                className="flex-1 p-7 bg-white cursor-pointer group border-b border-[rgba(30,58,30,0.1)] last:border-b-0 hover:bg-[#EDE8DC] transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8960C" }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: "9px", color: "#6B7355" }}>·</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6B7355" }}>{item.date}</span>
                </div>
                <h4 className="mb-2 group-hover:text-[#1E3A1E] transition-colors" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500, color: "#1A2410", lineHeight: 1.4 }}>
                  {item.title}
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}