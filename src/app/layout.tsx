import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-white antialiased">
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
