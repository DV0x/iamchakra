import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Chakradhar Dhulipalla — AI Product Manager & Builder",
    template: `%s | ${DATA.name}`,
  },
  description:
    "Product manager with 8+ years shipping 0→1 products. Shipped 8+ AI products — autonomous agents, RAG pipelines, and agentic workflows. Open to remote product roles.",
  keywords: [
    "product manager",
    "AI builder",
    "Claude Code",
    "Claude Agent SDK",
    "RAG pipelines",
    "autonomous agents",
    "agentic workflows",
    "0 to 1 products",
  ],
  authors: [{ name: "Chakradhar Dhulipalla", url: DATA.url }],
  creator: "Chakradhar Dhulipalla",
  openGraph: {
    title: "Chakradhar Dhulipalla — AI Product Manager & Builder",
    description:
      "PM who builds. 8+ years shipping 0→1 products, 8+ AI products live in production — autonomous agents, RAG pipelines, agentic workflows. Open to remote product roles.",
    url: DATA.url,
    siteName: "Chakradhar Dhulipalla",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chakradhar Dhulipalla — AI Product Manager & Builder",
    description:
      "PM who builds. 8+ years shipping 0→1 products, 8+ AI products live in production. Open to remote product roles.",
    card: "summary_large_image",
    creator: "@chakaborty",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geist.variable,
          geistMono.variable,
          fraunces.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="relative z-10 max-w-5xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
