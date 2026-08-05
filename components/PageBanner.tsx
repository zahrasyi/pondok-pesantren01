interface PageBannerProps {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  arabic?: string;
  desc?: string;
  img: string;
}

export function PageBanner({ eyebrow, title, titleItalic, arabic, desc, img }: PageBannerProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1A2410]" style={{ height: "420px" }}>
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,36,16,0.9) 0%, rgba(26,36,16,0.6) 60%, rgba(26,36,16,0.3) 100%)" }} />

      {/* Arabic watermark */}
      <div
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 opacity-[0.05] select-none pointer-events-none"
        style={{ fontFamily: "'Amiri', serif", fontSize: "28vw", color: "#F8F6F1", lineHeight: 1 }}
      >
        {arabic ? arabic[0] : "م"}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-[#B8960C]" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
            {eyebrow}
          </span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 62px)", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: desc ? "16px" : 0 }}>
          {title}{titleItalic && <> <em>{titleItalic}</em></>}
        </h1>
        {arabic && (
          <div className="mt-3" style={{ fontFamily: "'Amiri', serif", fontSize: "20px", color: "rgba(184,150,12,0.75)", direction: "rtl", textAlign: "left" }}>
            {arabic}
          </div>
        )}
        {desc && (
          <p className="mt-4 max-w-md" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(248,246,241,0.65)", lineHeight: 1.8 }}>
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}