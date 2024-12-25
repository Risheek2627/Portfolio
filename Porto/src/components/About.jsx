// import React from "react";
// import rishiImage from "../components/rishi.jpg";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image Section with Animation */}
//           <div className="lg:w-1/3 relative group">
//             <div className="relative">
//               <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300"></div>
//               <img
//                 src={rishiImage}
//                 alt="Risheek"
//                 className="relative w-64 h-64 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-700 transform transition duration-500 hover:scale-105"
//               />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="lg:w-2/3">
//             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
//               {/* Header */}
//               <div className="space-y-2 mb-8">
//                 <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   About Me
//                 </h2>
//                 <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
//               </div>

//               {/* Main Content */}
//               <div className="space-y-6">
//                 <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                   Hello! I'm{" "}
//                   <span className="font-semibold text-blue-600 dark:text-blue-400">
//                     Risheek
//                   </span>
//                   , a passionate backend developer from Bangalore. I specialize
//                   in building scalable web applications using technologies like
//                   JavaScript, Node.js, Express, and MySQL. My goal is to solve
//                   complex problems and create seamless digital experiences. I'm
//                   always eager to learn and improve!
//                 </p>

//                 {/* Info Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-3">
//                       <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
//                         <svg
//                           className="w-5 h-5 text-blue-600 dark:text-blue-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                           />
//                         </svg>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           Location
//                         </p>
//                         <p className="font-medium text-gray-900 dark:text-gray-100">
//                           Bangalore, India
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-3">
//                       <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
//                         <svg
//                           className="w-5 h-5 text-blue-600 dark:text-blue-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 14l9-5-9-5-9 5 9 5z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 14l9-5-9-5-9 5 9 5z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 14l9-5-9-5-9 5 9 5z"
//                           />
//                         </svg>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           Education
//                         </p>
//                         <p className="font-medium text-gray-900 dark:text-gray-100">
//                           Diploma in Computer Science (2024)
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
//                       Interests
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                       {[
//                         "Backend Development",
//                         "Algorithms",
//                         "Open-Source Projects",
//                       ].map((interest) => (
//                         <span
//                           key={interest}
//                           className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
//                         >
//                           {interest}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// todo
// import React from "react";
// import rishi from "../components/rishi.jpg";
// import { GitBranch, Mail, MapPin, Briefcase, Star } from "lucide-react";

// const About = () => {
//   const skills = [
//     { name: "JavaScript", level: 90 },
//     { name: "Node.js", level: 85 },
//     { name: "Express", level: 80 },
//     { name: "MySQL", level: 75 },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative min-h-screen">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Glowing orbs */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

//         {/* Gradient mesh */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(17,24,39,0.4))]"></div>

//         {/* Floating particles */}
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${i * 2}s`,
//               animationDuration: `${10 + i * 2}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="max-w-6xl mx-auto px-4 relative">
//         <div className="flex flex-col lg:flex-row items-start gap-16">
//           {/* Left Column - Profile */}
//           <div className="lg:w-1/3 space-y-8">
//             {/* Profile Image */}
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500"></div>
//               <div className="relative bg-gray-800/80 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-gray-700/50">
//                 <img
//                   src={rishi}
//                   alt="Risheek"
//                   className="w-full aspect-square rounded-xl object-cover transform transition duration-500 group-hover:scale-[1.02]"
//                 />
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700/50 p-6 space-y-4 hover:bg-gray-800/60 transition-colors duration-300">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-blue-500/10 rounded-lg">
//                   <MapPin className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <span className="text-gray-300">Bangalore, India</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-purple-500/10 rounded-lg">
//                   <Mail className="w-5 h-5 text-purple-400" />
//                 </div>
//                 <span className="text-gray-300">contact@risheek.dev</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-pink-500/10 rounded-lg">
//                   <Briefcase className="w-5 h-5 text-pink-400" />
//                 </div>
//                 <span className="text-gray-300">Backend Developer</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-blue-500/10 rounded-lg">
//                   <GitBranch className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <span className="text-gray-300">Open Source Contributor</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Content */}
//           <div className="lg:w-2/3 space-y-8">
//             {/* Header */}
//             <div>
//               <h1 className="text-5xl font-bold mb-4">
//                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   About Me
//                 </span>
//               </h1>
//               <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
//             </div>

//             {/* Main Content */}
//             <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700/50 p-8 space-y-8 hover:bg-gray-800/60 transition-colors duration-300">
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 Hello! I'm{" "}
//                 <span className="font-semibold text-blue-400">Risheek</span>, a
//                 passionate backend developer from Bangalore. I specialize in
//                 building scalable web applications using technologies like
//                 JavaScript, Node.js, Express, and MySQL. My goal is to solve
//                 complex problems and create seamless digital experiences.
//               </p>

//               {/* Skills Section */}
//               <div className="space-y-6">
//                 <h3 className="text-xl font-semibold text-gray-100 flex items-center gap-2">
//                   <Star className="w-5 h-5 text-blue-400" />
//                   Skills
//                 </h3>
//                 <div className="space-y-4">
//                   {skills.map((skill) => (
//                     <div key={skill.name} className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-300">{skill.name}</span>
//                         <span className="text-gray-400">{skill.level}%</span>
//                       </div>
//                       <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
//                         <div
//                           className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform origin-left transition-transform duration-1000 animate-pulse"
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Interests */}
//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-gray-100">
//                   Interests
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Backend Development",
//                     "Algorithms",
//                     "Open-Source Projects",
//                     "System Design",
//                     "Cloud Computing",
//                   ].map((interest) => (
//                     <span
//                       key={interest}
//                       className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700 text-gray-300 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-gray-700/50 hover:border-gray-600 cursor-default"
//                     >
//                       {interest}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// todo
// import React from "react";
// import rishiImage from "../components/rishi.jpg";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image Section with Animation */}
//           <div className="lg:w-1/3 relative group">
//             <div className="relative">
//               <div className="absolute inset-0 bg-purple-600 rounded-full opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-300"></div>
//               <img
//                 src={rishiImage}
//                 alt="Risheek"
//                 className="relative w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-gray-800 transform transition duration-500 hover:scale-110"
//               />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="lg:w-2/3">
//             <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 transition duration-500 hover:shadow-xl">
//               {/* Header */}
//               <div className="space-y-2 mb-8">
//                 <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
//                   About Me
//                 </h2>
//                 <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"></div>
//               </div>

//               {/* Main Content */}
//               <div className="space-y-6">
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                   Hello! I'm{" "}
//                   <span className="font-semibold text-purple-400">Risheek</span>
//                   , a passionate backend developer from Bangalore. I specialize
//                   in building scalable web applications using technologies like
//                   JavaScript, Node.js, Express, and MySQL. My goal is to solve
//                   complex problems and create seamless digital experiences. I'm
//                   always eager to learn and improve!
//                 </p>

//                 {/* Info Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-3">
//                       <div className="p-3 bg-purple-700 rounded-lg shadow-lg">
//                         <svg
//                           className="w-5 h-5 text-purple-300"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                           />
//                         </svg>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-400">Location</p>
//                         <p className="font-medium text-gray-200">
//                           Bangalore, India
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-3">
//                       <div className="p-3 bg-purple-700 rounded-lg shadow-lg">
//                         <svg
//                           className="w-5 h-5 text-purple-300"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 14l9-5-9-5-9 5 9 5z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 14l9-5-9-5-9 5 9 5z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 14l9-5-9-5-9 5 9 5z"
//                           />
//                         </svg>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-400">Education</p>
//                         <p className="font-medium text-gray-200">
//                           Diploma in Computer Science (2024)
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-gray-200 mb-2">
//                       Interests
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                       {[
//                         "Backend Development",
//                         "Algorithms",
//                         "Open-Source Projects",
//                       ].map((interest) => (
//                         <span
//                           key={interest}
//                           className="px-3 py-1 bg-purple-700 text-purple-300 rounded-full text-sm font-medium shadow-md"
//                         >
//                           {interest}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// todo  ,,,,   you can use upwards code also

import React from "react";
import { motion } from "framer-motion";
import rishiImage from "../components/rishi.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Image Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="lg:w-1/3 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-50 blur-xl transition-all duration-300 group-hover:opacity-75" />
              <div className="relative ring-4 ring-purple-500/30 rounded-full p-2">
                <img
                  src={rishiImage}
                  alt="Risheek"
                  className="w-72 h-72 rounded-full object-cover shadow-2xl transform transition hover:rotate-6"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700/50">
              {/* Header */}
              <div className="space-y-3 mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent"
                >
                  About Me
                </motion.h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full" />
              </div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  Hello! I'm{" "}
                  <span className="font-semibold text-purple-400">Risheek</span>
                  , a passionate backend developer from Bangalore. I specialize
                  in building scalable web applications using technologies like
                  JavaScript, Node.js, Express, and MySQL. My goal is to solve
                  complex problems and create seamless digital experiences. I'm
                  always eager to learn and improve!
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-4 group">
                      <div className="p-3 bg-purple-700/50 rounded-xl shadow-lg group-hover:bg-purple-600/50 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-purple-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400">Location</p>
                        <p className="font-medium text-lg text-gray-200">
                          Bangalore, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="p-3 bg-purple-700/50 rounded-xl shadow-lg group-hover:bg-purple-600/50 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-purple-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400">Education</p>
                        <p className="font-medium text-lg text-gray-200">
                          Diploma in Computer Science (2024)
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-200 mb-4">
                      Interests
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Backend Development",
                        "Algorithms",
                        "Open-Source Projects",
                      ].map((interest) => (
                        <motion.span
                          key={interest}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-purple-700/40 text-purple-200 rounded-xl text-sm font-medium shadow-lg hover:bg-purple-600/40 transition-colors duration-300"
                        >
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
