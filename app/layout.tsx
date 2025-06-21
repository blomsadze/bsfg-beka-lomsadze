import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/layout/header/Header";
import Aside from "@/components/layout/aside/Aside";
import BottomTabs from "@/components/layout/bottomTabs/BottomTabs";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Footer from "@/components/layout/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Casino App",
  description: "A simple casino app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Aside />
        <Header />
        <div className="min-h-screen lg:pb-0">{children}</div>
        <Footer />
        <BottomTabs />
        <Analytics />
      </body>
    </html>
  );
}
