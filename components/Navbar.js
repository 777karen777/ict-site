"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4">

        {/* LOGO */}
        <h1 className="font-bold text-xl">
          ICT Simple
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-4 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>

          <a href="/fvg" className="hover:underline">
            FVG
          </a>

          <a href="/order-block" className="hover:underline">
            Order Block
          </a>

          <a href="/liquidity" className="hover:underline">
            Liquidity
          </a>

          <a href="/best-brokers" className="hover:underline">
            Brokers
          </a>

          <a href="/about" className="hover:underline">
            About
          </a>

          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden border px-3 py-1 rounded"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 space-y-3 text-sm">

            <a href="/">Home</a>

            <a href="/fvg">FVG</a>

            <a href="/order-block">Order Block</a>

            <a href="/liquidity">Liquidity</a>

            <a href="/best-brokers">Brokers</a>

            <a href="/about">About</a>

            <a href="/contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}