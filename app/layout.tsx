import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DARKKICK",
  description: "Приватный мессенджер без границ и слежки.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
