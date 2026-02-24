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
  title: "Andi Ruda | Infrastructure Engineer",
  description: "Infrastructure as Code specialist. Terraform, AWS, Kubernetes, CI/CD. Building scalable cloud infrastructure.",
  keywords: ["Andi Ruda", "IaC", "Terraform", "AWS", "DevOps", "Infrastructure", "Cloud"],
  openGraph: {
    title: "Andi Ruda | Infrastructure Engineer",
    description: "Infrastructure as Code specialist building scalable cloud infrastructure.",
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${syne.variable} antialiased bg-[#0d1117] text-[#e6edf3]`}
      >
        {children}
      </body>
    </html>
  );
}
