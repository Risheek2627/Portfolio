import React, { useState, useEffect } from "react";

const TimelineItem = ({ data, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      className={`relative flex items-center transition-all duration-1000
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
        ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
      `}
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 w-px h-full bg-blue-500/30" />

      {/* Content */}
      <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300">
          <span className="text-blue-400 text-sm">{data.date}</span>
          <h3 className="text-xl font-bold text-white mt-2">{data.title}</h3>
          <p className="text-gray-400 mt-2">{data.description}</p>
          {data.skills && (
            <div className="flex flex-wrap gap-2 mt-4">
              {data.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Timeline dot */}
      <div className="absolute left-1/2 w-4 h-4 -ml-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
    </div>
  );
};

const ExperienceTimeline = () => {
  const experiences = [
    {
      date: "2023 - Present",
      title: "Backend Developer",
      description:
        "Leading backend development for scalable web applications. Implemented microservices architecture and improved system performance.",
      skills: ["Node.js", "Express", "MongoDB", "Docker"],
    },
    {
      date: "2022 - 2023",
      title: "Junior Developer",
      description:
        "Contributed to various full-stack projects and learned modern development practices.",
      skills: ["JavaScript", "React", "MySQL", "Git"],
    },
    {
      date: "2021 - 2022",
      title: "Coding Bootcamp",
      description:
        "Intensive programming bootcamp focusing on full-stack development.",
      skills: ["Web Development", "Database Design", "API Development"],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Experience & Education
        </h2>

        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} data={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
