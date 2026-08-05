import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1A2410] pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[rgba(248,246,241,0.08)]">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full border border-[rgba(184,150,12,0.5)] flex items-center justify-center">
                <span style={{ fontFamily: "'Amiri', serif", fontSize: "14px", color: "#B8960C" }}>م</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", fontWeight: 600, color: "#F8F6F1" }}>Ma'had Al-Noor</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,241,0.4)" }}>Pesantren Islam</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(248,246,241,0.45)", lineHeight: 1.85, maxWidth: "200px" }}>
              Mencetak ulama dan pemimpin sejak 1989. Bogor, Jawa Barat, Indonesia.
            </p>
            <div className="mt-6" style={{ fontFamily: "'Amiri', serif", fontSize: "17px", color: "rgba(184,150,12,0.6)", direction: "rtl", textAlign: "right" }}>
              نور على نور
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Lembaga",
              links: ["Tentang Ma'had", "Sejarah & Visi", "Kepemimpinan", "Akreditasi", "Laporan Tahunan"],
            },
            {
              title: "Akademik",
              links: ["Semua Program", "Ilmu Al-Qur'an", "Fiqh Islam", "Studi Bahasa Arab", "Penelitian"],
            },
            {
              title: "Kontak",
              links: [
                "Jl. Raya Dramaga No. 12",
                "Bogor 16680, Jawa Barat",
                "+62 251 8324 100",
                "info@mahadalnoor.ac.id",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,241,0.35)" }}>
                {col.title}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,246,241,0.6)", textDecoration: "none" }}
                      className="hover:opacity-50 transition-opacity"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(248,246,241,0.3)" }}>
            © 2026 Ma'had Al-Noor Pesantren Islam. Hak cipta dilindungi.
          </div>
          <div className="flex gap-6">
            {["Kebijakan Privasi", "Syarat Penggunaan", "Aksesibilitas"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(248,246,241,0.3)", textDecoration: "none" }}
                className="hover:opacity-60 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}