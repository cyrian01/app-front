import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex mx-auto max-w-7xl items-center justify-between p-4 bg-gray-800 text-white">
        <Link to="/" className="flex items-center gap-1 font-bold hover:text-orange-500 transition-colors">
          <FaHome /> Logo
        </Link>
        <nav className="flex space-x-4 hover:cursor-pointer">
          <Link
            to="/"
            className="hover:text-orange-500 hover:underline transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-orange-500 hover:underline transition-colors"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="hover:text-orange-500 hover:underline transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:text-orange-500 hover:underline transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-500 hover:underline transition-colors"
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;