"use client";

import Link from "next/link";
import { ChevronUp, Icon } from "lucide-react"; // Hanya mengambil ikon panah dari Lucide
import { FaFacebookF, FaInstagram, FaEnvelope, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa"; // Ikon sosmed dari React Icons
import { url } from "inspector";

export function Footer() {
  // Fungsi untuk menggulir layar kembali ke paling atas secara halus
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const socialLinks = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/daarulhudamalang/" }, // Ganti dengan link asli
    { Icon: FaInstagram, url: "https://www.instagram.com/pondok.daarulhuda/" },
    { Icon: FaEnvelope, url: "mailto:pondokdaarulhuda@gmail.com" },       // mailto untuk email
    { Icon: FaYoutube, url: "https://youtube.com/c/daarulhuda" },
    { Icon: FaTiktok, url:"https://www.tiktok.com/@daarulhudachannel"},
  ];

  return (
    <footer className="bg-[#EDE8DC] pt-16 pb-16 px-8 relative border-t border-[rgba(30,58,30,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Kolom Kiri: Logo & Info Kontak */}
        <div className="flex flex-col gap-6">
          
          {/* Logo Pondok & Kotak Hijau */}
          <div className="flex items-center gap-4">
            {/* Lambang / Logo Pondok */}
            <img 
              src="/logo1.png" 
              alt="Lambang Pondok Pesantren" 
              className="w-16 h-16 object-contain" 
            />

            {/* Kotak Hijau Tulisan Daarul Huda */}
            <div className=" text-[#F8F6F1] py- inline-block">
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1A2410", letterSpacing: "0.01em" }}>
                PONDOK PESANTREN DAARUL HUDA
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", fontWeight: 600, color: "#1A2410", letterSpacing: "0.01em" }}>
                LI TAHFIDZIL QUR'AN
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#1A2410" }}>
            Jl. Murcoyo III, RT 20 / RW 06, Krajan, Gondanglegi Wetan, Kecamatan Gondanglegi, Kabupaten Malang, Jawa Timur 65174. (Kampus 1)
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#1A2410" }}>
            Jl. Raya Gondanglegi-Dampit No. 37, Dusun Krajan, Desa Sepanjang, Kecamatan Gondanglegi, Kabupaten Malang, Jawa Timur 65174. (Kampus 2)
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#1A2410" }}>
            Jl. KH. Ahmad Dahlan No.20, Dusun Krajan, Putat Kidul, Kecamatan Gondanglegi, Kabupaten Malang, Jawa Timur 65174. (Kampus 3)
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
                <Link key={item} href="/tentang" className="hover:text-[#B8960C] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#1A2410" }}>
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-5 justify-start md:justify-end">
              {['Santri Putra', 'Santri Putri'].map((item) => (
                <Link key={item} href="/program" className="hover:text-[#B8960C] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#1A2410" }}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Ikon Sosial Media */}
          <div className="flex gap-3 mt-4">
            {socialLinks.map((item, idx) => {
              const Icon = item.Icon;
              return (
                <Link 
                  key={idx} 
                  href={item.url} 
                  target="_blank" // Agar membuka tab baru (opsional tapi disarankan untuk link luar)
                  rel="noopener noreferrer" // Praktik keamanan untuk target="_blank"
                  className="w-10 h-10 rounded-full border border-[rgba(26,36,16,0.3)] flex items-center justify-center text-[#1A2410] hover:border-[#B8960C] hover:text-[#B8960C] transition-all duration-300"
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* Tombol Back to Top (Pojok Kanan Bawah) */}
      <div className="w-full flex justify-center mt-7 pb-2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 flex items-center justify-center bg-[#B8960C] text-[#F8F6F1] rounded-full shadow-md hover:animate-bounce transition-all"
          aria-label="Kembali ke atas"
        >
          <ChevronUp size={24} strokeWidth={2.5} />
        </button>
      </div>
    </footer>
  );
}