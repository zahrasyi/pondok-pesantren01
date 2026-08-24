"use client";

import Image from 'next/image';
import { BookOpen, ScrollTextIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DetailProgramPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] flex flex-col">
      <Navbar />
      
      {/* Konten Utama - Meniru tata letak dari gambar referensi */}
      <section className="flex-grow pt-32 pb-24 px-8 md:pt-40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
          
          {/* Kolom Kiri: Judul dan Teks */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            {/* Header: Ikon Lingkaran & Judul */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B8960C]/20 flex items-center justify-center text-[#B8960C]">
                {/* Ikon buku terbuka, mirip dengan gambar referensi */}
                <ScrollTextIcon size={28} strokeWidth={2} fill="currentColor" className="opacity-80" />
              </div>
              <h1 
                className="uppercase"
                style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: "clamp(24px, 4vw, 32px)", 
                  fontWeight: 700, 
                  color: "#1A2410", // Menggunakan hijau super gelap kita sebagai pengganti warna biru di gambar
                  letterSpacing: "0.02em"
                }}
              >
                Sekolah Menengah Pertama Islam
              </h1>
            </div>

            {/* Paragraf Deskripsi */}
            <div 
              className="flex flex-col gap-6"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "16px", 
                fontWeight: 400, 
                color: "#1A2410", // Teks gelap agar mudah dibaca
                lineHeight: 1.7 
              }}
            >
              <p>
                Program Sekolah Menengah Pertama Islam (SMPI) di Pondok Pesantren Daarul Huda dirancang untuk memberikan fondasi yang kuat bagi santri dalam keunggulan akademik, karakter Islami, dan pertumbuhan pribadi selama masa transisi kedewasaan mereka.
              </p>
              
              <p>
                Melalui kurikulum holistik dan seimbang yang mengintegrasikan perspektif nasional dengan nilai-nilai kepesantrenan, santri mengembangkan pengetahuan, keterampilan esensial, dan karakter yang dibutuhkan untuk kesuksesan di masa depan, terutama dalam mengabdi kepada umat.
              </p>

              <p>
                Program ini menekankan pemikiran kritis, komunikasi, kolaborasi, kepemimpinan, dan pengembangan spiritual, sekaligus membina santri untuk menjadi pembelajar yang percaya diri, bertanggung jawab, dan berakhlak mulia sepanjang hayat.
              </p>

              <p>
                Di dalam lingkungan asrama yang mendukung, santri didorong untuk mengeksplorasi potensi mereka, membangun kebiasaan positif, dan mempersiapkan diri menghadapi tantangan serta peluang di jenjang perguruan tinggi dan kehidupan bermasyarakat.
              </p>
            </div>

          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="w-full lg:w-1/2 mt-25 lg:mt-20">
            <img 
              // Ganti URL ini dengan foto asli santri MA pondokmu
              src="/program/Safaritah.png" 
              alt="Kegiatan Santri SMPI" 
              className="w-full h-auto rounded-3xl shadow-lg object-cover"
              style={{ maxHeight: "600px" }}
            />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}