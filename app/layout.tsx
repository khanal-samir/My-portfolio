import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ToastContext from "./context/toast-context";
import ActiveSectionContextProvider from "./context/section-context";
import ScrollProgress from "./components/ui/scroll-progress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samir Khanal | Software Developer",
  description:
    "Full-stack developer specializing in modern web technologies. Building scalable applications with React, TypeScript, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body min-h-screen text-zinc-50 flex flex-col items-center justify-center w-full bg-zinc-950`}
      >
        <ScrollProgress />
        <ActiveSectionContextProvider>
          <Navbar />
          <ToastContext />
          <main className="w-full max-w-[1200px] px-4 mt-28 md:mt-40 mb-40 flex flex-col gap-32">
            {children}
          </main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
