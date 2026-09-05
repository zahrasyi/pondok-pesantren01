import type { Metadata } from "next";
import "./globals.css";
import ScrollProvider from "@/components/ScrollProvider"; // Memanggil provider animasi kita

export const metadata: Metadata = {
  title: "Pondok Pesantren Daarul Huda",
  description: "Mencetak generasi Qur'ani yang berakhlak mulia, mandiri, dan berwawasan global. Pendaftaran santri baru telah dibuka.",
  verification: {
    google: '60muhjdxWKMlyEPxGwRjC2ByMKBKvgk1kpWeJDpneW',
  },
  openGraph: {
    title: "Pondok Pesantren Daarul Huda",
    description: "Mencetak generasi Qur'ani yang berakhlak mulia, mandiri, dan berwawasan global.",
    url: "https://ponpesdaarulhuda.vercel.app",
    siteName: "Ponpes Daarul Huda",
    locale: "id_ID",
    type: "website",
  },
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