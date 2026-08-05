"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link"; // Mengganti tag <a> biasa dengan Link Next.js

const steps = [
  { num: "01", title: "Siapkan Berkas", desc: "Transkrip akademik, surat rekomendasi, dan pernyataan pribadi yang menguraikan niat menuntut ilmu Islam." },
  { num: "02", title: "Ajukan Pendaftaran", desc: "Lengkapi formulir daring. Pendaftaran tahun 2026 dibuka hingga 15 Agustus 2026." },
  { num: "03", title: "Ujian Tertulis", desc: "Tes tertulis meliputi kemampuan bahasa Arab dan pengetahuan dasar keislaman." },
  { num: "04", title: "Wawancara", desc: "Wawancara bersama panitia penerimaan untuk menilai kesiapan, akhlak, dan komitmen terhadap keilmuan." },
];

export function Admissions() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="admissions" className="bg-[#EDE8DC] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>
                Penerimaan Santri
              </span>
            </div>
            <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Bergabunglah dalam<br />
              <em>Komunitas Para Ulama</em>
            </h2>
            <p className="mb-12" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              Kami menyambut santri dengan niat yang tulus dan rasa ingin tahu yang tinggi. Proses penerimaan kami dirancang untuk menjaring mereka yang akan berkembang dalam lingkungan yang ketat dan penuh keberkahan.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <button
                  key={i}
                  className="flex gap-6 text-left group"
                  onClick={() => setActiveStep(i)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  <div className="flex flex-col items-center pt-1">
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: activeStep === i ? "#1E3A1E" : "transparent",
                        border: `1px solid ${activeStep === i ? "#1E3A1E" : "rgba(30,58,30,0.25)"}`,
                      }}
                    >
                      {activeStep > i ? (
                        <Check size={12} color="#F8F6F1" />
                      ) : (
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500, color: activeStep === i ? "#F8F6F1" : "#6B7355" }}>
                          {step.num}
                        </span>
                      )}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 my-2" style={{ background: activeStep > i ? "#1E3A1E" : "rgba(30,58,30,0.15)", minHeight: "40px" }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500, color: activeStep === i ? "#1A2410" : "#6B7355", lineHeight: 1.3, transition: "color 0.3s" }}>
                      {step.title}
                    </div>
                    {activeStep === i && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.75, maxWidth: "360px" }}>
                        {step.desc}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div>
            <div className="bg-[#1E3A1E] p-10 relative overflow-hidden">
              {/* Arabic watermark */}
              <div
                className="absolute right-2 bottom-0 opacity-[0.06] select-none pointer-events-none"
                style={{ fontFamily: "'Amiri', serif", fontSize: "200px", color: "#F8F6F1", lineHeight: 1 }}
              >
                ن
              </div>

              <div className="relative z-10">
                <div className="mb-2" style={{ fontFamily: "'Amiri', serif", fontSize: "22px", color: "#B8960C", direction: "rtl", textAlign: "right" }}>
                  ادخلوها بسلام
                </div>
                <h3 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 500, color: "#F8F6F1", lineHeight: 1.25 }}>
                  Penerimaan 2026<br />Kini Dibuka
                </h3>
                <p className="mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,246,241,0.65)", lineHeight: 1.8 }}>
                  Pendaftaran terbuka bagi calon santri yang telah menyelesaikan pendidikan menengah dan memiliki kemampuan bahasa Arab atau komitmen kuat untuk mempelajarinya.
                </p>

                {/* Deadlines */}
                <div className="mb-8 flex flex-col gap-3">
                  {[
                    { label: "Pendaftaran Awal", date: "15 Juli 2026" },
                    { label: "Batas Akhir", date: "15 Agustus 2026" },
                    { label: "Pengumuman Hasil", date: "15 September 2026" },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between items-center py-3 border-b border-[rgba(248,246,241,0.1)]">
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(248,246,241,0.55)", letterSpacing: "0.04em" }}>{d.label}</span>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", fontWeight: 500, color: "#F8F6F1" }}>{d.date}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/penerimaan"
                  className="block text-center hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#1A2410",
                    background: "#B8960C",
                    padding: "16px 32px",
                    textDecoration: "none",
                  }}
                >
                  Mulai Pendaftaran
                </Link>
                <Link
                  href="#"
                  className="block text-center mt-3 hover:opacity-60 transition-opacity"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(248,246,241,0.5)",
                    textDecoration: "none",
                    padding: "12px",
                  }}
                >
                  Unduh Brosur
                </Link>
              </div>
            </div>

            {/* Contact snippet */}
            <div className="bg-white mt-px p-8 flex gap-8">
              {[
                { label: "Bagian Penerimaan", value: "+62 251 8324 100" },
                { label: "Surel", value: "penerimaan@mahadalnoor.ac.id" },
              ].map((c) => (
                <div key={c.label}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7355", marginBottom: "4px" }}>{c.label}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 400, color: "#1A2410" }}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}