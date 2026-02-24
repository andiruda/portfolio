import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Andi Ruda | Senior Engineering Leader",
  description: "Engineering leader building scalable cloud platforms. AWS serverless, distributed systems, multi-tenant SaaS. Manager of Software Engineering at Rhythm Software.",
  keywords: ["Andi Ruda", "Senior Engineering Manager", "Platform Engineering", "AWS Serverless", "Distributed Systems", "Fintech"],
  openGraph: {
    title: "Andi Ruda | Senior Engineering Leader",
    description: "Engineering leader specializing in AWS serverless, distributed systems, and platform engineering at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${syne.variable} antialiased bg-white text-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  );
}
