"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-white border-b border-neutral-200">
        <div className="wrapper">
          <div className="flex items-center gap-4 py-4">
            <Link
              href="/campaigns/idea"
              className={`text-normal ${
                pathname === "/campaigns/idea"
                  ? "text-green-700 font-medium"
                  : "text-[#434347] hover:text-green-600"
              } transition-colors`}
            >
              Idea Campaigns
            </Link>
            <Link
              href="/campaigns/donation"
              className={`text-normal ${
                pathname === "/campaigns/donation"
                  ? "text-green-700 font-medium"
                  : "text-[#434347] hover:text-green-600"
              } transition-colors`}
            >
              Donation Campaigns
            </Link>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
