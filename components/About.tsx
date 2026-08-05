export function About() {
  return (
    <section id="tentang" className="bg-[#1E3A1E] py-32 px-8 overflow-hidden relative">
      {/* Arabic watermark */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.05] select-none pointer-events-none"
        style={{ fontFamily: "'Amiri', serif", fontSize: "40vw", color: "#F8F6F1", lineHeight: 1 }}
      >
        ع
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image stack */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1711567695332-f72b41609182?w=700&h=500&fit=crop&auto=format"
                alt="Kubah kampus Ma'had Al-Noor"
                className="w-full object-cover"
                style={{ height: "420px" }}
              />
              <div className="absolute inset-0" style={{ background: "rgba(30,58,30,0.15)" }} />
            </div>
            {/* Floating card */}
            <div
              className="absolute -bottom-8 -right-4 md:right-[-40px] p-6 w-56"
              style={{ background: "#B8960C" }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 500, color: "#1A2410", lineHeight: 1 }}>
                35+
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A2410", marginTop: "8px", opacity: 0.75 }}>
                Tahun Mencetak Ulama
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
                Tentang Lembaga
              </span>
            </div>

            <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.2 }}>
              Warisan Cahaya<br />
              <em>dan Ilmu Pengetahuan</em>
            </h2>

            <div className="mb-6" style={{ fontFamily: "'Amiri', serif", fontSize: "20px", color: "rgba(184,150,12,0.8)", letterSpacing: "0.06em", direction: "rtl", textAlign: "right" }}>
              طلب العلم فريضة على كل مسلم
            </div>

            <p className="mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(248,246,241,0.75)", lineHeight: 1.85 }}>
              Didirikan pada tahun 1989 oleh Ustadz Dr. Abdullah Al-Hakim, Ma'had Al-Noor hadir dengan satu visi: melahirkan lulusan yang kokoh dalam keilmuan Islam klasik sekaligus siap memimpin di era modern.
            </p>
            <p className="mb-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(248,246,241,0.6)", lineHeight: 1.85 }}>
              Kurikulum terpadu kami berpijak pada tradisi madrasah yang agung sambil terlibat kritis dengan pengetahuan kontemporer, memastikan para santri siap mengabdi kepada umat dengan hikmah dan relevansi.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-3 gap-px bg-[rgba(248,246,241,0.08)]">
              {[
                { ar: "عِلْم", en: "Ilmu" },
                { ar: "أَدَب", en: "Akhlak" },
                { ar: "خِدْمَة", en: "Pengabdian" },
              ].map((v) => (
                <div key={v.en} className="py-5 px-4 text-center" style={{ background: "rgba(26,36,16,0.3)" }}>
                  <div style={{ fontFamily: "'Amiri', serif", fontSize: "24px", color: "#B8960C", marginBottom: "6px" }}>{v.ar}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,241,0.5)" }}>{v.en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}