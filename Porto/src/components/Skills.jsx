import React, { useState } from "react";

const SkillCloud = () => {
  const skills = [
    { name: "Node.js", category: "backend", level: 90 },
    { name: "Express", category: "backend", level: 85 },
    { name: "MySQL", category: "database", level: 80 },
    { name: "MongoDB", category: "database", level: 85 },
    { name: "JavaScript", category: "language", level: 95 },
    { name: "Python", category: "language", level: 85 },
    { name: "REST APIs", category: "backend", level: 90 },
    { name: "Git", category: "tools", level: 88 },
    { name: "Docker", category: "devops", level: 82 },
    { name: "AWS", category: "devops", level: 78 },
    { name: "Postman", category: "tools", level: 80 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    "all",
    "backend",
    "database",
    "language",
    "devops",
    "tools",
  ];

  const filteredSkills = skills.filter(
    (skill) => selectedCategory === "all" || skill.category === selectedCategory
  );

  return (
    <section className="min-h-screen bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Skills & Expertise
        </h2>

        {/* Category Filter - Scrollable on mobile */}
        <div className="overflow-x-auto -mx-4 sm:mx-0 mb-8 sm:mb-12">
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 px-4 sm:px-0 min-w-max sm:min-w-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                  ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-gray-800 rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-all duration-300 opacity-100"
            >
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {skill.name}
                </h3>
                <span className="text-blue-400 text-sm sm:text-base">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-1000 ease-out transform origin-left group-hover:scale-x-110`}
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
              <span className="absolute top-2 right-2 text-xs sm:text-sm text-gray-500 capitalize">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCloud;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faNodeJs,
//   faDatabase,
//   faCode,
//   faCloud,
//   faTools,
//   faGit,
//   faDocker,
//   faTerminal,
//   faCoffee,
//   faBox,
//   faServer,
// } from "@fortawesome/free-solid-svg-icons"; // Using solid icons

// const SkillCloud = () => {
//   const skills = [
//     { name: "Node.js", category: "backend", level: 90, icon: faNodeJs },
//     { name: "Express", category: "backend", level: 85, icon: faServer },
//     { name: "MySQL", category: "database", level: 80, icon: faDatabase },
//     { name: "MongoDB", category: "database", level: 85, icon: faDatabase },
//     { name: "JavaScript", category: "language", level: 95, icon: faCoffee },
//     { name: "Python", category: "language", level: 85, icon: faCode },
//     { name: "REST APIs", category: "backend", level: 90, icon: faTerminal },
//     { name: "Git", category: "tools", level: 88, icon: faGit },
//     { name: "Docker", category: "devops", level: 82, icon: faDocker },
//     { name: "AWS", category: "devops", level: 78, icon: faCloud },
//     { name: "Postman", category: "tools", level: 80, icon: faBox }, // This is valid from solid icons
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const categories = [
//     "all",
//     "backend",
//     "database",
//     "language",
//     "devops",
//     "tools",
//   ];

//   const filteredSkills = skills.filter(
//     (skill) => selectedCategory === "all" || skill.category === selectedCategory
//   );

//   const getCategoryIcon = (category) => {
//     switch (category) {
//       case "backend":
//         return <FontAwesomeIcon icon={faServer} size="lg" />;
//       case "database":
//         return <FontAwesomeIcon icon={faDatabase} size="lg" />;
//       case "language":
//         return <FontAwesomeIcon icon={faCode} size="lg" />;
//       case "devops":
//         return <FontAwesomeIcon icon={faCloud} size="lg" />;
//       case "tools":
//         return <FontAwesomeIcon icon={faTools} size="lg" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//           Skills & Expertise
//         </h2>

//         <div className="overflow-x-auto -mx-4 sm:mx-0 mb-8 sm:mb-12">
//           <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 px-4 sm:px-0 min-w-max sm:min-w-0">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
//                   selectedCategory === category
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//                 }`}
//               >
//                 {getCategoryIcon(category)}
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {filteredSkills.map((skill) => {
//             return (
//               <div
//                 key={skill.name}
//                 className="group relative bg-gray-800 rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-all duration-300 opacity-100"
//               >
//                 <div className="flex justify-between items-center mb-3 sm:mb-4">
//                   <div className="flex items-center gap-2">
//                     <FontAwesomeIcon
//                       icon={skill.icon}
//                       className="text-blue-400"
//                       size="lg"
//                     />
//                     <h3 className="text-lg sm:text-xl font-bold text-white">
//                       {skill.name}
//                     </h3>
//                   </div>
//                   <span className="text-blue-400 text-sm sm:text-base">
//                     {skill.level}%
//                   </span>
//                 </div>
//                 <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-1000 ease-out transform origin-left group-hover:scale-x-110"
//                     style={{
//                       width: `${skill.level}%`,
//                     }}
//                   />
//                 </div>
//                 <div className="absolute top-2 right-2 flex items-center gap-1 text-xs sm:text-sm text-gray-500 capitalize">
//                   {getCategoryIcon(skill.category)}
//                   {skill.category}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillCloud;
