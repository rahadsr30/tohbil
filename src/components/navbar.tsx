"use client";
import React, { useState } from "react";
import Logo from "./logo";
import { Button } from "./ui";
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCampaignsOpen, setIsCampaignsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/campaigns", label: "Campaigns", hasDropdown: true },
    // { href: "/why-tohbil", label: "Why Tohbil?" },
    { href: "/academy", label: "Academy" },
    { href: "/subscription", label: "Subscription Management" },
  ];

  const campaignDropdownItems = [
    { href: "/campaigns/idea", label: "Idea Campaign" },
    { href: "/campaigns/donation", label: "Donation Campaign" },
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="wrapper">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-neutral-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onMouseEnter={() => setIsCampaignsOpen(true)}
                    onMouseLeave={() => setIsCampaignsOpen(false)}
                  >
                    <span className="text-normal text-green-700 hover:text-green-600 transition-colors">
                      {link.label}
                    </span>
                    <ChevronDown className="h-4 w-4 text-green-700" />
                    {isCampaignsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-neutral-200 py-1">
                        {campaignDropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-green-700 hover:bg-neutral-50 hover:text-green-600 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-normal text-green-700 hover:text-green-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard/campaign">Login</Link>
            </Button>
            <Button variant="default">Sign In</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-neutral-200">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div className="space-y-2">
                    <div className="text-normal text-green-700 font-medium">
                      {link.label}
                    </div>
                    <div className="pl-4 space-y-2">
                      {campaignDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-normal text-green-700 hover:text-green-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-normal text-green-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-neutral-200">
              <Button variant="ghost" asChild className="w-full">
                <Link href="/dashboard/campaign">Login</Link>
              </Button>
              <Button variant="default" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
