import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ToastContext from "./context/toast-context";
import ActiveSectionContextProvider from "./context/section-context";

const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Samir Khanal",
  description: "Portfolio website for Samir Khanal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gradient scroll-smooth">
      <body
        className={`${outfit.className} min-h-screen text-white flex flex-col items-center justify-center w-full`}
      >
        <ActiveSectionContextProvider>
          <Navbar />
          <ToastContext />
          <main className="w-full max-w-[1000px] px-4 mt-40 mb-40 flex flex-col gap-32 animate-fade-in">
            {children}
          </main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
