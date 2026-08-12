const stats = [
  { num: "2,400", label: "Santri Aktif" },
  { num: "180+", label: "Tenaga Pengajar" },
  { num: "1,000", label: "Alumni Tersebar" },
  { num: "800+", label: "Prestasi Diraih" },
];

export function StatsBar() {
  return (
    <section className="bg-[#F8F6F1] relative z-20 mb-8 py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, color: "#1A2410" }}>
              Membangun <em>Generasi</em>, Menebar Manfaat
            </h2>
            <p className="mt-5 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", fontWeight: 300, color: "#6B7355", lineHeight: 1.8 }}>
              Kisah mereka yang telah membawa nilai-nilai luhur pesantren ke seluruh penjuru dunia. Angka ini bukan sekadar statistik, melainkan bukti nyata dedikasi kami.
            </p>
        </div>
        {/* Layout Grid berbentuk Kartu (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-10 flex flex-col items-center text-center shadow-sm border border-[rgba(30,58,30,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group cursor-default"
            >
              {/* Angka Statistik Utama */}
              <h3
                className="mb-4 transition-colors duration-500 group-hover:text-[#B8960C]"
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: "clamp(42px, 4vw, 56px)", // Ukuran angka dibuat lebih besar sesuai referensi
                  fontWeight: 400, 
                  color: "#1A2410", 
                  lineHeight: 1 
                }}
              >
                {stat.num}
              </h3>
              
              {/* Garis Aksen Emas (Akan memanjang saat di-hover) */}
              <div className="w-8 h-[2px] bg-[#B8960C] opacity-40 mb-5 group-hover:w-16 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Label Teks */}
              <span 
                style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: "18px", 
                  fontWeight: 400, 
                  color: "#6B7355" 
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}