import type { Metadata } from "next";
import "./globals.css";
import ScrollProvider from "@/components/ScrollProvider"; // Memanggil provider animasi kita

export const metadata: Metadata = {
  title: "Ma'had Al-Noor", // Judul bawaanmu
  description: "Company Profile", // Deskripsi bawaanmu
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {/* Menyuntikkan AOS dan Lenis ke seluruh halaman */}
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}