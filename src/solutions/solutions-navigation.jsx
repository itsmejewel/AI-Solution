import React, { useState } from "react";
import { Link } from "react-router-dom";

function SolutionsNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Button */}
      <button className="px-6 py-16 text-regular rounded-lg transition">
        SOLUTIONS / ENGINEERING & MANUFACTURING 
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-[-45px] left-0w-64 bg-white border border-gray-300 shadow-lg rounded-lg">
          <ul className="">
            <li>
              <Link
                to="/solutions"
                className="block px-6 py-3 text-[#1f1f1f] hover:bg-gray-200 transition text-space uppercase"
              >
                Engineering & Manufacturing
              </Link>
            </li>
            <li>
              <Link
                to="/solutions"
                className="block px-6 py-3 text-[#1f1f1f] hover:bg-gray-200 transition text-space uppercase"
              >
                Healthcare & Biotech
              </Link>
            </li>
            <li>
              <Link
                to="/solutions"
                className="block px-6 py-3 text-[#1f1f1f] hover:bg-gray-200 transition text-space uppercase"
              >
                Finance & Security
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SolutionsNavigation;
