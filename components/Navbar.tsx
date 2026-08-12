"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ChevronDown, ArrowRight, 
  BookOpen, Users, Building2, ScrollText, BriefcaseBusiness, Target 
} from "lucide-react";

// Data untuk Dropdown "Tentang"
const tentangMenu = [
  { title: "Sejarah & Visi", desc: "Perjalanan dan cita-cita luhur pesantren", icon: Target, href: "/tentang#sejarah" },
  { title: "Kepemimpinan", desc: "Mengenal para pengasuh dan asatidz", icon: Users, href: "/tentang#kepemimpinan" },
  { title: "Struktur Organisasi", desc: "Struktur kepengurusan pondok", icon: Building2, href: "/tentang#fasilitas" }
];

// Data untuk Dropdown "Program"
const programMenu = [
  { title: "MI", desc: "Madrasah Ibtidaiyah", icon: BookOpen, badge: "Unggulan", href: "/program#tahfidz" },
  { title: "SMPI", desc: "Sekolah Menengah Pertama Islam", icon: ScrollText, href: "/program#kitab" },
  { title: "MA", desc: "Madrasah Aliyah", icon: BriefcaseBusiness, href: "/program#bahasa" }
];

// Navigasi standar untuk Mobile (dan menu tanpa dropdown)
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

  // Fungsi helper untuk mengecek menu aktif
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F1] border-b border-[rgba(30,58,30,0.12)] shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/logo1.png" 
            alt="Logo Daarul Huda" 
            className="w-16 h-16 md:w-16 md:h-16 object-contain" 
          />
          <div className="leading-tight">
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1A2410", letterSpacing: "0.01em" }}>
                PONDOK PESANTREN DAARUL HUDA
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", fontWeight: 600, color: "#1A2410", letterSpacing: "0.01em" }}>
                LI TAHFIDZIL QUR'AN
              </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 h-full">
          
          {/* Menu Dropdown: Tentang */}
          <li className="relative group h-full flex items-center">
            <Link 
              href="/tentang"
              className="flex items-center gap-1 hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: isActive("/tentang") ? 500 : 400,
                letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A2410", textDecoration: "none",
                borderBottom: isActive("/tentang") ? `1px solid #1A2410` : "none", paddingBottom: "2px",
              }}
            >
              Tentang <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            
            {/* Area Dropdown Tentang */}
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[340px] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
              <div className="bg-white rounded-xl shadow-xl border border-[rgba(30,58,30,0.06)] overflow-hidden flex flex-col mt-2">
                <div className="p-2">
                  {tentangMenu.map((item, i) => (
                    <Link key={i} href={item.href} className="flex gap-4 p-4 rounded-lg hover:bg-[#F8F6F1] transition-colors group/item" style={{ textDecoration: 'none' }}>
                      <div className="mt-0.5 text-[#6B7355] group-hover/item:text-[#B8960C] transition-colors">
                        <item.icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span style={{ fontFamily: "'Inter', 'playfair-display'", fontSize: "14px", fontWeight: 600, color: "#1A2410" }}>{item.title}</span>
                        </div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#6B7355", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* <Link href="/tentang" className="bg-[#EDE8DC] p-4 text-center flex items-center justify-center gap-2 text-[#1A2410] hover:text-[#B8960C] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, textDecoration: 'none' }}>
                  Kenali Kami Lebih Dekat <ArrowRight size={14} />
                </Link> */}
              </div>
            </div>
          </li>

          {/* Menu Dropdown: Program */}
          <li className="relative group h-full flex items-center">
            <Link 
              href="/program"
              className="flex items-center gap-1 hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: isActive("/program") ? 500 : 400,
                letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A2410", textDecoration: "none",
                borderBottom: isActive("/program") ? `1px solid #1A2410` : "none", paddingBottom: "2px",
              }}
            >
              Program <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            
            {/* Area Dropdown Program */}
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[340px] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
              <div className="bg-white rounded-xl shadow-xl border border-[rgba(30,58,30,0.06)] overflow-hidden flex flex-col mt-2">
                <div className="p-2">
                  {programMenu.map((item, i) => (
                    <Link key={i} href={item.href} className="flex gap-4 p-4 rounded-lg hover:bg-[#F8F6F1] transition-colors group/item" style={{ textDecoration: 'none' }}>
                      <div className="mt-0.5 text-[#6B7355] group-hover/item:text-[#B8960C] transition-colors">
                        <item.icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span style={{ fontFamily: "'Inter', 'playfair-display'", fontSize: "14px", fontWeight: 600, color: "#1A2410" }}>{item.title}</span>
                          {item.badge && (
                            <span className="bg-[#B8960C] text-white px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#6B7355", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* <Link href="/program" className="bg-[#EDE8DC] p-4 text-center flex items-center justify-center gap-2 text-[#1A2410] hover:text-[#B8960C] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, textDecoration: 'none' }}>
                  Lihat Semua Program <ArrowRight size={14} />
                </Link> */}
              </div>
            </div>
          </li>

          {/* Menu Standar Lainnya (Tanpa Dropdown) */}
          {navItems.slice(2).map((item) => (
            <li key={item.label} className="h-full flex items-center">
              <Link
                href={item.href}
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: isActive(item.href) ? 500 : 400,
                  letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A2410", textDecoration: "none",
                  borderBottom: isActive(item.href) ? `1px solid #1A2410` : "none", paddingBottom: "2px",
                }}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/penerimaan"
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#F8F6F1", background: "#1E3A1E", padding: "10px 24px",
              textDecoration: "none", transition: "all 0.25s", borderRadius: "6px"
            }}
            className="hover:bg-[#B8960C] hover:text-[#1A2410]"
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
                fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: isActive(item.href) ? 600 : 400,
                letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A2410", textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/penerimaan"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#F8F6F1", background: "#1E3A1E", padding: "12px 24px",
              textDecoration: "none", display: "inline-block", width: "fit-content", borderRadius: "6px"
            }}
          >
            Daftar Sekarang
          </Link>
        </div>
      )}
    </header>
  );
}