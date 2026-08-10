export function FounderQuote() {
    return (
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* Area Foto (Kiri) */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          {/* Efek lengkungan dihapus, diganti dengan shadow tipis agar foto lebih hidup */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden shadow-md">
                <img
                src="/pendiri.png"
                alt="pendiri"
                className="w-full h-full object-cover"
                />
            </div>
          </div>
  
          {/* Area Kutipan (Kanan) */}
          <div className="w-full md:w-7/12 relative">
            {/* Tanda kutip besar transparan di latar belakang */}
            <div
              className="absolute -top-12 -left-6 md:-left-10 text-[140px] text-[#B8960C] opacity-10 select-none pointer-events-none"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 0.8 }}
            >
              "
            </div>
            
            <h2
              className="mb-8 relative z-10"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 400, fontStyle: "italic", color: "#1A2410", lineHeight: 1.5 }}
            >
              Cita-cita membangun perguruan tinggi adalah janji kami kepada umat: bahwa dari desa kecil, akan lahir cendekiawan penjaga wahyu yang mampu mengubah dunia dengan ilmu dan akhlakul karimah.
            </h2>
            
            <div className="flex items-center gap-5">
              <div className="w-12 h-px bg-[#B8960C]" />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#1A2410" }}>
                 K.H. Hasan bashori Yasin
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7355", marginTop: "4px" }}>
                  Pendiri Pondok Pesantren Daarul Huda
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }