"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const categories = ["Semua", "Akademik", "Penelitian", "Penerimaan", "Kampus", "Prestasi"];

export default function BeritaPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [beritaData, setBeritaData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const query = `*[_type == "berita"] | order(date desc) {
          _id,
          title,
          slug,
          category,
          date,
          excerpt,
          "imageUrl": img.asset->url
        }`;
        const data = await client.fetch(query);
        setBeritaData(data);
      } catch (error) {
        console.error("Gagal mengambil data berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  const filtered = activeCategory === "Semua"
    ? beritaData
    : beritaData.filter((b) => b.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Berita"
        title="Kabar Terkini"
        desc="Ikuti perkembangan terbaru dari Daarul Huda — kegiatan akademik, prestasi santri, dan pengumuman resmi."
        img="/news/kemahh.png"
      />

      <section className="bg-[#F8F6F1] py-24 px-8 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: activeCategory === c ? 500 : 400,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: activeCategory === c ? "#F8F6F1" : "#6B7355",
                  background: activeCategory === c ? "#1E3A1E" : "transparent",
                  border: `1px solid ${activeCategory === c ? "#1E3A1E" : "rgba(30,58,30,0.2)"}`,
                  padding: "8px 18px", cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7355" }}>
              Memuat berita...
            </div>
          ) : (
            <>
              {featured && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-[rgba(30,58,30,0.1)] mb-px">
                  
                  <Link 
                    href={`/berita/${featured.slug?.current || ''}`}
                    className="lg:col-span-3 bg-white group cursor-pointer block"
                  >
                    <div className="relative overflow-hidden" style={{ height: "320px" }}>
                      <img src={featured.imageUrl} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,36,16,0.7) 0%, transparent 60%)" }} />
                      <div className="absolute bottom-0 left-0 p-8">
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A2410", background: "#B8960C", padding: "4px 10px" }}>{featured.category}</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6B7355" }}>{featured.date}</div>
                      <h3 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#1A2410", lineHeight: 1.35 }}>{featured.title}</h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.75 }}>{featured.excerpt}</p>
                    </div>
                  </Link>

                  <div className="lg:col-span-2 flex flex-col">
                    {rest.slice(0, 3).map((item) => (
                      <Link 
                        key={item._id} 
                        href={`/berita/${item.slug?.current || ''}`}
                        className="flex-1 p-7 bg-white border-b border-[rgba(30,58,30,0.1)] last:border-0 hover:bg-[#EDE8DC] transition-colors duration-300 cursor-pointer block"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8960C" }}>{item.category}</span>
                          <span style={{ fontSize: "9px", color: "#6B7355" }}>·</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6B7355" }}>{item.date}</span>
                        </div>
                        <h4 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 500, color: "#1A2410", lineHeight: 1.4 }}>{item.title}</h4>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>{item.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {rest.length > 3 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(30,58,30,0.1)]">
                  {rest.slice(3).map((item) => (
                    <Link 
                      key={item._id} 
                      href={`/berita/${item.slug?.current || ''}`}
                      className="bg-white group cursor-pointer hover:shadow-sm transition-shadow block"
                    >
                      <div className="relative overflow-hidden" style={{ height: "180px" }}>
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8960C" }}>{item.category}</span>
                          <span style={{ fontSize: "9px", color: "#6B7355" }}>·</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6B7355" }}>{item.date}</span>
                        </div>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500, color: "#1A2410", lineHeight: 1.4 }}>{item.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}