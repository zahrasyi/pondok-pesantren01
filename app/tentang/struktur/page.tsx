"use client";

import Image from 'next/image';
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

export default function StrukturPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Struktur Organisasi"
        title="Sinergi dalam"
        titleItalic="Pengabdian"
        desc="Bagan kepengurusan Pondok Pesantren Daarul Huda yang bekerja secara harmonis untuk memberikan pelayanan dan pendidikan terbaik bagi para santri."
        img="/about/wisuda.png"
      />

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 items-center">
          
          <div className="text-center mb-4">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: "#1A2410", marginBottom: "16px" }}>
              Bagan <em>Kepengurusan</em>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 300, color: "#6B7355" }}>
              Pondok Pesantren Daarul Huda
            </p>
          </div>

          {/* Kontainer Gambar Struktur */}
          <div className="w-full bg-white p-4 md:p-8 rounded-3xl shadow-md border border-[rgba(30,58,30,0.06)] flex justify-center">
            <img 
              // PENTING: Ganti tulisan di bawah ini dengan nama file fotomu yang ada di folder public
              src="/about/struktur.png" 
              alt="Struktur Organisasi Pondok Pesantren Daarul Huda" 
              className="w-full max-w-5xl h-auto rounded-xl object-contain"
            />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}