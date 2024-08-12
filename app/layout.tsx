import type { Metadata } from "next";

import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/fonts/ModernDOS8x16.woff2' })


export const metadata: Metadata = {
  title: "QREAM - DOS Task",
  description: "QREAM - DOS Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
