import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ExperienceShell from './components/ExperienceShell';
import ProjectCard from './components/ProjectCard';
import Contacts from './components/Contacts';
import AboutMe from './components/CurrentlyBuilding';
import Socials from './components/Socials';

function App() {
  const typedElement = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ["Hey there, I'm Alen."],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8EC3FF] from-0% to-[#BDE0FE] to-40% relative">
      {/* SVG Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="pattern-13" patternUnits="userSpaceOnUse" width="80" height="80">
              <path d="M0,0 l0,80 M0,40 l80,0" stroke="white" strokeWidth="3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-13)" />
        </svg>
      </div>
      
      <Navbar />
      
      <main className="pt-24">
        <section id="home" className="min-h-screen flex items-center justify-center p-8">
          <div className="w-full max-w-[1400px]">
            <div className="text-center mb-12">
              <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
                <span ref={typedElement} className="inline-block"></span>
              </h1>
             <AboutMe
            description={`I’m Alen Thomas, a Computer Science Honours student at the University of Calgary. I’m most interested in Java/Spring Boot, machine learning, and the beauty of algorithms, and I dabble in frontend work too.

Outside of coding, I find joy in playing piano, making homemade pasta, and hosting friends and family.`}
          />
            </div>
            <ExperienceShell />
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center p-8">
          <div className="w-full max-w-[1400px] space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
              <p className="text-lg text-white/90">My latest work and creations</p>
            </div>
            
            <ProjectCard
              title="OmG Game Engine"
              description="Developed desktop client using MVC architecture with Java Swing, leveraging FlatLaf for modern UI theming and
            MigLayout for responsive component positioning.
            
            Implemented complete user authentication and profile management system with real-time statistics tracking and
game matchmaking functionality"
              icon=""
              stars={33}
              links={{
                learnMore: "#",
                useProject: "#",
                github: "https://github.com/yourusername/paper"
              }}
              article="https://example.com/article"
              featured={true}
            />

              <ProjectCard 
               title="Retinal Disease Classification & OCT Image Retrieval" 
               description="Tech stack: Python, PyTorch, FAISS, LangChain (2024). Fine-tuned a dual-head ResNet50 on the OLIVES OCT dataset for retinal disease classification and multi-label biomarker detection; implemented a two-phase training pipeline (transfer learning then full fine-tuning) with reproducible seeding, augmentation, and checkpoint tracking; embedded 2048-dim feature vectors into a FAISS index for similarity-based image retrieval with LangChain-powered clinical querying."
               icon="/interlock.png" 
               stars={33}
               links={{ 
                learnMore: "#", 
                useProject: "#", 
                github: "https://github.com/yourusername/paper"
               }}
               article="https://example.com/article"
               featured={true}
               />

              <ProjectCard 
               title="Syllabud" 
               description="A software tool to manage and validate your prerequisites at the University of Calgary, keep you on track to graduate, and parse the university’s confusing prerequisite descriptions (ahh!!)."
               icon="/linkedin.png" 
               stars={33}
               links={{ 
                learnMore: "#", 
                useProject: "#", 
                github: "https://github.com/yourusername/paper"
               }}
               article="https://example.com/article"
               featured={true}
               />
            
            {/* Add more ProjectCard components here */}
          </div>
        </section>
        
        <Section 
          id="resume" 
          title="Resume" 
          description="My experience and skills" 
        />
        
        <section id="currently-building" className="min-h-screen flex items-center justify-center p-8">
          
        </section>
        
        <Socials />
      </main>
    </div>
  );
}

export default App;
