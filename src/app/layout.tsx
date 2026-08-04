import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andiruda.com"),
  title: "Andi Ruda | Engineering Leader & Product Builder",
  description:
    "Engineering leader and technical player-coach building business-critical SaaS, fintech, analytics, and AWS platforms. Founder of Ruda Works.",
  keywords: [
    "Andi Ruda",
    "Engineering Manager",
    "Engineering Director",
    "Platform Engineering",
    "AWS Serverless",
    "Distributed Systems",
    "Fintech",
    "SaaS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Andi Ruda | Engineering Leader & Product Builder",
    description:
      "Executive judgment, engineering depth, and product instinct for consequential platforms.",
    images: [{ url: "/andi-headshot.webp", width: 700, height: 700, alt: "Andi Ruda" }],
  },
  twitter: {
    card: "summary",
    title: "Andi Ruda | Engineering Leader & Product Builder",
    description:
      "Executive judgment, engineering depth, and product instinct for consequential platforms.",
    images: ["/andi-headshot.webp"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andi Ruda",
  url: "https://andiruda.com",
  image: "https://andiruda.com/andi-headshot.webp",
  jobTitle: "Engineering Manager",
  worksFor: { "@type": "Organization", name: "Rhythm Software" },
  founder: { "@type": "Organization", name: "Ruda Works LLC", url: "https://rudaworks.com" },
  sameAs: [
    "https://www.linkedin.com/in/andiruda/",
    "https://github.com/andiruda",
    "https://rudaworks.com",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${newsreader.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
