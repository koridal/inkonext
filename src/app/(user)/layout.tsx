import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "../components/Navbar";
import Social from "../components/Social";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inko Jaya Konstruksi",
  description: "Inko Jaya Konstruksi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Social />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
