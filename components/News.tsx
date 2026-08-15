import Link from "next/link";
import { ArrowRight } from "lucide-react";

const news = [
  { category: "Akademik", date: "5 Juni 2026", title: "Musabaqah Hifzil Qur'an Tahunan Diikuti 400 Peserta dari Seluruh Nusantara", excerpt: "Kompetisi Tilawatil Qur'an Nasional 2026 yang diselenggarakan Ma'had Daarul Huda menyambut santri dari 28 provinsi.", img: "/news/kemah.png" },
  { category: "Penelitian", date: "28 Mei 2026", title: "Makalah Dosen tentang Bioetika Islam Diterbitkan di Jurnal Internasional", excerpt: "Penelitian Dr. Fatimah Zahra yang inovatif mendapat pengakuan dari Oxford Journal of Islamic Studies.", img: "/news/kemahh.png" },
  { category: "Penerimaan", date: "20 Mei 2026", title: "Penerimaan 2026: Pendaftaran Dibuka untuk Semua Program Sarjana", excerpt: "Calon santri dapat mengajukan pendaftaran melalui portal daring. Batas waktu: 15 Agustus.", img: "/news/rihlah.png" },
  { category: "Kampus", date: "12 Mei 2026", title: "Sayap Perpustakaan Baru & Pusat Sumber Digital Resmi Dibuka", excerpt: "Perpustakaan Digital Baitul Hikmah menyediakan akses ke lebih dari 120.000 teks Islam klasik dan kontemporer.", img: "/news/ujian lisan.png" },
  { category: "Kampus", date: "12 Mei 2026", title: "Sayap Perpustakaan Baru & Pusat Sumber Digital Resmi Dibuka", excerpt: "Perpustakaan Digital Baitul Hikmah menyediakan akses ke lebih dari 120.000 teks Islam klasik dan kontemporer.", img: "/news/upacara.png" },
  { category: "Kampus", date: "12 Mei 2026", title: "Sayap Perpustakaan Baru & Pusat Sumber Digital Resmi Dibuka", excerpt: "Perpustakaan Digital Baitul Hikmah menyediakan akses ke lebih dari 120.000 teks Islam klasik dan kontemporer.", img: "/news/wisudatah.png" },
];

export function News() {
  return (
    <section id="news" className="bg-[#F8F6F1] py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div data-aos="fade-right" className="mb-14">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
            Berita & <em>Pengumuman</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item, i) => (
            <Link key={i} href="#" data-aos="fade-up" data-aos-delay={i * 100} className="relative block h-[380px] overflow-hidden group bg-[#1A2410]">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2410] via-[#1A2410]/50 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A2410", background: "#B8960C", padding: "4px 10px", width: "fit-content", marginBottom: "12px" }}>
                  {item.category}
                </span>
                <div className="mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(248,246,241,0.7)", letterSpacing: "0.05em" }}>
                  {item.date}
                </div>
                <h3 className="mb-3 transition-colors duration-300 group-hover:text-[#B8960C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[100px] group-hover:opacity-100 mt-2">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,246,241,0.8)", lineHeight: 1.6 }}>
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center mt-14">
          <Link
            href="/berita"
            className="flex items-center gap-2 group hover:opacity-70 transition-opacity"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1E3A1E", textDecoration: "none", borderBottom: "1px solid #1E3A1E", paddingBottom: "4px" }}
          >
            Semua Berita <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}