// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuItems = [
//     { name: "HOME", link: "/" },
//     { name: "SOLUTIONS", link: "/solutions" },
//     { name: "HIGHLIGHTS", link: "/highlights" },
//     { name: "ADA", link: "/ada" },
//     { name: "GALLERY", link: "/gallery" },
//     { name: "ARCHIVE", link: "/blog" },
//     { name: "CONTACT", link: "/contact" },
//   ];

//   const handleContactClick = (event) => {
//     event.preventDefault();
//     if (location.pathname === "/") {
//       scrollToContact();
//     } else {
//       navigate("/");
//       setTimeout(scrollToContact, 500);
//     }
//     setIsOpen(false);
//   };

//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact-inquiry");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     if (location.pathname === "/contact") {
//       setTimeout(scrollToContact, 500);
//     }
//   }, [location]);

//   return (
//     <nav className="top-0 left-0 w-full bg-[#F6F7F9] z-50 border fixed top-0">
//       <div className="container mx-auto px-6 py-2 flex justify-between items-center">
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-[#1F1F1F] focus:outline-none"
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>

//         <ul className="hidden md:flex md:space-x-40 md:items-center">
//           {menuItems.map((item) => (
//             <li key={item.name} className="text-md font-semibold cursor-pointer">
//               {item.name === "CONTACT" ? (
//                 <a href="/contact" onClick={handleContactClick} className="text-[#1F1F1F]">
//                   {item.name}
//                 </a>
//               ) : (
//                 <Link
//                   to={item.link}
//                   className={item.name === "ADA" ? "text-[#0A00C8]" : "text-[#1F1F1F]"}
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {isOpen && (
//         <ul className="fixed inset-0 bg-[#F6F7F9] flex flex-col items-center justify-center space-y-6 md:hidden">
//           {menuItems.map((item) => (
//             <li key={item.name} className="text-md font-semibold cursor-pointer">
//               {item.name === "CONTACT" ? (
//                 <a href="/contact" onClick={handleContactClick} className="text-[#1F1F1F]">
//                   {item.name}
//                 </a>
//               ) : (
//                 <Link
//                   to={item.link}
//                   onClick={() => setIsOpen(false)}
//                   className={item.name === "ADA" ? "text-[#0A00C8]" : "text-[#1F1F1F]"}
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "SOLUTIONS", link: "/solutions" },
    { name: "HIGHLIGHTS", link: "/highlights" },
    { name: "ADA", link: "/ada" },
    { name: "GALLERY", link: "/gallery" },
    { name: "ARCHIVE", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
  ];

  const handleContactClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      scrollToContact();
    } else {
      navigate("/");
      setTimeout(scrollToContact, 500);
    }
    setIsOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-inquiry");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/contact") {
      setTimeout(scrollToContact, 500);
    }
  }, [location]);

  // Closes menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest("#mobile-menu") && !event.target.closest("#menu-button")) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <nav className="top-0 left-0 w-full bg-[#F6F7F9] z-50 border fixed top-0">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            id="menu-button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1F1F1F] focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-40 md:items-center">
          {menuItems.map((item) => (
            <li key={item.name} className="text-md font-semibold cursor-pointer">
              {item.name === "CONTACT" ? (
                <a href="/contact" onClick={handleContactClick} className="text-[#1F1F1F]">
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.link}
                  className={item.name === "ADA" ? "text-[#0A00C8]" : "text-[#1F1F1F]"}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-20 backdrop-blur-md flex items-center justify-center md:hidden">
          <ul id="mobile-menu" className=" w-3/4 p-6  flex flex-col items-center space-y-6">
            {menuItems.map((item) => (
              <li key={item.name} className="text-lg font-semibold cursor-pointer">
                {item.name === "CONTACT" ? (
                  <a href="/contact" onClick={handleContactClick} className="text-[#1F1F1F]">
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className={item.name === "ADA" ? "text-[#0A00C8]" : "text-[#1F1F1F]"}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
