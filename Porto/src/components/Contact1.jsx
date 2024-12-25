import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaJs,
  FaNode,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostman } from "react-icons/si";

const SkillIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 duration-300 transform group">
    <div className="p-3 bg-dark-800 rounded-lg group-hover:scale-110 duration-300">
      <Icon size={24} />
    </div>
    <span className="text-xs">{name}</span>
  </div>
);

const Contact = () => {
  // ... state declarations remain the same ...

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const skills = [
    { Icon: FaNode, name: "Node.js" },
    { Icon: FaJs, name: "JavaScript" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: FaGitAlt, name: "Git" },
    { Icon: SiPostman, name: "Postman" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiMysql, name: "MySQL" },
    // { Icon: SiRestapi, name: "REST APIs" },
  ];

  const socialLinks = [
    { Icon: FaGithub, name: "GitHub", link: "https://github.com/yourusername" },
    {
      Icon: FaLinkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
    },
    {
      Icon: FaTwitter,
      name: "Twitter",
      link: "https://twitter.com/yourusername",
    },
  ];

  // ... emailjs and handleSubmit functions remain the same ...
  useEffect(() => {
    emailjs.init("7_SNIRzUqMNDsFGEY");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send("service_4j0z0x9", "template_tk1r2vz", {
        from_name: formState.name,
        user_email: formState.email,
        message: formState.message,
        reply_to: formState.email,
      });

      setStatus({ submitting: false, submitted: true, error: null });
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section className="min-h-screen bg-dark-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
            {skills.map((skill) => (
              <SkillIcon key={skill.name} Icon={skill.Icon} name={skill.name} />
            ))}
          </div>
        </div>

        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="relative bg-dark-800 rounded-2xl p-8 shadow-xl">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-10 animate-pulse"
                style={{
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(${Math.random() * 255}, ${
                    Math.random() * 255
                  }, 255, 0.1)`,
                  animation: `pulse ${Math.random() * 3 + 2}s infinite`,
                }}
              />
            ))}
          </div>

          {status.submitted && (
            <div className="mb-4 p-4 bg-green-500:10 text-green-500 rounded-lg">
              Message sent successfully!
            </div>
          )}
          {status.error && (
            <div className="mb-4 p-4 bg-red-500:10 text-red-500 rounded-lg">
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative space-y-8">
            <div className="relative">
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                onFocus={() => setFocused({ ...focused, name: true })}
                onBlur={() => setFocused({ ...focused, name: false })}
                className="w-full bg-dark-700 text-light-100 px-4 py-3 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300"
                placeholder=" "
              />
              <label
                className={`absolute left-4 duration-300 pointer-events-none
                  ${
                    focused.name || formState.name
                      ? "-top-6 text-sm text-blue-400"
                      : "top-3 text-gray-400"
                  }`}
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                onFocus={() => setFocused({ ...focused, email: true })}
                onBlur={() => setFocused({ ...focused, email: false })}
                className="w-full bg-dark-700 text-light-100 px-4 py-3 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300"
                placeholder=" "
              />
              <label
                className={`absolute left-4 duration-300 pointer-events-none
                  ${
                    focused.email || formState.email
                      ? "-top-6 text-sm text-blue-400"
                      : "top-3 text-gray-400"
                  }`}
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                onFocus={() => setFocused({ ...focused, message: true })}
                onBlur={() => setFocused({ ...focused, message: false })}
                className="w-full h-40 bg-dark-700 text-light-100 px-4 py-3 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300 resize-none"
                placeholder=" "
              />
              <label
                className={`absolute left-4 duration-300 pointer-events-none
                  ${
                    focused.message || formState.message
                      ? "-top-6 text-sm text-blue-400"
                      : "top-3 text-gray-400"
                  }`}
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg
                ${
                  status.submitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:opacity-90 transform hover:scale-102"
                }
                duration-300`}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          {socialLinks.map(({ Icon, name, link }) => (
            <a
              key={name}
              href={link}
              className="text-gray-400 hover:text-blue-400 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
