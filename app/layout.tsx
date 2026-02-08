import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ToastContext from "./context/toast-context";
import ActiveSectionContextProvider from "./context/section-context";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
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
        className={`${jakartaSans.variable} ${sourceSerif.variable} font-display min-h-screen text-slate-100 flex flex-col items-center justify-center w-full bg-midnight-900`}
      >
        <ActiveSectionContextProvider>
          <Navbar />
          <ToastContext />
          <main className="w-full max-w-[1200px] px-4 mt-40 mb-40 flex flex-col gap-32 animate-fade-in">
            {children}
          </main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
