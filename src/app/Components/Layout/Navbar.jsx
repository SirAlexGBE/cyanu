"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {Menu, X} from "lucide-react";

const navItems = [
  {name: "Home", href: "/"},
  {name: "About Us", href: "/about"},
  {name: "Quote", href: "/book"},
  {name: "Blog", href: "/blog"},
  {name: "Contact Us", href: "/contact"},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black h-[10vh] text-white  top-0 left-0 w-full z-50 sticky ">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" width={150} height={70} alt="Company Logo" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-semibold">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="italic hover:text-gray-300 transition-colors duration-200 cursor-pointer">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden shadow-lg`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 p-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              <span className="italic hover:text-gray-300 transition-colors duration-200 cursor-pointer">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && <div className="fixed inset-0  bg-opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </header>
  );
}
