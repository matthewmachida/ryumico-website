import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ['latin'], 
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Ryumico Sticker Co.",
  description: "Homepage for Ryumico Sticker Co.!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased min-h-dvh flex flex-col`}
      >
        {/* Header navigation bar */}
        <NavBar/>
        <main className="flex-1">
          {children}
        </main>
        {/* Footer */}
        <Footer/>
      </body>
    </html>
  );
}
