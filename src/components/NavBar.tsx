"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { Space_Grotesk } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});

const navs = [
  { name: "Home", link: "/" },
  { name: "Who We Are", link: "/who-we-are" },
  { name: "Our Services", link: "/services" },
];

const NavBar = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{ fontFamily: spaceGrotesk.style.fontFamily }}
      className="bg-white fixed w-full flex z-50 justify-between items-center px-4 md:px-5 py-2 shadow-md"
    >
      <Link href="/" className="logo">
        <Image
          alt="logo"
          src="/images/logo.png"
          width={100}
          height={100}
          className="w-24 md:w-32"
          priority={true}
        />
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <div className="other-top hidden md:flex items-center gap-5">
        <div className="navs flex gap-5">
          {navs.map((nav) => (
            <Link
              className={`nav-link ${
                pathName === nav.link ? "active" : ""
              } hover:text-primary transition duration-300`}
              href={nav.link}
              key={nav.name}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/80 transition duration-300"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            {navs.map((nav) => (
              <Link
                className={`nav-link ${
                  pathName === nav.link ? "text-primary font-bold" : ""
                } hover:text-primary transition duration-300`}
                href={nav.link}
                key={nav.name}
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/80 transition duration-300 text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
