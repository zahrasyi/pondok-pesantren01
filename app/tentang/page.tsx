import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { Footer } from "@/components/Footer";

const values = [
  { ar: "القرآن", id: "spiritual & Tahfidz", desc: "Menjadikan Al-Qur'an sebagai episentrum pendidikan. Menghafal Al-Qur'an bukan sekadar menjaga lisan, tetapi menata hati dan karakter untuk menjadi Hamilul Qur'an (Penjaga Al-Qur'an) yang berakhlak mulia." },
  { ar: "التفقه في الدين", id: "Tradisi Salaf & Kitab Kuning", desc: "Mempertahankan tradisi literasi Islam klasik. Melalui Madrasah Diniyah (Wustho & Ulya), santri dibekali nalar fiqih, akidah, dan kemampuan analisis hukum Islam berdasarkan literatur ulama salafus shalih." },
  { ar: "اللغة والانضباط", id: "Wawasan Global & Modernitas", desc: "Kedisiplinan waktu yang dinamis serta kewajiban berbahasa Arab dan Inggris (Sintesa Gontor). Membentuk mental pejuang dan kemampuan komunikasi internasional agar santri memiliki daya saing global." },
];

const milestones = [
  { year: "1969", event: "Pondok Pesantren Daarul Huda resmi didirikan di Gondanglegi, Malang oleh K.H. Hasan Bashori Yasin dengan keterbatasan sarana namun visi yang besar." },
  { year: "Fase Regenerasi", event: "Estafet kepemimpinan dilanjutkan oleh Hj. Lilik Chaidaroh dan K.H. Abdul Munif Ma'sum. Dimulailah integrasi sistem pendidikan modern dan formal dengan penguatan Madrasah Ibtidaiyah (MI) dan Sekolah Menengah Pertama Islam (SMPI)." },
  { year: "2016", event: "Berdirinya Madrasah Aliyah (MA) Daarul Huda, menjadi kawah candradimuka bagi santri untuk mempersiapkan diri ke perguruan tinggi dengan ijazah formal dan kompetensi hafidz." },
  { year: "Masa Kini", event: "Ekspansi masif menjadi tiga lokasi terpadu: Daarul Huda 1 (Pusat Sejarah & Salafiyah), Daarul Huda 2 (Pusat Pendidikan Menengah Modern), dan Daarul Huda 3 / Baitut Tahfidh (Pusat Unggulan Tahfidz masa depan)." },
  { year: "Masa Depan", event: "Proyeksi pembangunan Perguruan Tinggi Daarul Huda sebagai pusat keunggulan untuk melahirkan sarjana muslim yang ahli di bidang sains/sosial sekaligus memiliki sanad keilmuan klasik." },
];

const pimpinan = [
  { name: "K.H. Hasan Bashori Yasin ", role: "Pendiri (Muassis)", img: "/quote/pendiri.png" },
  { name: "Hj. Lilik Chaidaroh", role: "Pengasuh & Pakar Kurikulum Kitab Kuning (Salafiyah)", img: "/admisss.png" },
  { name: "K.H. Abdul Munif Ma'sum", role: "Pengasuh & Pimpinan Sinergi Pendidikan Modern", img: "/admisss.png" },
];

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />
      <PageBanner
        eyebrow="Tentang Lembaga"
        title="Mufaqqih Fiddin"
        titleItalic="dan Berwawasan Global"
        desc="Selama lebih dari lima dekade, Pondok Pesantren Daarul Huda Li Tahfidhil Qur'an telah menjadi saksi bisu bagaimana keikhlasan dan keteguhan hati mampu mengubah keterbatasan menjadi mercusuar pendidikan Islam yang progresif di Kabupaten Malang."
        img="/hero/wisudatahfidz.png"
      />

      {/* Sejarah & Visi */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Sejarah</span>
            </div>
            <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Perjalanan <em>Panjang</em> 
            </h2>
            <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
            Didirikan pada tahun 1969 oleh K.H. Hasan Bashori Yasin, Pondok Pesantren Daarul Huda berawal dari sebuah rintisan kecil di Gondanglegi, Malang, di tengah berbagai keterbatasan sarana dan infrastruktur. Dengan semangat pengabdian dan prinsip "modernitas tanpa meninggalkan tradisi", pesantren ini perlahan tumbuh.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
            Berkat ketulusan niat (Ikhlas) sang pendiri dan diteruskan oleh generasi penerusnya, Hj. Lilik Chaidaroh dan K.H. Abdul Munif Ma'sum, pesantren ini kini telah bertransformasi. Dari yang awalnya berfokus pada penguatan bahasa dan kedisiplinan ala Gontor, kini Daarul Huda menjadi institusi berskala besar dengan tiga lokasi pengembangan yang berdedikasi mencetak Hufadzhul Qur'an (penghafal Al-Qur'an 30 juz) yang ahli dalam kitab kuning sekaligus menguasai pendidikan formal berstandar nasional.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Visi & Misi</span>
            </div>
            <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, color: "#1A2410", lineHeight: 1.2 }}>
              Tujuan <em>Mulia</em>
            </h2>
            <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              <strong style={{ fontWeight: 500, color: "#1A2410" }}>Visi:</strong> Menjadi pusat pendidikan Islam terdepan yang melahirkan ulama, cendekiawan, dan pemimpin berkarakter islami untuk peradaban global.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.85 }}>
              <strong style={{ fontWeight: 500, color: "#1A2410" }}>Misi:</strong> Menyelenggarakan pendidikan Islam holistik yang mengintegrasikan ilmu-ilmu agama dan umum, membangun karakter santri yang berilmu, berakhlak, dan berdedikasi tinggi kepada masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Nilai-nilai */}
      <section className="bg-[#1E3A1E] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#B8960C]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Nilai Inti</span>
              <div className="w-8 h-px bg-[#B8960C]" />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, color: "#F8F6F1" }}>
              Tiga Pilar <em>Utama</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 items-center text-center md:grid-cols-3 gap-px bg-[rgba(248,246,241,0.08)]">
            {values.map((v) => (
              <div key={v.id} className="p-10" style={{ background: "rgba(26,36,16,0.4)" }}>
                <div className="mb-4" style={{ fontFamily: "'Amiri', serif", fontSize: "48px", color: "#B8960C" }}>{v.ar}</div>
                <div className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 500, color: "#F8F6F1" }}>{v.id}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,246,241,0.6)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Tonggak Sejarah</span>
          </div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 pb-10 border-l border-[rgba(30,58,30,0.15)] pl-8 relative">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#B8960C]" />
                <div className="w-14 flex-shrink-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 500, color: "#B8960C" }}>{m.year}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6B7355", lineHeight: 1.8 }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pimpinan */}
      <section className="bg-[#F8F6F1] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-[#B8960C]" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8960C" }}>Kepemimpinan</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(30,58,30,0.1)]">
            {pimpinan.map((p) => (
              <div key={p.name} className="bg-white p-8 text-center">
                <img src={p.img} alt={p.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-5" style={{ filter: "grayscale(20%)" }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 500, color: "#1A2410", marginBottom: "6px" }}>{p.name}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8960C" }}>{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}