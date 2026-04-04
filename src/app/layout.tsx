import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Resonance",
    template: "%s | Resonance"
  },
  description: "Plataforma de text-to-speech y clonado de voz basado en IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body
          className={`${inter.variable} ${geistMono.variable} antialiased`}
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
