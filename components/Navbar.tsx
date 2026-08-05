"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Pengganti useLocation dari react-router
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Tentang", href: "/tentang" },
  { label: "Program", href: "/program" },
  { label: "Penerimaan", href: "/penerimaan" },
  { label: "Kehidupan Kampus", href: "/kehidupan-kampus" },
  { label: "Berita", href: "/berita" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On inner pages, always show solid navbar
  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[rgba(30,58,30,0.12)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1E3A1E] flex items-center justify-center flex-shrink-0">
            <span style={{ fontFamily: "'Amiri', serif", fontSize: "14px", color: "#F8F6F1", lineHeight: 1 }}>م</span>
          </div>
          <div className="leading-tight">
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: solid ? "#1A2410" : "#F8F6F1", letterSpacing: "0.01em" }}>
              Ma'had An-Noor
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
                    color: solid ? "#1A2410" : "rgba(248,246,241,0.85)",
                    textDecoration: "none",
                    borderBottom: active ? `1px solid ${solid ? "#1A2410" : "#F8F6F1"}` : "none",
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

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/penerimaan"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: solid ? "#F8F6F1" : "#1A2410",
              background: solid ? "#1E3A1E" : "#F8F6F1",
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
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: solid ? "#1A2410" : "#F8F6F1" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#F8F6F1] border-t border-[rgba(30,58,30,0.12)] px-8 py-6 flex flex-col gap-5">
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