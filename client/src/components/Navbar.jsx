import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md px-10 mx-auto">
      <h1 className="text-xl font-bold cursor-pointer">
        <a href="#">LivWell</a>
      </h1>
      <ul className="flex space-x-6 gap-10">
        <li className="cursor-pointer hover:text-green-500">
          <a href="#features">Features</a>
        </li>
        <li className="cursor-pointer hover:text-green-500">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer hover:text-green-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">Register</button>
    </nav>
  );
};

export default Navbar;
