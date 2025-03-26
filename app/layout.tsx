import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Personal portfolio showcasing projects and thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}