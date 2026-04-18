import React from "react";
import {FaHome} from "react-icons/fa"

const Header: React.FC = () => {
  return (
    <>
      <header className="flex mx-auto max-w-7xl items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center gap-1 font-bold"><FaHome /> Logo</div>
        <div className="flex space-x-4 hover:cursor-pointer">
            <span className="hover:text-orange-500 hover:underline">Home</span>
            <span className="hover:text-orange-500 hover:underline">Services</span>
            <span className="hover:text-orange-500 hover:underline">Projects</span>
            <span className="hover:text-orange-500 hover:underline">About</span>
            <span className="hover:text-orange-500 hover:underline">Contact</span>
        </div>
      </header>
    </>
  );
};

export default Header;