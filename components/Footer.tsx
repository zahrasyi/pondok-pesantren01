"use client";

import Link from "next/link";
import { ChevronUp } from "lucide-react"; // Hanya mengambil ikon panah dari Lucide
import { FaFacebookF, FaInstagram, FaEnvelope, FaTwitter, FaYoutube } from "react-icons/fa"; // Ikon sosmed dari React Icons

export function Footer() {
  // Fungsi untuk menggulir layar kembali ke paling atas secara halus
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#EDE8DC] pt-16 pb-16 px-8 relative border-t border-[rgba(30,58,30,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Kolom Kiri: Logo & Info Kontak */}
        <div className="flex flex-col gap-6">
          
          {/* Logo Bergaya Kotak Klasik */}
          <div className="bg-[#1E3A1E] text-[#F8F6F1] px-5 py-4 inline-block w-fit">
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2px" }}>
              Pondok Pesantren
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, lineHeight: 1, letterSpacing: "0.02em" }}>
              DAARUL HUDA
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#1A2410" }}>
            Jl. Murcoyo III, RT 20 / RW 06, Krajan, Gondanglegi Wetan, Kecamatan Gondanglegi, Kabupaten Malang, Jawa Timur 65174.
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#1A2410" }}>
            Jl. Raya Gondanglegi-Dampit No. 37, Dusun Krajan, Desa Sepanjang, Kecamatan Gondanglegi, Kabupaten Malang, Jawa Timur 65174
            </p>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 400, color: "#1A2410", marginTop: "8px" }}>
              Sekretariat: + 62822-3299-4033 / WA: 0853-3173-0065
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 400, color: "#1A2410" }}>
              Email: pondokdaarulhuda@gmail.com
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Navigasi & Sosial Media */}
        <div className="flex flex-col md:items-end gap-5 w-full md:w-auto mt-4 md:mt-0">
          
          {/* Tautan Navigasi */}
          <div className="flex flex-col md:items-end gap-3">
            <div className="flex flex-wrap gap-5 justify-start md:justify-end">
              {['Sejarah', 'Artikel', 'Maklumat'].map((item) => (
                <Link key={item} href="#" className="hover:text-[#B8960C] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#1A2410" }}>
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-5 justify-start md:justify-end">
              {['Santri Putra', 'Santri Putri'].map((item) => (
                <Link key={item} href="#" className="hover:text-[#B8960C] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#1A2410" }}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Ikon Sosial Media */}
          <div className="flex gap-3 mt-4">
            {[FaFacebookF, FaInstagram, FaEnvelope, FaTwitter, FaYoutube].map((Icon, idx) => (
              <Link 
                key={idx} 
                href="#" 
                className="w-10 h-10 rounded-full border border-[rgba(26,36,16,0.3)] flex items-center justify-center text-[#1A2410] hover:border-[#B8960C] hover:text-[#B8960C] transition-all duration-300"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* Tombol Back to Top (Pojok Kanan Bawah) */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-0 right-0 w-12 h-12 bg-[#1E3A1E] text-[#F8F6F1] flex items-center justify-center hover:bg-[#B8960C] transition-colors z-50 cursor-pointer border-none"
        aria-label="Kembali ke atas"
      >
        <ChevronUp size={24} strokeWidth={2.5} />
      </button>
    </footer>
  );
}