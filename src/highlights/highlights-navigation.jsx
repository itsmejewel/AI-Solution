import React, { useState } from "react";
import { Link } from "react-router-dom";

function HighlightsNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Button */}
      <button className="px-6 py-16 text-regular rounded-lg transition">
        CASE STUDY / PREDICTIVE MAINTENANCE FOR A MANUFACTURING PLANT 
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-[-45px] left-0w-64 bg-white border border-gray-300 shadow-lg rounded-lg">
          <ul className="">
            <li>
              <Link
                to="/highlights"
                className="block px-6 py-3 text-space text-[#1f1f1f] hover:bg-gray-200 transition"
              >
                PREDICTIVE MAINTENANCE FOR A MANUFACTURING PLANT
              </Link>
            </li>
            <li>
              <Link
                to="/highlights"
                className="block px-6 py-3 text-space text-[#1f1f1f] hover:bg-gray-200 transition"
              >
                REAL-TIME DATA ANALYTICS FOR A SUPPLY CHAIN
              </Link>
            </li>
            <li>
              <Link
                to="/highlights"
                className="block px-6 py-3 text-space text-[#1f1f1f] hover:bg-gray-200 transition"
              >
                AUTOMATED INSPECTION USING AI
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HighlightsNavigation;