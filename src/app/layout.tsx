import "./globals.css";
import { ReactNode } from "react";
import { comicNeue } from "@/app/fonts";

export const metadata = {
  title: "ParentingAyah.ID | Rekomendasi Buku Edukasi Anak",
  description: "Rekomendasi Buku Edukasi Anak",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='id'>
      <body className={`${comicNeue.className} min-h-screen`}>{children}</body>
    </html>
  );
}
