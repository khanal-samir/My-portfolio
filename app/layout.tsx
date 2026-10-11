import type { Metadata } from "next";
import { Caveat, Great_Vibes, Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import FloatingThemeToggle from "@/app/components/floating-theme-toggle";
import ThemeProvider from "@/app/providers";
import Intro from "@/app/components/intro";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samir Khanal",
  description:
    "Full-stack developer specializing in modern web technologies. Building scalable applications with React, TypeScript, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} ${greatVibes.variable} font-body relative min-h-screen overflow-x-hidden antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <noscript>
            <style>{"#intro{display:none}"}</style>
          </noscript>
          <Intro />
          <Navbar />
          <main className="mx-auto max-w-3xl border-x border-solid border-[hsl(var(--border))] px-4">
            {children}
          </main>
          <Footer />
          <FloatingThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
