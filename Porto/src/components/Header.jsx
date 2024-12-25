// import React, { useState } from "react";

// const Header = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark", !darkMode);
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
//       <h1 className="text-2xl font-bold">Risheek</h1>
//       <nav>
//         <ul className="flex gap-4">
//           <li>
//             <a href="#about" className="hover:underline">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="hover:underline">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="hover:underline">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:underline">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <button
//         onClick={toggleDarkMode}
//         className="ml-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
//       >
//         {darkMode ? "Light Mode" : "Dark Mode"}
//       </button>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import { motion } from "framer-motion";

// const Navbar = () => (
//   <nav className="fixed w-full z-50 px-8 py-4 flex justify-between items-center">
//     <motion.h1
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="text-2xl font-bold text-white"
//     >
//       Risheek <span className="text-red-500"></span>
//     </motion.h1>

//     <div className="flex items-center gap-8">
//       <a href="#home" className="text-white">
//         HOME
//       </a>
//       <a href="#about" className="text-white">
//         ABOUT
//       </a>

//       <a href="#portfolio" className="text-white">
//         PORTFOLIO
//       </a>
//       <a href="#contact" className="text-white">
//         CONTACT
//       </a>
//       <button className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors">
//         HIRE ME
//       </button>
//     </div>
//   </nav>
// );

// export default Navbar;

// todo new

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav className="fixed w-full z-50 px-8 py-4 flex justify-between items-center bg-neutral-900 bg-opacity-80 backdrop-blur-md">
//     <motion.h1
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="text-2xl font-bold text-white"
//     >
//       Risheek <span className="text-red-500"></span>
//     </motion.h1>

//     <div className="flex items-center gap-8">
//       <Link to="/" className="text-white">
//         HOME
//       </Link>
//       <Link to="/portfolio#about" className="text-white">
//         ABOUT
//       </Link>
//       <Link to="/portfolio" className="text-white">
//         PORTFOLIO
//       </Link>
//       <Link to="/portfolio#contact" className="text-white">
//         CONTACT
//       </Link>
//       <button className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors">
//         HIRE ME
//       </button>
//     </div>
//   </nav>
// );

// export default Navbar;

// todo responsive
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed w-full z-50 px-4 py-3 flex justify-between items-center bg-neutral-900 bg-opacity-80 backdrop-blur-md sm:px-8 sm:py-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-bold text-white sm:text-2xl"
      >
        Risheek <span className="text-red-500"></span>
      </motion.h1>

      {/* Desktop Links */}
      <div className="hidden sm:flex items-center gap-4 sm:gap-8">
        <Link
          to="/"
          className="text-white text-sm sm:text-base hover:text-red-500"
        >
          HOME
        </Link>
        <Link
          to="/portfolio#about"
          className="text-white text-sm sm:text-base hover:text-red-500"
        >
          ABOUT
        </Link>
        <Link
          to="/portfolio"
          className="text-white text-sm sm:text-base hover:text-red-500"
        >
          PORTFOLIO
        </Link>
        <Link
          to="/portfolio#contact"
          className="text-white text-sm sm:text-base hover:text-red-500"
        >
          CONTACT
        </Link>
        <button className="px-4 py-2 text-sm border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors sm:px-6 sm:py-2">
          HIRE ME
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-neutral-900 bg-opacity-90 shadow-lg flex flex-col items-center gap-4 py-4 sm:hidden z-40">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-sm hover:text-red-500"
          >
            HOME
          </Link>
          <Link
            to="/portfolio#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-sm hover:text-red-500"
          >
            ABOUT
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-sm hover:text-red-500"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/portfolio#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-sm hover:text-red-500"
          >
            CONTACT
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-2 text-sm border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
          >
            HIRE ME
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
