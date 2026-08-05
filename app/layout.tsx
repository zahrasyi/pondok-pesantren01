import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ma'had Al-Noor",
  description: "Company Profile Pondok Pesantren",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}