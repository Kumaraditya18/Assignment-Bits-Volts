import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-20 relative z-50 bg-white shadow-sm">
      <h1 className="text-xl font-bold">Positivus</h1>

      {/* Desktop nav */}
      <ul className="hidden md:flex space-x-8 text-black font-medium">
        <li><a href="#">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Use Cases</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blog</a></li>
      </ul>

      <button className="hidden md:block border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
        Request a quote
      </button>

      {/* Hamburger icon */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="space-y-6 text-black font-medium">
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Use Cases</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <button className="mt-8 w-full border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
          Request a quote
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
