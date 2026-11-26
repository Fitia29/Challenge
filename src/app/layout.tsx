import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AppQueryClientProvider from "@/providers/Providers";
import Navbar from "@/components/layout/navbar";
import TopBanner from "@/components/layout/top-banner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tikety",
  description: "Gestion de ticket",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AppQueryClientProvider>
          <TopBanner />
          <Navbar />
          {children}
        </AppQueryClientProvider>
      </body>
    </html>
  );
}
