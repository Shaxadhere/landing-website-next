import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./app.css";
import Header from "@/components/globals/layout/header";
import Footer from "@/components/globals/layout/footer";

const inter = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "fallback",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
