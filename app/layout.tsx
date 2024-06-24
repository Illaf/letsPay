import type { Metadata } from "next";
import { Inter,Domine } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const domine= Domine({
  subsets:['latin'],
  weight:['400','700'],
  variable:'--font-domine'
})
export const metadata: Metadata = {
  title: "letsPay",
  description: "A bank always available at your convenience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${domine.className}`}>{children}</body>
    </html>
  );
}
