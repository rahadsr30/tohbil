import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fontSans = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tohbil",
  description: "Help people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.className, "antialiased")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
