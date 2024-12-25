// import React from "react";

// const projects = [
//   {
//     title: "Indoor Navigation System",
//     description:
//       "An application to navigate indoors using advanced algorithms.",
//     link: "#",
//   },
//   {
//     title: "Blogging Platform",
//     description: "A platform for creating and sharing blogs.",
//     link: "#",
//   },
//   {
//     title: "API Suite",
//     description: "APIs for languages, currency, and time zones.",
//     link: "#",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="p-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900"
//     >
//       <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-200">
//         My Projects
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 transform hover:scale-105 transition duration-300"
//           >
//             <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//             <p className="mb-4 text-gray-700 dark:text-gray-300">
//               {project.description}
//             </p>
//             <a
//               href={project.link}
//               className="text-primary underline hover:text-secondary"
//             >
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - card.left) / card.width;
    const y = (e.clientY - card.top) / card.height;
    setTilt({
      x: (y - 0.5) * 20,
      y: (x - 0.5) * -20,
    });
  };

  return (
    <div
      className="relative h-96 rounded-xl transition-all duration-300 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${
          tilt.y
        }deg) scale(${isHovered ? 1.05 : 1})`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl transform -translate-y-2 translate-x-2 -z-10" />
      <div className="h-full p-6 bg-gray-900 rounded-xl shadow-xl">
        <div className="flex flex-col h-full text-white">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
          <div className="space-y-4">
            <div className="flex gap-2">
              {project.tech?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-500/20 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-block px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Indoor Navigation System",
      description:
        "An innovative application leveraging advanced algorithms for precise indoor positioning and navigation. Features real-time updates and interactive mapping.",
      tech: ["Node.js", "MongoDB", "WebGL"],
      link: "#",
    },
    {
      title: "Blogging Platform",
      description:
        "A modern blogging platform with real-time collaboration, rich text editing, and automated SEO optimization features.",
      tech: ["React", "Express", "MySQL"],
      link: "#",
    },
    {
      title: "API Suite",
      description:
        "A comprehensive API suite providing seamless integration for language translation, currency conversion, and timezone management.",
      tech: ["FastAPI", "Redis", "Docker"],
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
