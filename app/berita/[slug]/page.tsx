import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from 'next/image';

// Fungsi untuk mengambil data 1 berita spesifik berdasarkan slug (URL)
async function getDetailBerita(slug: string) {
  const query = `*[_type == "berita" && slug.current == $slug][0] {
    title,
    category,
    date,
    "imageUrl": img.asset->url,
    content
  }`;
  return await client.fetch(query, { slug });
}

// PERUBAHAN UTAMA: params kini di-assign sebagai Promise
export default async function DetailBerita({ params }: { params: Promise<{ slug: string }> }) {
  // Wajib melakukan await pada params sebelum mengambil nilai slug-nya
  const resolvedParams = await params;
  const berita = await getDetailBerita(resolvedParams.slug);

  // Jika URL ngawur dan berita tidak ditemukan
  if (!berita) {
    return (
      <main className="min-h-screen bg-[#F8F6F1] flex items-center justify-center">
        <h1 className="text-2xl text-[#1A2410]">Berita tidak ditemukan</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <div className="pt-32 pb-24 px-8 max-w-4xl mx-auto">
        
        {/* Tombol Kembali */}
        <Link href="/berita" className="inline-flex items-center gap-2 mb-10 text-[#6B7355] hover:text-[#B8960C] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>
          <ArrowLeft size={16} /> Kembali ke Kumpulan Berita
        </Link>
        
        {/* Meta Data (Kategori & Tanggal) */}
        <div className="mb-6 flex items-center gap-4">
          <span className="bg-[#B8960C] text-[#1A2410] px-3 py-1 text-xs font-semibold uppercase tracking-widest">{berita.category}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#6B7355" }}>{berita.date}</span>
        </div>
        
        {/* Judul Berita */}
        <h1 className="text-3xl md:text-5xl font-medium text-[#1A2410] mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          {berita.title}
        </h1>

        {/* Gambar Utama Berita */}
        {berita.imageUrl && (
          <img src={berita.imageUrl} alt={berita.title} className="w-full h-[300px] md:h-[500px] object-cover mb-12 rounded-lg shadow-sm" />
        )}

        {/* Area Narasi Berita */}
        <div className="space-y-6 text-[#1A2410] text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          {/* Mencegah error jika field konten kosong di Sanity */}
          {berita.content ? <PortableText value={berita.content} /> : <p>Isi berita sedang dipersiapkan.</p>}
        </div>

      </div>
      <Footer />
    </main>
  );
}