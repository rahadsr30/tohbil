"use client";
import React, { useState } from "react";
import Logo from "./logo";
import { Button } from "./ui";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/campaigns", label: "Campaigns", hasDropdown: true },
    { href: "/why-tohbil", label: "Why Tohbil?" },
    { href: "/academy", label: "Academy" },
    { href: "/subscription", label: "Subscription Management" },
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
            className="sm:hidden p-2 hover:bg-neutral-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  className="text-normal text-green-700 hover:text-green-600 transition-colors"
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <span className="text-green-700 text-normal">&#9662;</span>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button variant="default">Sign In</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="sm:hidden py-4 space-y-4 border-t border-neutral-200">
            {navLinks.map((link) => (
              <div key={link.href} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  className="block text-normal text-green-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <span className="text-green-700 text-normal">&#9662;</span>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-neutral-200">
              <Button variant="ghost" className="w-full">
                Login
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
