// NavBar.tsx

import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-trasparent py-2 px-4 text-white">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Your Logo</div>
        <div className="flex space-x-4">
          <a href="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</a>
          <a href="/about" className="hover:bg-blue-700 px-3 py-2 rounded">About</a>
          <a href="/services" className="hover:bg-blue-700 px-3 py-2 rounded">Services</a>
          <a href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
