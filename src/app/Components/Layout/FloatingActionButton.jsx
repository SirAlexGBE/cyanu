'use client';
import React from 'react';
import Link from 'next/link';

const FloatingActionButton = () => (
  <Link href="/contact" className="fixed bottom-6 sm:bottom-12 right-6 z-50 bg-[#EADD8F] text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition">
    Let's Talk
  </Link>
);

export default FloatingActionButton;
