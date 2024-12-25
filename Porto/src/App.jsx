// import React from "react";
// import Navbar from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";

// import SkillCloud from "./components/Skills";
// import ExperienceTimeline from "./components/ExperienceTimeline";
// import ContactForm from "./components/Contact";
// import CustomCursor from "./components/CustomCursor";
// const App = () => {
//   return (
//     <div className="font-sans">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <SkillCloud />
//       <ExperienceTimeline />
//       <CustomCursor />
//       <ContactForm />
//       <Footer />
//     </div>
//   );
// };

// export default App;

// todo

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
// import Navbar from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";

// import SkillCloud from "./components/Skills";
// import ExperienceTimeline from "./components/ExperienceTimeline";
// import ContactForm from "./components/Contact";
// import CustomCursor from "./components/CustomCursor";

// const App = () => {
//   return (
//     <Router>
//       <div className="font-sans">
//         <Navbar />
//         <Routes>
//           {/* Home Route */}
//           <Route path="/" element={<Hero />} />
//           {/* Portfolio Route */}
//           <Route
//             path="/portfolio"
//             element={
//               <>
//                 <About />
//                 <Projects />
//                 <SkillCloud />
//                 <ExperienceTimeline />
//                 <ContactForm />
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// todo
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import SkillCloud from "./components/Skills";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactForm from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Hero />} />
          {/* Portfolio Route */}
          <Route
            path="/portfolio"
            element={
              <div className="bg-neutral-800 text-white">
                <section id="about" className="py-16">
                  <About />
                </section>
                <section id="skills" className="py-16">
                  <SkillCloud />
                </section>
                <section id="experience" className="py-16">
                  <ExperienceTimeline />
                </section>
                <section id="projects" className="py-16">
                  <Projects />
                </section>
                <section id="Contact" className="py-16">
                  <ContactForm />
                </section>
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
