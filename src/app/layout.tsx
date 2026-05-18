import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | VentureRank OS",
    default: "VentureRank OS",
  },
  description: "Rank startup opportunities and spawn the best ones first.",
  metadataBase: new URL("https://venturerank.com"),
  openGraph: {
    title: "VentureRank OS",
    description: "Rank startup opportunities and spawn the best ones first.",
    url: "https://venturerank.com",
    siteName: "VentureRank OS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VentureRank OS",
    description: "Rank startup opportunities and spawn the best ones first.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} text-white antialiased`}>
        <Navbar />
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
