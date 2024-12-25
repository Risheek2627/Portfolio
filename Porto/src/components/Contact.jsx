// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [focused, setFocused] = useState({
//     name: false,
//     email: false,
//     message: false,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log("Form submitted:", formState);
//   };

//   return (
//     <section className="min-h-screen bg-gray-900 py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//           Let's Connect
//         </h2>

//         <div className="relative bg-gray-800 rounded-2xl p-8 shadow-xl">
//           {/* Animated background elements */}
//           <div className="absolute inset-0 overflow-hidden rounded-2xl">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute rounded-full opacity-10 animate-pulse"
//                 style={{
//                   width: `${Math.random() * 200 + 50}px`,
//                   height: `${Math.random() * 200 + 50}px`,
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   background: `rgba(${Math.random() * 255}, ${
//                     Math.random() * 255
//                   }, 255, 0.1)`,
//                   animation: `pulse ${Math.random() * 3 + 2}s infinite`,
//                 }}
//               />
//             ))}
//           </div>

//           <form onSubmit={handleSubmit} className="relative space-y-8">
//             {/* Name Input */}
//             <div className="relative">
//               <input
//                 type="text"
//                 value={formState.name}
//                 onChange={(e) =>
//                   setFormState({ ...formState, name: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, name: true })}
//                 onBlur={() => setFocused({ ...focused, name: false })}
//                 className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.name || formState.name
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Your Name
//               </label>
//             </div>

//             {/* Email Input */}
//             <div className="relative">
//               <input
//                 type="email"
//                 value={formState.email}
//                 onChange={(e) =>
//                   setFormState({ ...formState, email: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, email: true })}
//                 onBlur={() => setFocused({ ...focused, email: false })}
//                 className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.email || formState.email
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Email Address
//               </label>
//             </div>

//             {/* Message Input */}
//             <div className="relative">
//               <textarea
//                 value={formState.message}
//                 onChange={(e) =>
//                   setFormState({ ...formState, message: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, message: true })}
//                 onBlur={() => setFocused({ ...focused, message: false })}
//                 className="w-full h-40 bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.message || formState.message
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Your Message
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Social Links */}
//         <div className="mt-12 flex justify-center gap-6">
//           {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
//             <a
//               key={platform}
//               href="https://github.com/risheek2627"
//               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//             >
//               {platform}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [focused, setFocused] = useState({
//     name: false,
//     email: false,
//     message: false,
//   });

//   const [status, setStatus] = useState({
//     submitting: false,
//     submitted: false,
//     error: null,
//   });

//   useEffect(() => {
//     // Initialize EmailJS with your public key
//     emailjs.init("YWUUGkxTbqZnQd0zbM");
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ submitting: true, submitted: false, error: null });

//     try {
//       await emailjs.send(
//         "service_4j0z0x9", // Your EmailJS service ID
//         "template_tk1r2vz", // Your EmailJS template ID
//         {
//           //   to_email: "sririsheek@gmail.com",
//           from_name: formState.name, // Sender's name
//           reply_to: formState.email, // Reply-to email address
//           message: formState.message,
//         }
//       );

//       setStatus({ submitting: false, submitted: true, error: null });
//       setFormState({ name: "", email: "", message: "" });

//       // Show success message for 3 seconds
//       setTimeout(() => {
//         setStatus((prev) => ({ ...prev, submitted: false }));
//       }, 3000);
//     } catch (error) {
//       setStatus({
//         submitting: false,
//         submitted: false,
//         error: "Failed to send message. Please try again.",
//       });
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-900 py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//           Let's Connect
//         </h2>

//         <div className="relative bg-gray-800 rounded-2xl p-8 shadow-xl">
//           {/* Animated background elements */}
//           <div className="absolute inset-0 overflow-hidden rounded-2xl">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute rounded-full opacity-10 animate-pulse"
//                 style={{
//                   width: `${Math.random() * 200 + 50}px`,
//                   height: `${Math.random() * 200 + 50}px`,
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   background: `rgba(${Math.random() * 255}, ${
//                     Math.random() * 255
//                   }, 255, 0.1)`,
//                   animation: `pulse ${Math.random() * 3 + 2}s infinite`,
//                 }}
//               />
//             ))}
//           </div>

//           {/* Status Messages */}
//           {status.submitted && (
//             <div className="mb-4 p-4 bg-green-500/10 text-green-500 rounded-lg">
//               Message sent successfully!
//             </div>
//           )}
//           {status.error && (
//             <div className="mb-4 p-4 bg-red-500/10 text-red-500 rounded-lg">
//               {status.error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="relative space-y-8">
//             {/* Name Input */}
//             <div className="relative">
//               <input
//                 type="text"
//                 required
//                 value={formState.name}
//                 onChange={(e) =>
//                   setFormState({ ...formState, name: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, name: true })}
//                 onBlur={() => setFocused({ ...focused, name: false })}
//                 className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.name || formState.name
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Your Name
//               </label>
//             </div>

//             {/* Email Input */}
//             <div className="relative">
//               <input
//                 type="email"
//                 required
//                 value={formState.email}
//                 onChange={(e) =>
//                   setFormState({ ...formState, email: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, email: true })}
//                 onBlur={() => setFocused({ ...focused, email: false })}
//                 className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.email || formState.email
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Email Address
//               </label>
//             </div>

//             {/* Message Input */}
//             <div className="relative">
//               <textarea
//                 required
//                 value={formState.message}
//                 onChange={(e) =>
//                   setFormState({ ...formState, message: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, message: true })}
//                 onBlur={() => setFocused({ ...focused, message: false })}
//                 className="w-full h-40 bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.message || formState.message
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Your Message
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={status.submitting}
//               className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg
//                 ${
//                   status.submitting
//                     ? "opacity-70 cursor-not-allowed"
//                     : "hover:opacity-90 transform hover:scale-[1.02]"
//                 }
//                 transition-all duration-300`}
//             >
//               {status.submitting ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>

//         {/* Social Links */}
//         <div className="mt-12 flex justify-center gap-6">
//           {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
//             <a
//               key={platform}
//               href="https://github.com/risheek2627"
//               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//             >
//               {platform}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const ContactForm = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [focused, setFocused] = useState({
//     name: false,
//     email: false,
//     message: false,
//   });

//   const [status, setStatus] = useState({
//     submitting: false,
//     submitted: false,
//     error: null,
//   });

//   useEffect(() => {
//     // Initialize EmailJS with your public key
//     emailjs.init("7_SNIRzUqMNDsFGEY");
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ submitting: true, submitted: false, error: null });

//     try {
//       await emailjs.send("service_4j0z0x9", "template_tk1r2vz", {
//         from_name: formState.name,
//         user_email: formState.email,
//         message: formState.message,
//         reply_to: formState.email,
//       });

//       setStatus({ submitting: false, submitted: true, error: null });
//       setFormState({ name: "", email: "", message: "" });

//       setTimeout(() => {
//         setStatus((prev) => ({ ...prev, submitted: false }));
//       }, 3000);
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       setStatus({
//         submitting: false,
//         submitted: false,
//         error: "Failed to send message. Please try again.",
//       });
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-900 py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//           Let's Connect
//         </h2>

//         <div className="relative bg-gray-800 rounded-2xl p-8 shadow-xl">
//           <div className="absolute inset-0 overflow-hidden rounded-2xl">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute rounded-full opacity-10 animate-pulse"
//                 style={{
//                   width: `${Math.random() * 200 + 50}px`,
//                   height: `${Math.random() * 200 + 50}px`,
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   background: `rgba(${Math.random() * 255}, ${
//                     Math.random() * 255
//                   }, 255, 0.1)`,
//                   animation: `pulse ${Math.random() * 3 + 2}s infinite`,
//                 }}
//               />
//             ))}
//           </div>

//           {status.submitted && (
//             <div className="mb-4 p-4 bg-green-500/10 text-green-500 rounded-lg">
//               Message sent successfully!
//             </div>
//           )}
//           {status.error && (
//             <div className="mb-4 p-4 bg-red-500/10 text-red-500 rounded-lg">
//               {status.error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="relative space-y-8">
//             <div className="relative">
//               <input
//                 type="text"
//                 required
//                 value={formState.name}
//                 onChange={(e) =>
//                   setFormState({ ...formState, name: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, name: true })}
//                 onBlur={() => setFocused({ ...focused, name: false })}
//                 className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.name || formState.name
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Your Name
//               </label>
//             </div>

//             <div className="relative">
//               <input
//                 type="email"
//                 required
//                 value={formState.email}
//                 onChange={(e) =>
//                   setFormState({ ...formState, email: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, email: true })}
//                 onBlur={() => setFocused({ ...focused, email: false })}
//                 className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.email || formState.email
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Email Address
//               </label>
//             </div>

//             <div className="relative">
//               <textarea
//                 required
//                 value={formState.message}
//                 onChange={(e) =>
//                   setFormState({ ...formState, message: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, message: true })}
//                 onBlur={() => setFocused({ ...focused, message: false })}
//                 className="w-full h-40 bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
//                 placeholder=" "
//               />
//               <label
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none
//                   ${
//                     focused.message || formState.message
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Your Message
//               </label>
//             </div>

//             <button
//               type="submit"
//               disabled={status.submitting}
//               className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg
//                 ${
//                   status.submitting
//                     ? "opacity-70 cursor-not-allowed"
//                     : "hover:opacity-90 transform hover:scale-[1.02]"
//                 }
//                 transition-all duration-300`}
//             >
//               {status.submitting ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>

//         <div className="mt-12 flex justify-center gap-6">
//           {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
//             <a
//               key={platform}
//               href="#"
//               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//             >
//               {platform}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

// todo

// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const ContactForm = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [focused, setFocused] = useState({
//     name: false,
//     email: false,
//     message: false,
//   });

//   const [status, setStatus] = useState({
//     submitting: false,
//     submitted: false,
//     error: null,
//   });

//   const socialLinks = [
//     { Icon: FaGithub, name: "GitHub", link: "https://github.com/risheek2627" },
//     {
//       Icon: FaLinkedin,
//       name: "LinkedIn",
//       link: "https://www.linkedin.com/in/risheek-n/",
//     },
//     // {
//     //   Icon: FaTwitter,
//     //   name: "Twitter",
//     //   link: "https://twitter.com/yourusername",
//     // },
//   ];

//   useEffect(() => {
//     emailjs.init("7_SNIRzUqMNDsFGEY");
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ submitting: true, submitted: false, error: null });

//     try {
//       await emailjs.send("service_4j0z0x9", "template_tk1r2vz", {
//         from_name: formState.name,
//         user_email: formState.email,
//         message: formState.message,
//         reply_to: formState.email,
//       });

//       setStatus({ submitting: false, submitted: true, error: null });
//       setFormState({ name: "", email: "", message: "" });

//       setTimeout(() => {
//         setStatus((prev) => ({ ...prev, submitted: false }));
//       }, 3000);
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       setStatus({
//         submitting: false,
//         submitted: false,
//         error: "Failed to send message. Please try again.",
//       });
//     }
//   };

//   return (
//     <section class="min-h-screen bg-dark-900 py-20 px-6">
//       <div class="max-w-4xl mx-auto">
//         {/* Skills Section */}
//         <div class="mb-16">
//           {/* <h3 class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//             My Skills
//           </h3> */}
//           {/* <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
//             {skills.map((skill) => (
//               <SkillIcon key={skill.name} Icon={skill.Icon} name={skill.name} />
//             ))}
//           </div> */}
//         </div>

//         <h2 class="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//           Let's Connect
//         </h2>

//         <div class="relative bg-dark-800 rounded-2xl p-8 shadow-xl">
//           <div class="absolute inset-0 overflow-hidden rounded-2xl">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 class="absolute rounded-full opacity-10 animate-pulse"
//                 style={{
//                   width: `${Math.random() * 200 + 50}px`,
//                   height: `${Math.random() * 200 + 50}px`,
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   background: `rgba(${Math.random() * 255}, ${
//                     Math.random() * 255
//                   }, 255, 0.1)`,
//                   animation: `pulse ${Math.random() * 3 + 2}s infinite`,
//                 }}
//               />
//             ))}
//           </div>

//           {status.submitted && (
//             <div class="mb-4 p-4 bg-green-500:10 text-green-500 rounded-lg">
//               Message sent successfully!
//             </div>
//           )}
//           {status.error && (
//             <div class="mb-4 p-4 bg-red-500:10 text-red-500 rounded-lg">
//               {status.error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} class="relative space-y-8">
//             <div class="relative">
//               <input
//                 type="text"
//                 required
//                 value={formState.name}
//                 onChange={(e) =>
//                   setFormState({ ...formState, name: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, name: true })}
//                 onBlur={() => setFocused({ ...focused, name: false })}
//                 class="w-full bg-dark-700 text-light-100 px-4 py-3 rounded-lg
//                        focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300"
//                 placeholder=" "
//               />
//               <label
//                 class={`absolute left-4 duration-300 pointer-events-none
//                   ${
//                     focused.name || formState.name
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Your Name
//               </label>
//             </div>

//             <div class="relative">
//               <input
//                 type="email"
//                 required
//                 value={formState.email}
//                 onChange={(e) =>
//                   setFormState({ ...formState, email: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, email: true })}
//                 onBlur={() => setFocused({ ...focused, email: false })}
//                 class="w-full bg-dark-700 text-light-100 px-4 py-3 rounded-lg
//                        focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300"
//                 placeholder=" "
//               />
//               <label
//                 class={`absolute left-4 duration-300 pointer-events-none
//                   ${
//                     focused.email || formState.email
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Email Address
//               </label>
//             </div>

//             <div class="relative">
//               <textarea
//                 required
//                 value={formState.message}
//                 onChange={(e) =>
//                   setFormState({ ...formState, message: e.target.value })
//                 }
//                 onFocus={() => setFocused({ ...focused, message: true })}
//                 onBlur={() => setFocused({ ...focused, message: false })}
//                 class="w-full h-40 bg-dark-700 text-light-100 px-4 py-3 rounded-lg
//                        focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300 resize-none"
//                 placeholder=" "
//               />
//               <label
//                 class={`absolute left-4 duration-300 pointer-events-none
//                   ${
//                     focused.message || formState.message
//                       ? "-top-6 text-sm text-blue-400"
//                       : "top-3 text-gray-400"
//                   }`}
//               >
//                 Your Message
//               </label>
//             </div>

//             <button
//               type="submit"
//               disabled={status.submitting}
//               class={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg
//                 ${
//                   status.submitting
//                     ? "opacity-70 cursor-not-allowed"
//                     : "hover:opacity-90 transform hover:scale-102"
//                 }
//                 duration-300`}
//             >
//               {status.submitting ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>

//         <div class="mt-12 flex justify-center gap-6">
//           {socialLinks.map(({ Icon, name, link }) => (
//             <a
//               key={name}
//               href={link}
//               class="text-gray-400 hover:text-blue-400 duration-300"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Icon size={24} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
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

  const socialLinks = [
    { Icon: FaGithub, name: "GitHub", link: "https://github.com/risheek2627" },
    {
      Icon: FaLinkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/risheek-n/",
    },
  ];

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
    <section className="min-h-screen bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 opacity-50" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Let's Connect
        </h2>

        <div className="relative bg-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full mix-blend-overlay animate-pulse"
                style={{
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(${Math.random() * 255}, ${
                    Math.random() * 255
                  }, 255, 0.05)`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              />
            ))}
          </div>

          {/* Status messages */}
          {status.submitted && (
            <div className="mb-6 p-4 bg-green-900 bg-opacity-20 text-green-400 rounded-lg text-center font-medium">
              Message sent successfully!
            </div>
          )}
          {status.error && (
            <div className="mb-6 p-4 bg-red-900 bg-opacity-20 text-red-400 rounded-lg text-center font-medium">
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative space-y-6">
            {/* Name input */}
            <div className="relative group">
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                onFocus={() => setFocused({ ...focused, name: true })}
                onBlur={() => setFocused({ ...focused, name: false })}
                className="w-full bg-gray-700 text-gray-100 px-4 py-3 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         transition-all duration-300"
                placeholder=" "
              />
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none
                        ${
                          focused.name || formState.name
                            ? "-top-6 text-sm text-indigo-400"
                            : "top-3 text-gray-400"
                        }`}
              >
                Your Name
              </label>
            </div>

            {/* Email input */}
            <div className="relative group">
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                onFocus={() => setFocused({ ...focused, email: true })}
                onBlur={() => setFocused({ ...focused, email: false })}
                className="w-full bg-gray-700 text-gray-100 px-4 py-3 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         transition-all duration-300"
                placeholder=" "
              />
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none
                        ${
                          focused.email || formState.email
                            ? "-top-6 text-sm text-indigo-400"
                            : "top-3 text-gray-400"
                        }`}
              >
                Email Address
              </label>
            </div>

            {/* Message textarea */}
            <div className="relative group">
              <textarea
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                onFocus={() => setFocused({ ...focused, message: true })}
                onBlur={() => setFocused({ ...focused, message: false })}
                className="w-full h-40 bg-gray-700 text-gray-100 px-4 py-3 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         transition-all duration-300 resize-none"
                placeholder=" "
              />
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none
                        ${
                          focused.message || formState.message
                            ? "-top-6 text-sm text-indigo-400"
                            : "top-3 text-gray-400"
                        }`}
              >
                Your Message
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white py-4 rounded-lg font-medium
                       transition-all duration-300
                       ${
                         status.submitting
                           ? "opacity-70 cursor-not-allowed"
                           : "hover:opacity-90 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
                       }`}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-8">
          {socialLinks.map(({ Icon, name, link }) => (
            <a
              key={name}
              href={link}
              className="text-gray-400 hover:text-indigo-400 transform hover:scale-110 
                      transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
