import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Admissions() {
  return (
    // Tambahkan pt-16 (padding atas) langsung di section, hilangkan py-16 di container dalam
    <section id="admissions" className="bg-[#1E3A1E] relative overflow-hidden border-t border-[rgba(248,246,241,0.05)] pt-16 md:pt-20">
      
      {/* Ornamen Garis Halus di Latar Belakang */}
      <div className="absolute right-0 top-0 w-2/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white" stroke="currentColor" strokeWidth="0.5" fill="none">
          <path d="M0,100 L100,0 M20,100 L100,20 M40,100 L100,40 M60,100 L100,60 M80,100 L100,80" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Ubah items-center menjadi items-end agar konten kanan (foto) menempel di dasar */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">

          {/* Area Kiri: Teks dan Tombol */}
          {/* Tambahkan pb-16 / pb-24 di sini agar teks tetap punya ruang napas di bawah */}
          <div className="w-full md:w-7/12 text-center md:text-left pb-16 md:pb-24">
            
            <div className="relative inline-block mb-4 md:mb-6 mt-8 md:mt-0">
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-[#B8960C]/60 rounded-full -z-10" />
              
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(42px, 5vw, 64px)",
                  fontWeight: 700,
                  color: "#F8F6F1",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em"
                }}
              >
                Daftar <span className="italic">Sekarang</span>
              </h2>
            </div>

            <p
              className="mb-10 max-w-lg mx-auto md:mx-0"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "rgba(248,246,241,0.85)",
                lineHeight: 1.6,
              }}
            >
              Jadilah bagian dari perpaduan unik pendidikan pesantren dan wawasan kelas dunia. Daftarkan diri Anda sekarang dan amankan kuota Anda!
            </p>

            <Link
              href="/penerimaan"
              className="inline-flex items-center gap-3 group bg-[#B8960C] hover:bg-[#F8F6F1] text-[#1A2410] transition-colors duration-300 shadow-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Mulai Pendaftaran
              <div className="bg-[#1A2410] text-[#B8960C] rounded-full p-1 group-hover:bg-[#B8960C] group-hover:text-[#1A2410] transition-colors duration-300">
                 <ArrowRight size={16} strokeWidth={3} />
              </div>
            </Link>
          </div>

          {/* Area Kanan: Gambar Santri */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <img
              // Ganti dengan URL foto kamu yang transparan
              src="/admisss.png" 
              alt="Penerimaan Santri Baru"
              // Diperbesar jadi max-w-[500px]. Tambahkan 'block' agar menempel sempurna tanpa sisa padding bawah
              className="w-full max-w-[500px] h-auto object-contain object-bottom block"
            />
          </div>

        </div>
      </div>
    </section>
  );
}