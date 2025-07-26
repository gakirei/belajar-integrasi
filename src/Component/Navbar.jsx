import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between bg-gray-400 p-6">
      <div className="navbar-brand">
        <a href="/">MyApp/Logo</a>
      </div>
      <ul className="flex flex-row space-x-8">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;