"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

const steps = [
  { num: "01", title: "Siapkan Berkas", desc: "Transkrip akademik, surat rekomendasi, dan pernyataan pribadi yang menguraikan niat menuntut ilmu Islam." },
  { num: "02", title: "Ajukan Pendaftaran", desc: "Lengkapi formulir daring. Pendaftaran tahun 2026 dibuka hingga 15 Agustus 2026." },
  { num: "03", title: "Ujian Tertulis", desc: "Tes tertulis meliputi kemampuan bahasa Arab dan pengetahuan dasar keislaman." },
  { num: "04", title: "Wawancara", desc: "Wawancara bersama panitia penerimaan untuk menilai kesiapan, akhlak, dan komitmen terhadap keilmuan." },
];

const syarat = [
  "Lulusan SMA/MA/sederajat atau sedang menempuh tahun terakhir",
  "Memiliki kemampuan membaca Al-Qur'an dengan baik",
  "Kemampuan bahasa Arab dasar (atau komitmen untuk mempelajarinya)",
  "Surat rekomendasi dari guru/ustadz/tokoh agama",
  "Surat pernyataan kesanggupan tinggal di pesantren",
  "Foto terbaru ukuran 3×4 dan 4×6 (masing-masing 2 lembar)",
];

const beasiswa = [
  { nama: "Beasiswa Penuh An-Noor", cakupan: "Biaya pendidikan, asrama, dan makan", kuota: "20 penerima/tahun" },
  { nama: "Beasiswa Tahfizh", cakupan: "Keringanan 75% biaya pendidikan", kuota: "Bagi penghafal 15 juz+" },
  { nama: "Beasiswa Prestasi", cakupan: "Keringanan 50% biaya pendidikan", kuota: "Berdasarkan nilai ujian masuk" },
];

export default function PenerimaanPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Penerimaan Santri Baru"
        title="Bergabunglah dalam"
        titleItalic="Komunitas Ulama"
        arabic="ادخلوها بسلام"
        desc="Kami membuka pintu selebar-lebarnya bagi mereka yang bersungguh-sungguh menuntut ilmu demi kebaikan umat."
        img="https://images.unsplash.com/photo-1555300873-660313ab1518?w=1600&h=900&fit=crop&auto=format"
      />

      {/* Jadwal */}
      <section className="bg-[#EDE8DC] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Jadwal Penerimaan 2026</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(30,58,30,0.1)]">
            {[
              { fase: "Gelombang I", buka: "1 Juni 2026", tutup: "15 Juli 2026", pengumuman: "1 Agustus 2026" },
              { fase: "Gelombang II", buka: "16 Juli 2026", tutup: "15 Agustus 2026", pengumuman: "15 September 2026" },
              { fase: "Daftar Ulang", buka: "16 September 2026", tutup: "30 September 2026", pengumuman: "Masuk: 5 Oktober 2026" },
            ].map((f) => (
              <div key={f.fase} className="bg-white p-8">
                <div className="mb-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>{f.fase}</div>
                <div className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500, color: "#1A2410" }}>{f.fase}</div>
                {[
                  { label: "Dibuka", val: f.buka },
                  { label: "Ditutup", val: f.tutup },
                  { label: "Pengumuman", val: f.pengumuman },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between py-3 border-b border-[rgba(30,58,30,0.08)] last:border-0">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, color: "#6B7355" }}>{r.label}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, color: "#1A2410" }}>{r.val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses & Syarat */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Proses */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Alur Pendaftaran</span>
            </div>
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <button
                  key={i}
                  className="flex gap-6 text-left"
                  onClick={() => setActiveStep(i)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ background: activeStep === i ? "#1E3A1E" : "transparent", border: `1px solid ${activeStep === i ? "#1E3A1E" : "rgba(30,58,30,0.25)"}` }}>
                      {activeStep > i
                        ? <Check size={12} color="#F8F6F1" />
                        : <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500, color: activeStep === i ? "#F8F6F1" : "#6B7355" }}>{step.num}</span>
                      }
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1 my-2" style={{ background: activeStep > i ? "#1E3A1E" : "rgba(30,58,30,0.15)", minHeight: "40px" }} />}
                  </div>
                  <div className="pb-8">
                    <div className="mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 500, color: activeStep === i ? "#1A2410" : "#6B7355", transition: "color 0.3s" }}>{step.title}</div>
                    {activeStep === i && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6B7355", lineHeight: 1.75, maxWidth: "360px" }}>{step.desc}</p>}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Syarat */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Persyaratan</span>
            </div>
            <h3 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 500, color: "#1A2410", lineHeight: 1.3 }}>
              Persyaratan <em>Pendaftaran</em>
            </h3>
            <ul className="flex flex-col gap-4">
              {syarat.map((s, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "#1E3A1E" }}>
                    <Check size={10} color="#F8F6F1" />
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.7 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Beasiswa */}
      <section className="bg-[#1E3A1E] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Program Beasiswa</span>
          </div>
          <h2 className="mb-10" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, color: "#F8F6F1" }}>
            Kami Mendukung <em>Setiap Penuntut Ilmu</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(248,246,241,0.08)]">
            {beasiswa.map((b) => (
              <div key={b.nama} className="p-8" style={{ background: "rgba(26,36,16,0.4)" }}>
                <div className="mb-4 w-10 h-10 flex items-center justify-center" style={{ background: "#B8960C" }}>
                  <span style={{ fontFamily: "'Amiri', serif", fontSize: "18px", color: "#1A2410" }}>م</span>
                </div>
                <h4 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500, color: "#F8F6F1" }}>{b.nama}</h4>
                <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,246,241,0.6)", lineHeight: 1.75 }}>{b.cakupan}</p>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8960C" }}>{b.kuota}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-3" style={{ fontFamily: "'Amiri', serif", fontSize: "22px", color: "#B8960C" }}>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</div>
          <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, color: "#1A2410" }}>Mulai Pendaftaran Online</h2>
          <p className="mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.8 }}>
            Isi formulir pendaftaran secara daring. Tim kami akan menghubungimu dalam 2 hari kerja.
          </p>
          <div className="flex flex-col gap-4 mb-6">
            <input placeholder="Nama Lengkap" className="w-full px-5 py-4 border border-[rgba(30,58,30,0.2)] bg-white outline-none" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#1A2410" }} />
            <input placeholder="Alamat Email" className="w-full px-5 py-4 border border-[rgba(30,58,30,0.2)] bg-white outline-none" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#1A2410" }} />
            <select className="w-full px-5 py-4 border border-[rgba(30,58,30,0.2)] bg-white outline-none" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355" }}>
              <option>Pilih Program</option>
              <option>Ilmu Al-Qur'an & Tafsir</option>
              <option>Fiqh & Ushul Fiqh</option>
              <option>Bahasa & Sastra Arab</option>
              <option>Pendidikan Islam</option>
            </select>
          </div>
          <button
            className="w-full hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F8F6F1", background: "#1E3A1E", padding: "18px", border: "none", cursor: "pointer" }}
          >
            Kirim Pendaftaran
          </button>
          <p className="mt-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, color: "#6B7355" }}>
            Pertanyaan? Hubungi <a href="mailto:penerimaan@mahadalnoor.ac.id" style={{ color: "#1E3A1E", textDecoration: "underline" }}>penerimaan@mahadalnoor.ac.id</a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}