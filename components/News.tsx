"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export const News = () => {
  const [beritaData, setBeritaData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const query = `*[_type == "berita"] | order(date desc)[0...3] {
          _id,
          title,
          slug,
          category,
          date,
          "imageUrl": img.asset->url
        }`;
        const data = await client.fetch(query);
        setBeritaData(data);
      } catch (error) {
        console.error("Gagal mengambil data berita beranda:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  return (
    <section className="bg-[#F8F6F1] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Bagian & Tombol (Sesuai Style Navbar) */}
        <div className="flex justify-between items-end mb-14">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", color: "#1A2410" }}>
            Berita & Pengumuman
          </h2>
          <Link 
            href="/berita" 
            className="hidden md:block pb-1 hover:opacity-70 transition-opacity" 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "13px", 
              fontWeight: 500,
              letterSpacing: "0.1em", // Menyamakan jarak huruf dengan navbar
              textTransform: "uppercase", // Huruf kapital seperti navbar
              color: "#1A2410", 
              textDecoration: "underline", 
              textUnderlineOffset: "6px" 
            }}
          >
            Lihat Semua Berita &rarr;
          </Link>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7355" }}>
            Memuat berita...
          </div>
        ) : (
          /* Grid 3 Kolom untuk Berita (Model Tumpuk/Overlay) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beritaData.map((item) => (
              <Link 
                key={item._id} 
                href={`/berita/${item.slug?.current || ''}`}
                className="group cursor-pointer block relative overflow-hidden h-[400px]"
              >
                {/* Gambar Background */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                />
                
                {/* Gradien Gelap Penutup Gambar agar teks putih terbaca */}
                <div 
                  className="absolute inset-0" 
                  style={{ background: "linear-gradient(to top, rgba(26,36,16,0.9) 0%, rgba(26,36,16,0.3) 50%, transparent 80%)" }} 
                />
                
                {/* Konten Teks di Atas Gambar */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span 
                    className="inline-block mb-4"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A2410", background: "#B8960C", padding: "4px 12px" }}
                  >
                    {item.category}
                  </span>
                  <div className="mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#E5E7EB" }}>
                    {item.date}
                  </div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.4 }}>
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Tombol Lihat Semua (Untuk versi Mobile) */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/berita" 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "13px", 
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1A2410", 
              textDecoration: "underline", 
              textUnderlineOffset: "6px" 
            }}
          >
            Lihat Semua Berita &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};