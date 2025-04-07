import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // lucide-react icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/80 shadow-md px-6 py-4 w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-extrabold text-green-600 hover:text-green-700 transition duration-300"
        >
          Liv<span className="text-gray-800">Well</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          <li>
            <a href="#features" className="hover:text-green-500 transition-colors duration-300">Features</a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-500 transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-500 transition-colors duration-300">Contact</a>
          </li>
        </ul>

        {/* Desktop Login Button */}
        <Link to="/login" className="hidden md:block">
          <button className="ml-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
            Login
          </button>
        </Link>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 mt-4 shadow-lg rounded-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#features" onClick={() => setIsOpen(false)} className="block hover:text-green-500">Features</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-green-500">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-green-500">Contact</a>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-300 shadow-md">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
