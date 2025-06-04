import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      <body className={cn(fontSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
