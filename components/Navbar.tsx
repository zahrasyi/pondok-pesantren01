"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Tentang", href: "/tentang" },
  { label: "Program", href: "/program" },
  { label: "Penerimaan", href: "/penerimaan" },
  { label: "Kegiatan", href: "/kehidupan-kampus" },
  { label: "Berita", href: "/berita" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F1] border-b border-[rgba(30,58,30,0.12)] shadow-sm">
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Pastikan nama file logonya sesuai dengan yang ada di folder public */}
          <img 
            src="/logo1.png" 
            alt="Logo Daarul Huda" 
            className="w-16 h-16 md:w-16 md:h-16 object-contain" 
          />
          <div className="leading-tight">
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "10px", fontWeight: 600, color: "#1A2410", letterSpacing: "0.01em" }}>
              PONDOK PESANTREN 
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1A2410", letterSpacing: "0.01em" }}>
              DAARUL HUDA
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: active ? 500 : 400,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#1A2410", // Warna teks selalu gelap
                    textDecoration: "none",
                    borderBottom: active ? `1px solid #1A2410` : "none",
                    paddingBottom: "2px",
                  }}
                  className="hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/penerimaan"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F8F6F1",
              background: "#1E3A1E", // Background tombol selalu hijau gelap
              padding: "10px 24px",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            className="hover:opacity-80"
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#1A2410]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#F8F6F1] border-t border-[rgba(30,58,30,0.12)] px-8 py-6 flex flex-col gap-5 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1A2410",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/penerimaan"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F8F6F1",
              background: "#1E3A1E",
              padding: "12px 24px",
              textDecoration: "none",
              display: "inline-block",
              width: "fit-content",
            }}
          >
            Daftar Sekarang
          </Link>
        </div>
      )}
    </header>
  );
}