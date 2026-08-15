"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Wajib di-import agar animasi AOS berjalan
import Lenis from "lenis";

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Menyalakan Lenis untuk Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2, // Kecepatan scroll (bisa disesuaikan)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efek rem yang mulus
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Menyalakan AOS untuk Animasi Elemen
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      once: true,    // Animasi hanya berjalan sekali saat di-scroll ke bawah
      offset: 100,   // Jarak elemen dari bawah layar sebelum animasi dimulai
    });

    // Membersihkan sistem saat pindah halaman
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}