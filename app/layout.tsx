import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sneha Kumari | Accounts Payable & Procure-to-Pay Professional",
  description:
    "Detail-oriented Accounts Payable professional with 2+ years of experience in P2P/PTP, vendor invoice processing, bank reconciliation, month-end closing, MIS reporting, and financial reporting.",
  keywords: [
    "Sneha Kumari",
    "Accounts Payable",
    "Procure-to-Pay",
    "P2P",
    "PTP",
    "SAP FICO",
    "Tally ERP",
    "Accounts Executive",
    "Finance Professional",
    "Kolkata",
  ],
  authors: [{ name: "Sneha Kumari" }],
  openGraph: {
    title: "Sneha Kumari | Accounts Payable & P2P Professional",
    description:
      "Portfolio of Sneha Kumari — Accounts Payable Specialist with expertise in Procure-to-Pay, SAP FICO, and financial reporting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
