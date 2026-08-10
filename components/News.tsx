import Link from "next/link";
import { ArrowRight } from "lucide-react";

const news = [
  {
    category: "Akademik",
    date: "5 Juni 2026",
    title: "Musabaqah Hifzil Qur'an Tahunan Diikuti 400 Peserta dari Seluruh Nusantara",
    excerpt: "Kompetisi Tilawatil Qur'an Nasional 2026 yang diselenggarakan Ma'had Daarul Huda menyambut santri dari 28 provinsi.",
    img: "https://images.unsplash.com/photo-1540567736792-f78f6242e4e0?w=800&h=600&fit=crop&auto=format",
  },
  {
    category: "Penelitian",
    date: "28 Mei 2026",
    title: "Makalah Dosen tentang Bioetika Islam Diterbitkan di Jurnal Internasional",
    excerpt: "Penelitian Dr. Fatimah Zahra yang inovatif mendapat pengakuan dari Oxford Journal of Islamic Studies.",
    img: "https://images.unsplash.com/photo-1571193161738-deaba9b6cc26?w=800&h=600&fit=crop&auto=format",
  },
  {
    category: "Penerimaan",
    date: "20 Mei 2026",
    title: "Penerimaan 2026: Pendaftaran Dibuka untuk Semua Program Sarjana",
    excerpt: "Calon santri dapat mengajukan pendaftaran melalui portal daring. Batas waktu: 15 Agustus.",
    img: "https://images.unsplash.com/photo-1514369118554-e20d93546b30?w=800&h=600&fit=crop&auto=format",
  },
  {
    category: "Kampus",
    date: "12 Mei 2026",
    title: "Sayap Perpustakaan Baru & Pusat Sumber Digital Resmi Dibuka",
    excerpt: "Perpustakaan Digital Baitul Hikmah menyediakan akses ke lebih dari 120.000 teks Islam klasik dan kontemporer.",
    img: "https://images.unsplash.com/photo-1741699428220-65f37f3fbbcb?w=800&h=600&fit=crop&auto=format",
  },
];

export function News() {
  return (
    <section id="news" className="bg-[#F8F6F1] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
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

        {/* Grid Kartu Interaktif (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {news.map((item, i) => (
            <Link key={i} href="#" className="relative block h-[380px] overflow-hidden group bg-[#1A2410]">
              {/* Gambar Background dengan efek Scale saat Hover */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Gradient Gelap dari Bawah agar teks selalu terbaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2410] via-[#1A2410]/50 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
              
              {/* Kontainer Teks */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Badge Kategori */}
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A2410", background: "#B8960C", padding: "4px 10px", width: "fit-content", marginBottom: "12px" }}>
                  {item.category}
                </span>
                
                <div className="mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(248,246,241,0.7)", letterSpacing: "0.05em" }}>
                  {item.date}
                </div>
                
                {/* Judul Berita */}
                <h3 className="mb-3 transition-colors duration-300 group-hover:text-[#B8960C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                
                {/* Deskripsi Singkat (Awalnya tersembunyi, muncul perlahan saat di-hover) */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[100px] group-hover:opacity-100 mt-2">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,246,241,0.8)", lineHeight: 1.6 }}>
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}