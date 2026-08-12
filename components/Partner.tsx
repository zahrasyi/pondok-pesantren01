"use client";

import LogoLoop from "./LogoLoop";

// Kamu bisa menggunakan Teks (node) atau Gambar (src) untuk logo mitranya.
// Di bawah ini adalah contoh kombinasi agar kamu mudah menggantinya nanti.
const mitraList = [
  { 
    node: <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 600, color: "#1A2410", whiteSpace: "nowrap" }}>Kemenag RI</div>, 
    href: "https://kemenag.go.id" 
  },
  { 
    node: <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 600, color: "#1A2410", whiteSpace: "nowrap" }}>Universitas Al-Azhar</div>, 
    href: "#" 
  },
  { 
    node: <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 600, color: "#1A2410", whiteSpace: "nowrap" }}>Bank Syariah Indonesia</div>, 
    href: "#" 
  },
  { 
    node: <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 600, color: "#1A2410", whiteSpace: "nowrap" }}>Badan Amil Zakat Nasional</div>, 
    href: "#" 
  },
  { 
    node: <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 600, color: "#1A2410", whiteSpace: "nowrap" }}>Pondok Modern Gontor</div>, 
    href: "#" 
  },
  // Contoh jika kamu sudah punya file gambar logonya:
  // { src: "/logos/logo-mitra-1.png", alt: "Mitra 1", href: "https://mitra1.com" },
];

export function Partners() {
  return (
    <section className="bg-[#f1eee9] py-16 overflow-hidden border-t border-[rgba(30,58,30,0.05)]">
      <div className="max-w-7xl mx-auto px-8 mb-10 text-center">
        <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
          Menjalin Ukhuwah & Sinergi Bersama
        </h3>
      </div>
      
      {/* 
        Perhatikan: fadeOutColor disamakan dengan warna background section (#EDE8DC) 
        agar gradasi menghilangnya menyatu sempurna dengan layar.
      */}
      <LogoLoop
        logos={mitraList}
        speed={100}
        direction="left"
        logoHeight={40}
        gap={80}
        hoverSpeed={20} // Akan melambat saat di-hover
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#EDE8DC" 
        ariaLabel="Mitra dan Partner"
      />
    </section>
  );
}