// import React, { useState, useEffect } from "react";

// const EnhancedHero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 10,
//         y: (e.clientY / window.innerHeight) * 10,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const roles = ["Backend Developer", "Problem Solver", "Tech Enthusiast"];
//   const [currentRole, setCurrentRole] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden bg-white">
//       {/* Subtle gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />

//       {/* Animated lines */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"
//             style={{
//               top: `${30 + i * 30}%`,
//               transform: `translateX(${
//                 mousePosition.x * (i + 1)
//               }px) translateY(${mousePosition.y * (i + 1)}px)`,
//               transition: "transform 0.5s ease-out",
//               opacity: 0.3,
//             }}
//           />
//         ))}
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-200 to-transparent"
//             style={{
//               left: `${30 + i * 30}%`,
//               transform: `translateX(${
//                 mousePosition.x * (i + 1)
//               }px) translateY(${mousePosition.y * (i + 1)}px)`,
//               transition: "transform 0.5s ease-out",
//               opacity: 0.3,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative flex flex-col items-center justify-center h-full z-10">
//         <div
//           className={`transform transition-all duration-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//             Hi, I'm Risheek
//           </h1>

//           <div className="h-12 mb-8">
//             <p className="text-2xl text-gray-600 transition-all duration-500">
//               I'm a {roles[currentRole]}
//             </p>
//           </div>

//           <div className="flex gap-6">
//             <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-200">
//               View My Work
//             </button>
//             <button className="px-8 py-3 border-2 border-blue-400 text-blue-600 rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
//               Contact Me
//             </button>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 animate-bounce">
//           <div className="w-8 h-12 border-2 border-blue-200 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-blue-300 rounded-full mt-2" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EnhancedHero;

// *????????!!!!!!!!!!!!!!!!!!!!!
// import React, { useState, useEffect } from "react";
// import { ChevronDown, ExternalLink, Mail } from "lucide-react";

// const EnhancedHero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 10,
//         y: (e.clientY / window.innerHeight) * 10,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const roles = ["Backend Developer", "Problem Solver", "Tech Enthusiast"];
//   const [currentRole, setCurrentRole] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
//       {/* Animated background */}
//       <div
//         className="absolute inset-0 opacity-20 transition-transform duration-300"
//         style={{
//           transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
//         }}
//       >
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={`h-${i}`}
//             className="absolute h-px bg-blue-400"
//             style={{
//               width: "100%",
//               top: `${(i + 1) * 25}%`,
//               animation: "pulse 2s infinite",
//               animationDelay: `${i * 0.2}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
//         <div
//           className={`transform transition-all duration-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Hi, I'm Risheek
//           </h1>

//           <div className="h-20">
//             <p className="text-2xl md:text-3xl text-blue-400 font-semibold transition-all duration-500">
//               I'm a {roles[currentRole]}
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
//             <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
//               <ExternalLink className="w-5 h-5" />
//               View My Work
//             </button>
//             {/* <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
//               <Mail className="w-5 h-5" />
//               Contact Me
//             </button> */}
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-8 h-8 text-white opacity-50" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnhancedHero;

// todo
// import React, { useState, useEffect } from "react";

// const EnhancedHero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 10,
//         y: (e.clientY / window.innerHeight) * 10,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const roles = ["Backend Developer", "Problem Solver", "Tech Enthusiast"];
//   const [currentRole, setCurrentRole] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden bg-gray-900">
//       {/* Gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900" />

//       {/* Animated grid lines */}
//       <div className="absolute inset-0 overflow-hidden opacity-20">
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={`h-${i}`}
//             className="absolute w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
//             style={{
//               top: `${20 + i * 20}%`,
//               transform: `translateX(${
//                 mousePosition.x * (i + 1)
//               }px) translateY(${mousePosition.y * (i + 1)}px)`,
//               transition: "transform 0.5s ease-out",
//             }}
//           />
//         ))}
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={`v-${i}`}
//             className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
//             style={{
//               left: `${20 + i * 20}%`,
//               transform: `translateX(${
//                 mousePosition.x * (i + 1)
//               }px) translateY(${mousePosition.y * (i + 1)}px)`,
//               transition: "transform 0.5s ease-out",
//             }}
//           />
//         ))}
//       </div>

//       {/* Animated background shapes */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
//         <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
//         <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
//       </div>

//       {/* Content */}
//       <div className="relative flex flex-col items-center justify-center h-full z-10 px-4">
//         <div
//           className={`transform transition-all duration-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-center">
//             Hi, I'm Risheek
//           </h1>

//           <div className="h-12 mb-8">
//             <p className="text-2xl text-gray-300 transition-all duration-500 text-center">
//               I'm a{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
//                 {roles[currentRole]}
//               </span>
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-6 justify-center">
//             <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
//               View My Work
//             </button>
//             <button className="px-8 py-3 border-2 border-indigo-400 text-indigo-400 rounded-full hover:bg-indigo-950 transform hover:scale-105 transition-all duration-300">
//               Contact Me
//             </button>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 animate-bounce">
//           <div className="w-8 h-12 border-2 border-indigo-400 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EnhancedHero;

// todo claude ai
// import React from "react";
// import { motion } from "framer-motion";

// const Navbar = () => (
//   <nav className="fixed w-full z-50 px-8 py-4 flex justify-between items-center">
//     <motion.h1
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="text-2xl font-bold"
//     >
//       Risheek <span className="text-red-500">Kumar</span>
//     </motion.h1>

//     <div className="flex items-center gap-8">
//       <a href="#home" className="text-white">
//         HOME
//       </a>
//       <a href="#about" className="text-white">
//         ABOUT
//       </a>
//       <a href="#service" className="text-white">
//         SERVICE
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

// const Hero = () => (
//   <div className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-blue-950 to-blue-900 overflow-hidden">
//     {/* <Navbar /> */}

//     <div className="container mx-auto px-8 h-screen flex items-center justify-between">
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-2xl"
//       >
//         <h2 className="text-white-200 text-xl mb-4">
//           {/* HELLO THERE, WELCOME TO MY SITE */}
//         </h2>
//         <h1 className="text-6xl font-bold mb-4 text-white">I'm Risheek </h1>
//         <h2 className="text-5xl font-bold mb-8">
//           <span className="text-red-500">A Backend Developer</span>
//           <br />
//         </h2>

//         <div className="flex gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="px-8 py-3 bg-red-500 rounded-full text-white flex items-center gap-2"
//           >
//             SEE PORTFOLIO
//             <span className="text-xl">→</span>
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="px-8 py-3 border-2 border-red-500 rounded-full text-white flex items-center gap-2"
//           >
//             CONTACT ME
//             <span className="text-xl">→</span>
//           </motion.button>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative"
//       >
//         <div className="w-[450px] h-[450px] rounded-3xl overflow-hidden border-8 border-red-500/20 bg-gradient-to-br from-red-500/20 to-blue-500/20">
//           <img
//             src="/api/placeholder/450/450"
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </motion.div>
//     </div>
//   </div>
// );

// export default Hero;

//todo
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-blue-950 to-blue-900 overflow-hidden">
//       <div className="container mx-auto px-8 h-screen flex items-center justify-between">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-2xl"
//         >
//           <h2 className="text-white-200 text-xl mb-4">
//             {/* HELLO THERE, WELCOME TO MY SITE */}
//           </h2>
//           <h1 className="text-6xl font-bold mb-4 text-white">I'm Risheek</h1>
//           <h2 className="text-5xl font-bold mb-8">
//             <span className="text-red-500">A Backend Developer</span>
//             <br />
//           </h2>

//           <div className="flex gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               onClick={() => navigate("/portfolio")}
//               className="px-8 py-3 bg-red-500 rounded-full text-white flex items-center gap-2"
//             >
//               SEE PORTFOLIO
//               <span className="text-xl">→</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="px-8 py-3 border-2 border-red-500 rounded-full text-white flex items-center gap-2"
//             >
//               CONTACT ME
//               <span className="text-xl">→</span>
//             </motion.button>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative"
//         >
//           <div className="w-[450px] h-[450px] rounded-3xl overflow-hidden border-8 border-red-500/20 bg-gradient-to-br from-red-500/20 to-blue-500/20">
//             <img
//               src="/api/placeholder/450/450"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// todo responsive
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-blue-950 to-blue-900 overflow-hidden">
      <div className="container mx-auto px-4 h-screen flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left max-w-xl"
        >
          <h2 className="text-xl text-white-200 mb-4 hidden sm:block">
            {/* HELLO THERE, WELCOME TO MY SITE */}
          </h2>
          <h1 className="text-4xl font-bold mb-4 text-white sm:text-6xl">
            I'm Risheek
          </h1>
          <h2 className="text-2xl font-bold mb-8 sm:text-5xl">
            <span className="text-red-500">A Backend Developer</span>
            <br />
          </h2>

          <div className="flex justify-center sm:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/portfolio")}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-red-500 rounded-full text-white flex items-center gap-2 text-sm sm:text-base"
            >
              SEE PORTFOLIO
              <span className="text-xl">→</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-red-500 rounded-full text-white flex items-center gap-2 text-sm sm:text-base"
            >
              CONTACT ME
              <span className="text-xl">→</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8 sm:mb-0"
        >
          <div className="w-64 h-64 sm:w-[450px] sm:h-[450px] rounded-3xl overflow-hidden border-8 border-red-500/20 bg-gradient-to-br from-red-500/20 to-blue-500/20">
            <img
              src="/api/placeholder/450/450"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
